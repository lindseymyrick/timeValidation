# CODE CHALLENGE

You are encouraged to use Moment.js. Using Moment.js, implementation of the functions should be less than 10 lines of code. The expected time to completion is 4 hours or less. It would be better to submit one complete function with full test coverage rather than three complete functions with no additional tests.

Moment.js and Jest have already been added to the project. You should not need to install any additional node modules beyond what is in the `package.json`. A sample test case for each function has been provided. Please create a Github repository for this code challenge and commit your code after completing each objective.

## Setup

```
npm install
npm run test
```

## Objectives

- [x] Complete `closeToNow` function in `modules/time.validation.js`
- [x] Write tests in `test/time.validation.tests.js` to validate the `closeToNow` function
- [x] Complete the `closestDate` function in `modules/time.validation.js`
- [x] Write tests in `test/time.validation.tests.js` to validate the `closestDate` function
- [x] Complete the `formatTimestamp` function in `modules/time.validation.js`
- [x] Write tests in `test/time.validation.tests.js` to validate the `formatTimestamp` function

## Questions

- Did you make any changes to the functions after thinking through test cases?  
I originally played around with stringifying or using the .ToISOString method in the function; the @param specifies that the parameter should be a string, but in the case that it's not passed that, I thought about stringifying all parameters. Then, I decided to test with a JavaScript Date Object and see if it behaved the same way before adding that line of code. It behaved the same way, so I decided that it would be unnecessary. 

- Describe the experience of writing tests. Is this your first time writing unit tests?  
It is my second time writing tests. In the future, I want to be more systematic about how I plan the tests. At first, I tested using random time intervals; only after looking at the code again, did I decide I needed to test all of the edge cases more sytematically, i.e. 29 seconds, 30 seconds, 31 seconds before and after. 