import React from 'react';

export const CardNameInput = ({cardName, setCardName}) => {


    /**
     * A name should be stored in uppercase letters and not more than one consecutive whitespace.
     * @param e
     */
    const handleChange = (e) => {

        let value = e.target.value;

        if(!value.match(/^[a-zA-Z åäöÅÄÖ]*$/)) {
            return;
        }

        value = value.replace('  ', ' ');

        value = value.toUpperCase();

        setCardName(value);
    };

    return (
        <input type={'text'} className={'form-control'} value={cardName} onChange={handleChange}/>
    );

};