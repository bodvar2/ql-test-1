import {cardTypeValidators} from "../data/cardtypes";
import {getMonths, getYears} from "../data/dates";

export const validCardType = (number) => {

    if(number.toString().length < 13) { // too short to be valid
        return false;
    }

    for(let i = 0; i < cardTypeValidators.length; i++) {
        if(number.toString().match(cardTypeValidators[i].regexp)) {
            return cardTypeValidators[i].name;
        }
    }

    return false; // no match..
};

export const validCardName = (cardName) => {
    return cardName.length > 3 && cardName.includes(' ');
};

export const validCardYear = (cardYear) => {
    return getYears().indexOf(cardYear) !== -1;
};


export const validCardMonth = (cardMonth) => {
    return getMonths().indexOf(cardMonth) !== -1;
};


export const validCardCCV = (cardCCV) =>  {
    return !isNaN(cardCCV) && cardCCV.toString().length === 3;
};