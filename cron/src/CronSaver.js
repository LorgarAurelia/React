import React from "react";
import { useState } from "react";

export default function Buttons(props){
    const [cronCommand, generateCron] = useState();

    function saveToCron(){
        switch (props.scheduleType){
            default:
                alert("Please, choose the schedule type!");
                break;
            case 'perMinutes':
                generateCron(`0 0/${props.minutes} * 1/1 * ? *`);
                break;
            case 'weekly':
                generateCron(`${props.time} ? * ${props.daysOfWeek} *`)
                break;
            case 'eachMonth':
                generateCron(`${props.time} ${props.day} 1/1 ? *`);
                break;
            case 'everyDay':
                if(props.hour > 0) { generateCron(`${props.time},${props.hour} * * *`);}
                else {generateCron(`${props.time} * * *`)}
        }
    }
    return (
        <div className='buttons'>
                <button onClick={saveToCron}> Save </button>
                <input type="text" name='cronCommand' value={cronCommand} />
        </div>
    )
}