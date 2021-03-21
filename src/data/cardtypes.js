export const cardTypeValidators = [
    {name: 'American Express', regexp: /^(?:3[47][0-9]{13})$/},
    {name: 'VISA', regexp: /^(?:4[0-9]{12}(?:[0-9]{3})?)$/},
    {name: 'MasterCard', regexp: /^(?:5[1-5][0-9]{14})$/},
    {name: 'Discover', regexp: /^(?:6(?:011|5[0-9][0-9])[0-9]{12})$/},
];