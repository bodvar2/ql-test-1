import React, {useState} from 'react';
import {CardExpYearInput} from "./CardExpYearInput";
import {CardExpMonthInput} from "./CardExpMonthInput";
import {CardCCVInput} from "./CardCCVInput";
import {CardNumberInput} from "./CardNumberInput";
import {CardNameInput} from "./CardNameInput";
import {CardType} from "./CardType";
import {validCardType, validCardName, validCardCCV, validCardMonth, validCardYear} from "../functions/data-validation";

export const CreditCard = () => {


    const [cardNumber, setCardNumber] = useState('');
    const [cardName, setCardName] = useState('');

    const [cardExpYear, setCardExpYear] = useState('');
    const [cardExpMonth, setCardExpMonth] = useState('');
    const [cardCCV, setCardCCV] = useState('');


    const handleSubmit = () => {
        if(
            validCardType(cardNumber) &&
            validCardName(cardName) &&
            validCardYear(cardExpYear) &&
            validCardMonth(cardExpMonth) &&
            validCardCCV(cardCCV)
        ) {
            alert('SUCCESS: Your card is valid!')
        } else {
            alert('FAIL: This is an invalid card.')
        }
    };

    return (
        <form>
            <h3>Credit Card</h3>
            <div className="form-group">
                <label>Card Number</label>
                <CardNumberInput cardNumber={cardNumber} setCardNumber={setCardNumber}/>
                <CardType cardNumber={cardNumber}/>
            </div>
            <div className="form-group">
                <label>Card Holder</label>
                <CardNameInput cardName={cardName} setCardName={setCardName}/>
            </div>
            <div className={'form-group row'}>

                <label className="col-sm-8 col-form-label">Expiration Date</label>

                <label className="col-sm-4 col-form-label">CCV</label>
            </div>
            <div className={'form-group row'}>
                <div className={'col-sm-4'}>
                    <CardExpMonthInput cardExpMonth={cardExpMonth} setCardExpMonth={setCardExpMonth}/>
                </div>

                <div className={'col-sm-4'}>
                    <CardExpYearInput cardExpYear={cardExpYear} setCardExpYear={setCardExpYear}/>
                </div>

                <div className={'col-sm-4'}>
                    <CardCCVInput cardCCV={cardCCV} setCardCCV={setCardCCV}/>
                </div>
            </div>

            <button className={'btn btn-primary'} onClick={handleSubmit}>Submit</button>
        </form>
    );



};