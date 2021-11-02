import React, { useState } from 'react';
import './SortingVisualizer.css';
import { Button } from '@mui/material';
import mergeSort from './Algorithms/mergeSort';

export default function SortingVisualizer() {
    const [arrayToSort, setArrayToSort] = useState([]);

    const generateNewArray = () => {
        const array = [];
        for (let i = 0; i < 100; i++) {
            array.push(randomInt(5, 800));
        }
        console.log(array);
        setArrayToSort(array);
    }

    const randomInt = (min, max) => {
        return Math.floor(Math.random() * (max - min + 1) + min);
    }  

    return (
        <div>
            <h1>Time to Sort</h1>
            <Button variant="contained" color="primary" onClick={generateNewArray}>Generate Array</Button>
            <Button variant="contained" color="primary" onClick={mergeSort}>Merge Sort</Button>
            <div className="arrayContainer">
                {arrayToSort.map((value, index) => (
                    <div className="arrayToSortBar" key={index} style={{height: `${value}px`}}>
                    </div>
                ))}
            </div>
        </div>   
    )
}