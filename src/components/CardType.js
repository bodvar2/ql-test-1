import React from 'react';
import {validCardType} from "../functions/data-validation";


export const CardType = ({cardNumber}) => {

    if(cardNumber.toString().length < 13) {return null;}

    const cardType = validCardType(cardNumber);

    return cardType ?
        <span className={'small text-success'}>Type: {cardType}</span>
    :
        null;
};