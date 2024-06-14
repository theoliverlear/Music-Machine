import React, {useEffect, useState} from 'react';
import {MidiDeviceInfo} from "../../models/MidiDeviceInfo";
import Menu from "../ui/menu/Menu";

function MidiPopup() {
    // const midiDevices: MidiDeviceInfo[] = [];
    const [midiDevices, setMidiDevices] = useState<MidiDeviceInfo[]>([]);
    const [selectedMidiDevice, setSelectedMidiDevice] = useState<MidiDeviceInfo | undefined>(undefined);
    useEffect(() => {
        function buildMidiDevicesList() {
            navigator.requestMIDIAccess().then((midiAccess) => {
                const devices: MidiDeviceInfo[] = [];
                midiAccess.inputs.forEach((input: any) => {
                    devices.push(new MidiDeviceInfo(input.id, input.name));
                });
                setMidiDevices(devices);
            });
        }

        buildMidiDevicesList();
    }, []);
    function onMenuItemClick(title: string) {
        console.log('Menu item clicked: ', title);
        let selectedMidiDevice: MidiDeviceInfo | undefined = midiDevices.find((midiDevice: MidiDeviceInfo) => midiDevice.name === title);
        if (selectedMidiDevice) {
            console.log('Selected Midi Device: ', selectedMidiDevice.toString());
            setSelectedMidiDevice(selectedMidiDevice);
        }
    }
    return (
        <div>
            <Menu title="Midi Devices" titleSize={2} listItemsTitles={midiDevices.map((midiDevice: MidiDeviceInfo) => midiDevice.name)} listItemSize={4} onMenuItemClick={onMenuItemClick}/>
        </div>
    );
}
export default MidiPopup;