import './Schedule.css';
import { useState } from 'react';

function ScheduleWindow() 
{
    const [cronCommand, generateCron] = useState();

    const [scheduleType, setSheduleType] = useState();
    const onOptionChange = e => {setSheduleType(e.target.value)};

    const [minutes, setMinutes] = useState();
    const changeMinutes = e => {
        if(isValid(e.target.value)){
            setMinutes(e.target.value)}
        }

    const [time, setTime] = useState();
    const changeTime = e => {
        let result = e.target.value.match(/[1-9]\d?/gm);
        setTime(`0 ${result[0]} ${result[1]}`);
    }

    const [daysOfWeek, setDays] = useState('');
    const addDay = e => {
        if(e.target.checked){
            if(daysOfWeek === ''){
                setDays(e.target.value)
            }
            else{
                setDays(daysOfWeek + ',' + e.target.value);
            }
        }
        else{
            if(daysOfWeek.substring(daysOfWeek.length - 4) === ',' + e.target.value){
                setDays(daysOfWeek.replace(',' + e.target.value, ''));
            }
            if(daysOfWeek.substring(daysOfWeek.length - 3) === e.target.value){
                setDays(daysOfWeek.replace(e.target.value, ''));
            }
            else{
                setDays(daysOfWeek.replace(e.target.value + ',', ''));
            }    
        }  
    }

    const [day, setDay] = useState();
    const changeDay = e => {
        if(isValid(e.target.value)){
            if(e.target.value > 28){
                alert("Process wouldn't work in some months!");
            }
            setDay(e.target.value);
        }
    }

    const [hour, setHour] = useState();
    const changeHour = e =>{
        if(isValid(e.target.value)){
            setHour(e.target.value);
        }
    }

    function isValid(a){
        if(a > 0){
            return true;
        }
        else {
            alert("Value must be positive!")
            return false;
        }
    }

    function saveToCron(){
        switch (scheduleType){
            default:
                alert("Please, choose the schedule type!");
                break;
            case 'perMinutes':
                generateCron(`0 0/${minutes} * 1/1 * ? *`);
                break;
            case 'weekly':
                generateCron(`${time} ? * ${daysOfWeek} *`)
                break;
            case 'eachMonth':
                generateCron(`${time} ${day} 1/1 ? *`);
                break;
            case 'everyDay':
                if(hour > 0) { generateCron(`${time},${hour} * * *`);}
                else {generateCron(`${time} * * *`)}
        }
    }
    
    return(
        <div>
            <div className="shedule">
                <div className='options'>
                    <p>
                        <label>
                            <input type="radio" name='scheduleType' value='perMinutes' onChange={onOptionChange}/>
                            Each N Minutes
                        </label>
                        <label>
                            <input type="radio" name='scheduleType' value='weekly' onChange={onOptionChange}/>
                            Weekly
                        </label>
                        <label>
                            <input type="radio" name='scheduleType' value='everyDay' onChange={onOptionChange}/>
                            Everyday
                        </label>
                        <label>
                            <input type="radio" name='scheduleType' value='eachMonth' onChange={onOptionChange}/>
                            Each Month
                        </label>
                    </p>
                </div>
                <label> Days</label>
                <div className='days'>
                    <input type="checkbox" value="MON" onChange={addDay}/> Monday 
                    <input type="checkbox" value="TUE" onChange={addDay}/> Tuesday 
                    <input type="checkbox" value="WED" onChange={addDay}/> Wednesday
                    <input type="checkbox" value="THU" onChange={addDay}/> Thursday
                    <input type="checkbox" value="FRI" onChange={addDay}/> Friday
                    <input type="checkbox" value="SAT" onChange={addDay}/> Saturday
                    <input type="checkbox" value="SUN" onChange={addDay}/> Sunday
                </div>
                <div className='time'>
                    At <input type="time" name="scheduleTime"  onChange={changeTime}/>
                </div>
                <div className='perMinutes'>
                    <label>Every</label>
                    <input type="number" name="minutes" onChange={changeMinutes} />
                    <label>minutes</label>
                </div>
                <div className='perMonth'>
                    Day<input type="number" name="day" onChange={changeDay}/>of every month
                </div>
                <div className='additionalHour'>
                    Additional start hour <input type="number" name="additionalHour" onChange={changeHour}/>
                </div>
            </div>
            <div className='buttons'>
                <button onClick={saveToCron}> Save </button>
                <button> Load </button>
            </div>
            <div>
                <input type="text" name='cronCommand' value={cronCommand} />
                <p>{minutes}</p>
            </div>
        </div>
        
    )
}


export default ScheduleWindow;