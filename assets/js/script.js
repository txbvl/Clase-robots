
import {robots} from './robots.js';

console.log(robots[0]);

console.log(robots[0].id);
console.log(robots[0].name);
console.log(robots[0].series);

const {id, name, series } = robots[0];

console.log(id);
console.log(name);
console.log(series);

const getRobotById = (id= "")=> {
    return robots.find ((robot)=>{
        return robot.id === id;
    });
}

console.log(getRobotById("013"))

const getRobotBySeries = (series= 2) =>{
    return robots.filter((robot) => {
        return robot.series === series;
    })
}

console.log(getRobotBySeries())
console.log(getRobotBySeries(3))