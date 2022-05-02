import moment from 'moment';
// file containing methods to be used within the app

// this method formats the shift dates from ISO format to the required format
// and will return null if invalid date is provided
export const formatShiftDate = (start, end) => {
    if (!start || !end) {
        return null;
    }

    const dateStart = moment(start).format('MMM Do , h:mm A');
    const dateEnd = moment(end).format('h:mm A');

    return ` ${dateStart} - ${dateEnd} `;
}

// this method formats the distance from 3 decimals to 2 decimals
// and will return 0 if invalid rate is provided
export const formatDistance = milesToTravel => {
    if (!milesToTravel) {
        return 0.00;
    }
    return milesToTravel.toFixed(2);
}

// this method formats rate based on wage per hour in cents
// and will return 0 if invalid rate is provided
export const formatRate = wagePerHourInCents => {
    if (!wagePerHourInCents) {
        return 0.00;
    }
    return (wagePerHourInCents / 100).toFixed(2);
}