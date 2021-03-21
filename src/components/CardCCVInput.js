import React from 'react';

export const CardCCVInput = ({cardCCV, setCardCCV}) => {


    /**
     * Max three digits
     * @param e
     */
    const handleChange = (e) => {

        let value = e.target.value;

        if(isNaN(value)) {
            return;
        }

        value = value.slice(0,3);
        value = value ? parseInt(value) : '';
        setCardCCV(value);
    };


    return (
        <input className={'form-control'} type={'text'} value={cardCCV} onChange={handleChange}/>
    );

};