import React, {useState, useEffect} from 'react';
import { getYears} from "../data/dates";
import {validCardYear} from "../functions/data-validation";


export const CardExpYearInput = ({cardExpYear, setCardExpYear}) => {

    const [yearOptions, setYearOptions] = useState([]);

    useEffect(() => {
        setYearOptions(getYears());
    }, []);

    const handleChange = (e) => {
        if(validCardYear(parseInt(e.target.value))) {
            setCardExpYear(parseInt(e.target.value));
        }
    };

    return (

        <select className={'form-control'} onChange={handleChange}>
            <option>Year</option>
            {yearOptions.map(year => {
                return <option key={year} value={year}>{year}</option>
            })}
        </select>

    );


};