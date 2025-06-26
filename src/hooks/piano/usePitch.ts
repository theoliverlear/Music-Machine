import {useCallback, useState} from "react";
import {
    Pitch,
    PitchType
} from "../../components/elements/element-group-setting/pitch-slider/models/types";
import { Note } from "../../models/note/Note";
import {ChordFactory} from "../../models/chord/ChordFactory";

export function usePitch() {
    //==============================-State-===================================
    const [pitchState, setPitchState] = useState<Pitch>('natural');
    const [pitchType, setPitchType] = useState<PitchType>('auto');
    //=============================-Handlers-=================================

    //------------------------Handle-Pitch-Change-----------------------------
    const handlePitchChange: (newPitch: Pitch) => void = useCallback((newPitch: Pitch) => {
        setPitchState(newPitch);
    }, []);
    //--------------------Handle-Pitch-Type-Selection-------------------------
    const handlePitchTypeSelection: (newPitchType: PitchType) => void = useCallback((newPitchType: PitchType) => {
        setPitchType(newPitchType);
    }, []);
    //=============================-Helpers-==================================

    //-----------------------------Get-Pitch----------------------------------
    const getPitch: (currentNotes: Note[]) => Pitch = useCallback((currentNotes: Note[]): Pitch => {
            if (pitchType === 'auto' && pitchState === 'natural') {
                return ChordFactory.getAutoPitch(currentNotes);
            }
            return pitchState;
        },
        [pitchState, pitchType]);

    return {
        pitchState,
        pitchType,
        handlePitchChange,
        handlePitchTypeSelection,
        getPitch,
    };
}