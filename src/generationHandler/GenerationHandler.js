import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';

import Entity from '../entity/Entity';

import "./generationHandler.scss";

const GenerationHandler = () => {
    const { generationTimespan, population } = useSelector(state => state.generalData);
    const [remainingTime, setRemainingTime] = useState(generationTimespan);

    const step = async () => {
        for (let i = generationTimespan; i > 0; i -= 0.1) {
            await setTimeout(() => {
                setRemainingTime(i);
            }, 1000);

            if (i <= 0.1) {
                const populationArr = Object.values(population);

                let maxDistanceTraveled = [...populationArr].sort((a,b) => {
                    let ax = Math.abs(a.position.left - a.startingPosition.left),
                        ay = Math.abs(a.position.top - a.startingPosition.top),
                        bx = Math.abs(b.position.left - b.startingPosition.left),
                        by = Math.abs(b.position.top - b.startingPosition.top);
                        
                    return (ax+ay) - (bx+by);
                });
                    // console.log('hello');
                let a = maxDistanceTraveled[maxDistanceTraveled.length - 1];
                
                let ax = Math.abs(a.position.left - a.startingPosition.left),
                ay = Math.abs(a.position.top - a.startingPosition.top);
                
                console.log((ax+ay));
                console.log(maxDistanceTraveled.slice(maxDistanceTraveled.length / 2));
            }
        }
    }

    useEffect(() => {
        setTimeout(() => {
            step();
        }, 1000);
    }, []);

    return <div className="generation-handler">
        {Object.values(population).map(e => {
            return <Entity key={e.id} {...e} generationTimespan={generationTimespan} remainingTime={remainingTime}/>
        })}
    </div>
}

export default GenerationHandler;