import React from 'react';
import MesaVerde from './parks/MesaVerde';
import { trees, wildlife } from './parks/RockyMountain';
import * as RMFunctions from './parks/RockyMountain';
import {
    trees as parkTrees,
    wildlife as parkWildLife,
} from './parks/RockyMountain';

console.log(trees);
console.log(RMFunctions.trees);
console.log(parkTrees);
parkWildLife();

RMFunctions.wildlife();
RMFunctions.elevation();

wildlife();

function ColoradoStateParks() {
    return (
        <div>
            <MesaVerde />
        </div>
    );
}

export default ColoradoStateParks;
