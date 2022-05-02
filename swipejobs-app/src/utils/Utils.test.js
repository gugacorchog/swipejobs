const { it } = require('date-fns/locale');
const { formatShiftDate ,formatDistance ,formatRate } = require('./Utils');

describe('Utils test', () => {
    it('should properly format shift dates', () => {
        expect(formatShiftDate(null, null)).toEqual(null);
        expect(formatShiftDate('2019-09-04T21:00:00Z', null)).toEqual(null);
        expect(formatShiftDate(null, '2019-09-05T05:00:00Z')).toEqual(null);
        expect(formatShiftDate('2019-09-04T21:00:00Z', '2019-09-05T05:00:00Z')).toEqual('Sep 5th , 7:00 AM - 3:00 PM');
    });

    it('should format distance', () => {
        expect(formatDistance(null)).toEqual(0);
        expect(formatDistance(11.666)).toEqual(11.67);
        expect(formatDistance(3.4)).toEqual(3.40);
        expect(formatDistance(4.452)).toEqual(4.45);
    });

    it('should format Rate', () => {
        expect(formatRate(null)).toEqual(0.00);
        expect(formatRate(100)).toEqual(1.00);
        expect(formatRate(950)).toEqual(9.50);
        expect(formatRate(1082)).toEqual(10.82);
    });
});