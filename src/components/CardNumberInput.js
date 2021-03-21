import React from 'react';

/*
American Express :- Starting with 34 or 37, length 15 digits.
Visa :- Starting with 4, length 13 or 16 digits.
MasterCard :- Starting with 51 through 55, length 16 digits.
Discover :- Starting with 6011, length 16 digits or starting with 5, length 15 digits.
Diners Club :- Starting with 300 through 305, 36, or 38, length 14 digits.
JCB :- Starting with 2131 or 1800, length 15 digits or starting with 35, length 16 digits.
 */

export const CardNumberInput = ({cardNumber, setCardNumber}) => {

    const handleChange = (e) => {

        let value = e.target.value;

        value = value.replaceAll(' ', ''); // trim whitespace

        if (isNaN(value)) {
            return;
        }

        value = value.slice(0, 16);
        value = value ? parseInt(value) : '';

        setCardNumber(value);
    };

    const cardNumberFormat = (number) => {
        return number.toString().replace(/[^\dA-Z]/g, '').replace(/(.{4})/g, '$1 ').trim();
    };

    const cardNumberFormatted = cardNumberFormat(cardNumber);

    return (
        <input type={'text'} className={'form-control'} value={cardNumberFormatted} onChange={handleChange}/>
    )
};