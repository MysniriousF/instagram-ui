import React from "react";
import  './ShowDate.scss';

function ShowDate({date}) {
        const dateObj = new Date(date);
        const formatted = dateObj.getDate()+ "." + (dateObj.getMonth()+1)+"."+ dateObj.getFullYear();
    return (
        
        <div>
            { formatted }
        </div>
    )
}


export default ShowDate;