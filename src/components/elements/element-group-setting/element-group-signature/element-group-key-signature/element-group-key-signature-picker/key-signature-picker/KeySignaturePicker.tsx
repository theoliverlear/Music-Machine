import React, {ReactElement, useEffect, useRef, useState} from 'react';
import {
    KeySignature
} from "../../../../../../../models/signature/KeySignature";
import KeySignatureOption from "../key-signature-option/KeySignatureOption";
import './KeySignaturePicker.scss';
import {AnalogousKeys} from "../../../../../../../models/signature/types";

interface KeySignaturePickerProps {
    onKeySignatureChange?: (analogousKeys: AnalogousKeys) => void;
}

function KeySignaturePicker(props: KeySignaturePickerProps): ReactElement {
    const [selectedKeySignature, setSelectedKeySignature] = useState<AnalogousKeys>(KeySignature.cMajorAnalogousKey);
    const [isPickerOpen, setIsPickerOpen] = useState<boolean>(false);
    const pickerRef = useRef<HTMLDivElement>(null);

    function handleIsPickerOpenChange(isOpen: boolean): void {
        setIsPickerOpen(isOpen);
    }

    function handleKeySignatureChange(analogousKeys: AnalogousKeys): void {
        setSelectedKeySignature(analogousKeys);
        setIsPickerOpen(false);
        if (props.onKeySignatureChange) {
            props.onKeySignatureChange(analogousKeys);
        }
    }

    useEffect(() => {
        function handleClickOutside(event: MouseEvent): void {
            if (pickerRef.current && !pickerRef.current.contains(event.target as Node)) {
                setIsPickerOpen(false);
            }
        }
        document.addEventListener('mousedown', handleClickOutside);
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, []);


    return (
        <div className={"key-signature-picker"} ref={pickerRef}>
            {!isPickerOpen &&
                <KeySignatureOption analogousKeys={selectedKeySignature} onClick={() => handleIsPickerOpenChange(true)}/>
            }
            {isPickerOpen &&
                (<div className={"key-signature-options"}>
                    {KeySignature.analogousKeys.map((analogousKeys: any, index: number) => (
                        <KeySignatureOption analogousKeys={analogousKeys} key={index} onClick={handleKeySignatureChange}/>
                    ))}
                </div>)
            }
        </div>
    );
}

export default KeySignaturePicker;