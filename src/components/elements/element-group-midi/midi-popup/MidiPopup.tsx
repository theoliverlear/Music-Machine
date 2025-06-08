import React, {useEffect, useState} from 'react';
import Menu from "../../element-group-menu/menu/Menu";
import {MidiDeviceInfo} from "../../../../models/midi/MidiDeviceInfo";
import {TagType} from "../../../../models/html/TagType";

interface MidiPopupProps {
    onMidiDeviceSelected: (midiInput: WebMidi.MIDIInput | undefined, midiOutput: WebMidi.MIDIOutput | undefined) => void;
}

function MidiPopup(props: MidiPopupProps) {
    // const midiDevices: MidiDeviceInfo[] = [];
    const [midiDevices, setMidiDevices] = useState<MidiDeviceInfo[]>([]);
    const [selectedMidiInfoDevice, setSelectedMidiInfoDevice] = useState<MidiDeviceInfo | undefined>(undefined);
    const [midiDeviceSelected, setMidiDeviceSelected] = useState<boolean>(false);
    const [midiInputDevice, setMidiInputDevice] = useState<WebMidi.MIDIInput | undefined>(undefined);
    const [midiOutputDevice, setMidiOutputDevice] = useState<WebMidi.MIDIOutput | undefined>(undefined);
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
    async function onMenuItemClick(title: string) {
        console.log('Menu item clicked: ', title);
        let selectedDevice: MidiDeviceInfo | undefined = midiDevices.find((midiDevice: MidiDeviceInfo): boolean => midiDevice.name === title);
        if (selectedDevice) {
            console.log('Selected Midi Device: ', selectedDevice.toString());
            setSelectedMidiInfoDevice(selectedDevice);
            setMidiDeviceSelected(true);
            const deviceID: string = selectedDevice.id;
            const inputDevice: WebMidi.MIDIInput | undefined = await navigator.requestMIDIAccess().then((midiAccess) => {
                return midiAccess.inputs.get(deviceID);
            });
            setMidiInputDevice(inputDevice);
            props.onMidiDeviceSelected(inputDevice, midiOutputDevice);
        }
    }
    return (
        <div>
            {!midiDeviceSelected && (<Menu
                title="Midi Devices"
                tagType={TagType.H2}
                listItemsTitles={midiDevices.map((midiDevice: MidiDeviceInfo): string => midiDevice.name)}
                listItemTagType={TagType.H4}
                onMenuItemClick={onMenuItemClick}/>)}
        </div>
    );
}
export default MidiPopup;