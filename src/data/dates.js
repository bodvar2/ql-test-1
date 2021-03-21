export const getMonths = () => {
    return ['January', 'February', 'Mars', 'April', 'May', 'June',
        'July', 'August', 'September', 'October', 'November', 'December'];
};


export const getYears = () => {
    let date = new Date();
    let years = [];

    for(let i = 0; i < 5; i++) {
        years.push(date.getFullYear());
        date.setFullYear(date.getFullYear() + 1);
    }

    return years;
};