const {
    closeToNow,
    closestDate,
    formatTimestamp,
} = require('../modules/time.validation');

const moment = require('moment-timezone');


describe('time validation', () => {
    describe('close to now', () => {
        test('it returns true if passed the current time', (done) => {
            const date = new Date();
            const timestamp = date.toISOString();
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        test('it returns false if passed a time ten years ago', (done) => {
            const timestamp = '2010-07-01T16:03:18.021Z'; 
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        test('it returns false if passed a time 40 seconds ago', (done) => {
            const timestamp = moment().subtract(40, 's');
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
       
    });
    // describe('closest date', () => {
    //     test('it returns the previous day if before noon CST', (done) => {
    //         const inputTime = '2020-07-01T16:03:18.021Z'
    //         const expectedOutput = '2020-06-30';
    //         expect(closestDate(inputTime)).toBe(expectedOutput);
    //         done();
    //     });
    //     // YOUR CODE HERE
    // });
    // describe('format timestamp', () => {
    //     test('it returns a formatted timestamp', (done) => {
    //         const inputTime = '2020-07-01T16:03:18.021Z'
    //         const expectedOutput = 'July 1st, 2020 at 11:03 am';
    //         expect(formatTimestamp(inputTime, 'US/Central')).toBe(expectedOutput);
    //         done();
    //     });
    //     // YOUR CODE HERE
    // });
});
