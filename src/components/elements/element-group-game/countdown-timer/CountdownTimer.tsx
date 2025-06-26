import React, {CSSProperties, useEffect, useState} from 'react';
import './CountdownTimer.scss';
import Title from "../../element-group-native/title/Title";
import {TagType} from "../../../../models/html/TagType";

interface CountdownTimerProps {
    timeInSeconds: number;
}

function CountdownTimer(props: CountdownTimerProps) {
    const [secondsRemaining, setSecondsRemaining] = useState(props.timeInSeconds);
    const [millisecondsRemaining, setMillisecondsRemaining] = useState(props.timeInSeconds * 1000);
    useEffect(() => {
        const secondInterval = setInterval(() => {
            setSecondsRemaining(prev => {
                if (prev <= 0) {
                    clearInterval(secondInterval);
                    return 0;
                }
                return prev - 1;
            });
        }, 1000);
        const interval = setInterval(() => {
            setMillisecondsRemaining(prev => {
                if (prev <= 0) {
                    clearInterval(interval);
                    return 0;
                }
                return prev - 50;
            });
        }, 50);
        return () => {
            clearInterval(secondInterval);
            clearInterval(interval);
        };
    }, []);

    function getPercentElapsed(): number {
        const totalTimeInMillis: number = props.timeInSeconds * 1000;
        let percentElapsed = ((totalTimeInMillis - millisecondsRemaining) / totalTimeInMillis) * 100;
        // console.log(`Percent elapsed: ${percentElapsed}%`);
        return percentElapsed;
    }

    function getBackgroundColor(): string {
        const percentComplete: number = getPercentElapsed();
        if (percentComplete < 50) {
            return 'green';
        } else if (percentComplete < 75) {
            return 'yellow';
        } else {
            return 'red';
        }
    }

    function getWidthStyle(): CSSProperties {
        return {
            width: `${getPercentElapsed()}%`,
            backgroundColor: getBackgroundColor(),
            transition: 'width 0.1s ease-in-out',
        }
    }


    function getRemainingTimeText(): string {
        if (secondsRemaining <= 0) {
            return "Time's up!";
        } else {
            return secondsRemaining.toString();
        }
    }

    return (
        <div className={"countdown-timer"}>
            <div className={"time-display-div"}>
                <Title className={"countdown-timer-text"} tagType={TagType.H4} text={getRemainingTimeText()}/>
                <div className={"time-remaining-div"} style={getWidthStyle()}>

                </div>
            </div>
        </div>
    );
}

export default CountdownTimer;