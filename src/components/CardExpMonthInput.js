import React, {useState, useEffect} from 'react';
import {getMonths} from "../data/dates";
import {validCardMonth} from "../functions/data-validation";


export const CardExpMonthInput = ({cardExpMonth, setCardExpMonth}) => {

    const [monthOptions, setMonthOptions] = useState([]);

    useEffect(() => {
        setMonthOptions(getMonths());
    }, []);

    const handleChange = (e) => {
        if(validCardMonth(e.target.value)) {
            setCardExpMonth(e.target.value);
        }
    };

    return (

        <select className={'form-control'} value={cardExpMonth} onChange={handleChange}>
            <option>Month</option>
            {monthOptions.map(month => {
                return <option key={month} value={month}>{month}</option>
            })}
        </select>

    );


};