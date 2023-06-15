import Buttons from './CronSaver';
import { useState } from 'react';

function ScheduleWindow(props) 
{
    const onOptionChange = e => {
        props.onChange(e.target.value);
    };

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
                setDays(daysOfWeek.replace(`,${e.target.value}`, ''));
            }
            else if(daysOfWeek.substring(daysOfWeek.length - 3) === e.target.value){
                setDays(daysOfWeek.replace(e.target.value, ''));
            }
            else{
                setDays(daysOfWeek.replace(e.target.value + ',', ''));
            }    
        }  
    }

    const [day, setDay] = useState();
    const changeDay = e => {
        if(isValid(e.target.value) && e.target.value < 32){
            if(e.target.value > 28){
                alert("Process wouldn't work in some months!");
            }
            setDay(e.target.value);
        }
        else{alert('No more than 31 days in a month!')}
    }

    const [hour, setHour] = useState();
    const changeHour = e =>{
        if(isValid(e.target.value)){
            setHour(e.target.value);
        }
    }

    function isValid(int){
        if(int > 0){
            return true;
        }
        else {
            alert("Unacceptable value!")
            return false;
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
                <label className={props.daysSelector}> Days</label>
                <div className={props.daysSelector}>
                    <input type="checkbox" value="MON" onChange={addDay}/> Monday 
                    <input type="checkbox" value="TUE" onChange={addDay}/> Tuesday 
                    <input type="checkbox" value="WED" onChange={addDay}/> Wednesday
                    <input type="checkbox" value="THU" onChange={addDay}/> Thursday
                    <input type="checkbox" value="FRI" onChange={addDay}/> Friday
                    <input type="checkbox" value="SAT" onChange={addDay}/> Saturday
                    <input type="checkbox" value="SUN" onChange={addDay}/> Sunday
                </div>
                <div className={props.timeSelector}>
                    At <input type="time" name="scheduleTime"  onChange={changeTime}/>
                </div>
                <div className={props.minutesSelector}>
                    <label>Every</label>
                    <input type="number" name="minutes" onChange={changeMinutes} />
                    <label>minutes</label>
                </div>
                <div className={props.dateSelector}>
                    Day<input type="number" name="day" onChange={changeDay} />of every month
                </div>
                <div className={props.hourSelector}>
                    Additional start hour <input type="number" name="additionalHour" onChange={changeHour}/>
                </div>
            </div>
            <Buttons scheduleType = {props.scheduleType} minutes  = {minutes}  time = {time} daysOfWeek = {daysOfWeek} day = {day} hour = {hour}/>
        </div>
        
    )
}

export default ScheduleWindow;