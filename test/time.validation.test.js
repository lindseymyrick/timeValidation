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
        test('it returns true if passed a time 29 seconds in the future', (done) => {
            const timestamp = moment().add( 29, 's');
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        test('it returns true if passed a time 29 seconds in the past', (done) => {
            const timestamp = moment().subtract(29, 's');
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
        test('it returns false if passed a stringified time ten years ago', (done) => {
            const timestamp = '2010-07-01T16:03:18.021Z'; 
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        test('it returns false if passed a time 40 seconds ago', (done) => {
            const timestamp = moment().subtract(40, 's');
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        test('it returns false if passed a time 40 seconds in the future', (done) => {
            const timestamp = moment().add(40, 's');
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        test('it returns false if passed a time 30 seconds ago', (done) => {
            const timestamp = moment().subtract(30, 's');
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        test('it returns false if passed a time 30 seconds in the future', (done) => {
            const timestamp = moment().add(30, 's');
            expect(closeToNow(timestamp)).toBe(false);
            done();
        });
        test('it returns true if passed a non-ISOstringified version of the current time', (done) => {
            const timestamp = new Date();
            expect(closeToNow(timestamp)).toBe(true);
            done();
        });
       
    });

    describe('closest date', () => {
        test('it returns the previous day if before noon CST time (input, UST time)', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = '2020-06-30';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        test('it returns the current day if on or after noon CST time (input, UST time)', (done) => {
            const inputTime = '2020-07-01T17:03:18.021Z'
            const expectedOutput = '2020-07-01';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        test('it returns the current day if on or after noon CST Time (input, CST time)', (done) => {
            const inputTime = '2020-07-01T12:03:18.021-05:00'
            const expectedOutput = '2020-07-01';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
        test('it returns the current day in CST time when input is day after UST time', (done) => {
            const inputTime = '2020-07-01T02:03:18.021Z'
            const expectedOutput = '2020-06-30';
            expect(closestDate(inputTime)).toBe(expectedOutput);
            done();
        });
    });

    describe('format timestamp', () => {
        test('it returns a formatted timestamp (CST)', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = 'July 1st, 2020 at 11:03 am';
            expect(formatTimestamp(inputTime, 'US/Central')).toBe(expectedOutput);
            done();
        });
        test('it returns a formatted timestamp (EST)', (done) => {
            const inputTime = '2020-07-01T16:03:18.021Z'
            const expectedOutput = 'July 1st, 2020 at 12:03 pm';
            expect(formatTimestamp(inputTime, 'America/New_York')).toBe(expectedOutput);
            done();
        });
        test('it returns a formatted timestamp when input is day after in UST time (PST)', (done) => {
            const inputTime = '2020-07-02T02:03:18.021Z'
            const expectedOutput = 'July 1st, 2020 at 7:03 pm';
            expect(formatTimestamp(inputTime, 'America/Los_Angeles')).toBe(expectedOutput);
            done();
        });
        test('it returns a formatted timestamp when input is a different string format', (done) => {
            const inputTime = 'Tuesday, 14-Jul-20 13:57:10 UTC'
            const expectedOutput = 'July 14th, 2020 at 6:57 am';
            expect(formatTimestamp(inputTime, 'America/Los_Angeles')).toBe(expectedOutput);
            done();
        });
       
    });
});
