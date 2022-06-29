import React, { useEffect, useMemo, useState } from 'react';
import { useDispatch } from "react-redux";

import { handleUpdatePosition } from '../redux/generalActions';

import "./entity.scss";

const Entity = ({ id, speed, color, startingPosition, direction, generationTimespan, remainingTime }) => {
    const [currentPosition, setCurrentPosition] = useState(startingPosition);

    const dispatch = useDispatch();

    const style = useMemo(() => {
        return { top: currentPosition.top, left: currentPosition.left, backgroundColor: color };
    }, [color, currentPosition ]);

    useEffect(() => {
        if (remainingTime < generationTimespan) {
            let newPosition = currentPosition;
    
            switch(direction) {
                case 4:
                    newPosition = { top: Math.min(currentPosition.top - speed, window.innerHeight), left: Math.min(currentPosition.left, window.innerWidth) };
                    break;
                    case 3.5:
                        newPosition = { top: Math.min(currentPosition.top - speed, window.innerHeight), left: Math.min(currentPosition.left - speed, window.innerWidth) };
                        break;
                        case 3:
                            newPosition = { top: Math.min(currentPosition.top, window.innerHeight), left: Math.min(currentPosition.left - speed, window.innerWidth) };
                            break;
                            case 2.5:
                                newPosition = { top: Math.min(currentPosition.top + speed, window.innerHeight), left: Math.min(currentPosition.left - speed, window.innerWidth) };
                                break;
                                case 2:
                                    newPosition = { top: Math.min(currentPosition.top + speed, window.innerHeight), left: Math.min(currentPosition.left, window.innerWidth) };
                                    break;
                                    case 1.5:
                                        newPosition = { top: Math.min(currentPosition.top + speed, window.innerHeight), left: Math.min(currentPosition.left + speed, window.innerWidth) };
                                        break;
                                        case 1:
                                            newPosition = { top: Math.min(currentPosition.top, window.innerHeight), left: Math.min(currentPosition.left + speed, window.innerWidth) };
                                            break;
                                            case 0.5:
                                                newPosition = { top: Math.min(currentPosition.top - speed, window.innerHeight), left: Math.min(currentPosition.left + speed, window.innerWidth) };
                                                break;
                default:
                    break;
            }
    
            setCurrentPosition(newPosition);
            dispatch(handleUpdatePosition(id, newPosition));
        }
    }, [remainingTime]);

    return <div style={style} className="entity"></div>
}

export default Entity;