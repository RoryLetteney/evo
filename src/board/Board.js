import React, { useEffect, useState } from 'react';
import { useSelector, useDispatch } from "react-redux";
import GenerationHandler from '../generationHandler/GenerationHandler';
import { handleSetPopulation } from '../redux/generalActions';

const maxSpeed = 6;

const Board = () => {
    const dispatch = useDispatch();
    const { population } = useSelector(state => state.generalData)

    useEffect(() => {
        let newPopulation = {};

        for (let i = 0; i < 1000; i++) {
            let entity = { id: i };

            entity.speed = parseFloat((Math.random() * maxSpeed).toFixed(2));
            
            if (entity.speed > 4) entity.color = `rgb(${Math.floor(256 * (entity.speed / maxSpeed))}, 255, 255)`;
            else if (entity.speed > 2) entity.color = `rgb(255, ${Math.floor(256 * (entity.speed / maxSpeed))}, 255)`;
            else entity.color = `rgb(255, 255, ${Math.floor(256 * (entity.speed / maxSpeed))})`;

            entity.startingPosition = { top: Math.floor(Math.random() * window.innerHeight), left: Math.floor(Math.random() * window.innerWidth) };
            entity.position = entity.startingPosition;

            entity.direction = Math.floor(Math.random() * 5) + (Math.floor(Math.random() * 3) / 2);

            newPopulation[i] = entity;
        }

        dispatch(handleSetPopulation(newPopulation));
    }, []);

    return <div className="board">
        {Object.keys(population).length && <GenerationHandler />}
    </div>
}

export default Board;