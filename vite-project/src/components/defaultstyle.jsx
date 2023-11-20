import React from 'react';

function ForeCast(){
    DayOfWeek(Monday)
    DayOfWeek(Tuesday)
    DayOfWeek(Wednesday)
    DayOfWeek(Thursday)
    DayOfWeek(Frday)
    DayOfWeek(Saturday)
    DayOfWeek(Sudnay)
}

function DayOfWeek({day}){
    return (
        <div className = "day-info">
            <h1> {day} </h1>
        </div>
    )
}

export default defaultstyle  