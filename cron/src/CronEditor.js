import React from "react";
import { useState } from "react";
import ScheduleWindow from "./ScheduleWindow";
import './Schedule.css';

export default function CronEditor(){
    const [dateSelector, setDateSelectorName] = useState('dateSelector-inactive');
    const [daysSelector, setDaySelectorName] = useState('daysSelector-inactive');
    const [timeSelector, setTimeSelector] = useState('timeSelector-inactive');
    const [minutesSelector, setMinutesSelector] = useState('minutesSelector-inactive');
    const [hourSelector, setHourSelector] = useState('hourSelector-inactive');

    const [scheduleType, setSheduleType] = useState('');
    function onChange(schedule){
        setSheduleType(schedule);
        switch(schedule){
            default: 
            break;
            case 'perMinutes':
                setMinutesSelector('minutesSelector');
                setDateSelectorName('dateSelector-inactive');
                setDaySelectorName('daysSelector-inactive');
                setTimeSelector('timeSelector-inactive');
                setHourSelector('hourSelector-inactive');
                break;
            case 'weekly':
                setMinutesSelector('minutesSelector-inactive');
                setDateSelectorName('dateSelector-inactive');
                setDaySelectorName('daysSelector');
                setTimeSelector('timeSelector');
                setHourSelector('hourSelector-inactive');
                break;
            case 'eachMonth':
                setTimeSelector('timeSelector');
                setDateSelectorName('dateSelector');
                setHourSelector('hourSelector-inactive');
                setMinutesSelector('minutesSelector-inactive');
                setDaySelectorName('daysSelector-inactive');
                break;
            case 'everyDay':
                setTimeSelector('timeSelector');
                setHourSelector('hourSelector');
                setMinutesSelector('minutesSelector-inactive');
                setDateSelectorName('dateSelector-inactive');
                setDaySelectorName('daysSelector-inactive');
        }
    }

    return(
        <ScheduleWindow dateSelector = {dateSelector} daysSelector = {daysSelector} timeSelector = {timeSelector} minutesSelector = {minutesSelector} hourSelector = {hourSelector} scheduleType = {scheduleType} onChange = {onChange}/>
    )
}