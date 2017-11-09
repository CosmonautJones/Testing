const assert = require('chai').assert;
const funcs = require('../src/project-1');

// we've gone ahead and gotten a start here for you,
// except, for some reason, none of our current assertions are working.
// first step is to make sure all these assertions work.
// then make sure you have at least 2-3 more assertions for every function.
// hint 1. - you need to pass data to the functions and get expected output.
// hint 2. - you should test to see if the expected return output is of a specified type, as well as the correct outcome.

describe('Project-1 Functions', () => {
	describe('`multiplyByTen`', () => {
		it('should be a function', () => {
			const multiplyByTen = funcs.multiplyByTen;
			assert.typeOf(multiplyByTen, 'function');
		});
		it('should return 50 if num is 5', () => {
			const multiplyByTen = funcs.multiplyByTen;
			assert.equal(multiplyByTen(5), 50);
		});
		it('should return NaN if a string is passed in', () => {
			const multiplyByTen = funcs.multiplyByTen;
			assert.isNaN(multiplyByTen('hello'));
		});
	});

	describe('`subtractFive`', () => {
		it('should be a function', () => {
			const subtractFive = funcs.subtractFive;
			assert.typeOf(subtractFive, 'function');
		});
		it('should return 0 is num is 5', () => {
			const subtractFive = funcs.subtractFive;
			assert.equal(subtractFive(5), 0);
		});
		it('should return true if num is 10 and it equals 5', () => {
			const subtractFive = funcs.subtractFive;
			assert.isTrue(subtractFive(10) === 5);
		});
	});

	describe('`areSameLength`', () => {
		it('should be a function', () => {
			const areSameLength = funcs.areSameLength;
			assert.typeOf(areSameLength, 'function');
		});
		it('returns true if foo and bar are the same length', () => {
			const areSameLength = funcs.areSameLength;
			assert.equal(areSameLength('foo', 'bar'), true);
		});
		it('returns not equal when lengths of inputs are different', () => {
			const areSameLength = funcs.areSameLength;
			assert.deepEqual(areSameLength('food', 'barf'), true);
		});
	});

	describe('`areEqual`', () => {
		it('should be a function', () => {
			const areEqual = funcs.areEqual;
			assert.typeOf(areEqual, 'function');
		});
		it('should return equal if x and y are the same numbers', () => {
			const areEqual = funcs.areEqual;
			assert.equal(areEqual(6, 6), true);
		});
		it('should return false if a string is passed a parameter', () => {
			const areEqual = funcs.areEqual;
			assert.equal(areEqual(6, 'blah'), false);
		});
	});

	describe('`lessThanNinety`', () => {
		it('should be a function', () => {
			const lessThanNinety = funcs.lessThanNinety;
			assert.typeOf(lessThanNinety, 'function');
		});
		it('should return true if the number is less than 90', () => {
			const lessThanNinety = funcs.lessThanNinety;
			assert.isBelow(55, 90, 'number is less than 90');
		});
		it('should return true if parameter passing in is less than 90', () => {
			const lessThanNinety = funcs.lessThanNinety;
			assert.isTrue(lessThanNinety(89));
		});
	});

	describe('`greaterThanFifty`', () => {
		it('should be a function', () => {
			const greaterThanFifty = funcs.greaterThanFifty;
			assert.typeOf(greaterThanFifty, 'function');
		});
		it('should return true if 55 is greater than 50', () => {
			const greaterThanFifty = funcs.greaterThanFifty;
			assert.equal(greaterThanFifty(55), true);
		});
		it('should return false if 45 is greater than 50', () => {
			const greaterThanFifty = funcs.greaterThanFifty;
			assert.isFalse(greaterThanFifty(45), false);
		});
	});

	describe('`add`', () => {
		it('should be a function', () => {
			const add = funcs.add;
			assert.typeOf(add, 'function');
		});
		it('should return 5 if arguments are 2 and 3', () => {
			const add = funcs.add;
			let sum = 5;
			assert.equal(add(2, 3), sum);
		});
		it('should return false if 3 plus 3 equal 7', () => {
			const add = funcs.add;
			assert.notEqual(add(3, 3), 7);
		});
	});

	describe('`subtract`', () => {
		it('should be a function', () => {
			const subtract = funcs.subtract;
			assert.typeOf(subtract, 'function');
		});
		it('should return true if 10 minus 3 equals 7', () => {
			const subtract = funcs.subtract;
			assert.equal(subtract(10, 3), 7);
		});
		it('should return 3 if passed 4 and 1 as arguments', () => {
			const subtract = funcs.subtract;
			let total = subtract(5, 2);
			assert.equal(subtract(4, 1), total);
		});
	});

	describe('`divide`', () => {
		it('should be a function', () => {
			const divide = funcs.divide;
			assert.typeOf(divide, 'function');
		});
		it('should return true if 1600 divided by 100 equals 16', () => {
			const divide = funcs.divide;
			let answer = 16;
			assert.equal(divide(1600, 100), answer);
		});
		it('should return NaN if any number divided by a string', () => {
			const divide = funcs.divide;
			assert.isNaN(divide(1600, 'poop'));
		});
	});

	describe('`multiply`', () => {
		it('should be a function', () => {
			const multiply = funcs.multiply;
			assert.typeOf(multiply, 'function');
		});
		it('should return "is not true" if 5 times 5 = 30', () => {
			const multiply = funcs.multiply;
			assert.isNotTrue(multiply(5, 5), 30, 'is not true');
		});
		it('should return "true" if 5 times 5 = 25', () => {
			const multiply = funcs.multiply;
			assert.equal(multiply(5, 5), 25, 'True');
		});
	});

	describe('`getRemainder`', () => {
		it('should be a function', () => {
			const getRemainder = funcs.getRemainder;
			assert.typeOf(getRemainder, 'function');
		});
		it('Should return true if the remainder of 9/2 is 1', () => {
			const getRemainder = funcs.getRemainder;
			assert.equal(getRemainder(9, 2), 1);
		});
		it('should return NaN if there is a string passed', () => {
			const getRemainder = funcs.getRemainder;
			assert.isNaN(getRemainder(10, 'boo'));
		});
	});

	describe('`isEven`', () => {
		it('should be a function', () => {
			const isEven = funcs.isEven;
			assert.typeOf(isEven, 'function');
    });
    it('should return true if number is even', () => {
      const isEven = funcs.isEven;
      assert.equal(isEven(8), true)
    });
    it('should return NaN if a string is passed into the function', () => {
      const isEven = funcs.isEven;
      assert.isFalse(isEven('boo'), false)
    });
	});

	describe('`isOdd`', () => {
		it('should be a function', () => {
			const isOdd = funcs.isOdd;
			assert.typeOf(isOdd, 'function');
    });
    it('should return true if number is actually odd', () => {
      const isOdd = funcs.isOdd;
      assert.isTrue(isOdd(7), true)
    });
    it('should return false if number is 0', () => {
      const isOdd = funcs.isOdd;
      assert.isFalse(isOdd(0), false)
    });
	});

	describe('`square`', () => {
		it('should be a function', () => {
			const square = funcs.square;
			assert.typeOf(square, 'function');
    });
    it('should return NaN if the argument passed is not a number', () => {
      const square = funcs.square;
      assert.isNaN(square(undefined));
    });
    it('should return true if the argument of 7 squared equals 49', () => {
      const square = funcs.square;
      assert.equal(square(7), 49);
    });
	});

	describe('`cube`', () => {
		it('should be a function', () => {
			const cube = funcs.cube;
			assert.typeOf(cube, 'function');
    });
    it('Should return true if passed 3 and equals 27', () => {
      const cube = funcs.cube;
      let oops = false;
      assert.equal(cube(3), 27)
    });
    it('Should return true if negative 3 equals negative 27', () => {
      const cube = funcs.cube;
      assert.equal(cube(-3), -27);
    })
	});

	describe('`raiseToPower`', () => {
		it('should be a function', () => {
			const raiseToPower = funcs.raiseToPower;
			assert.typeOf(raiseToPower, 'function');
    });
    it('should equal true if 2 raised to the 3rd power equal 8', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 3), 8);
    });
    it('should equal true if 2 raised to the 3rd power equal 8', () => {
      const raiseToPower = funcs.raiseToPower;
      assert.equal(raiseToPower(2, 3), 8);
    });
	});

	describe('`roundNumber`', () => {
		it('should be a function', () => {
			const roundNumber = funcs.roundNumber;
			assert.typeOf(roundNumber, 'function');
		});
		it('should return true if 10.5 equals 11', () => {
			const roundNumber = funcs.roundNumber;
			assert.equal(roundNumber(10.5), 11);
		});
		it('should return a number', () => {
			const roundNumber = funcs.roundNumber;
			assert.typeOf(roundNumber(11), 'number');
		});
	});

	describe('`roundUp`', () => {
		it('should be a function', () => {
			const roundUp = funcs.roundUp;
			assert.typeOf(roundUp, 'function');
		});
		it('should return true if 10.7 equals 11', () => {
			const roundUp = funcs.roundUp;
			assert.equal(roundUp(10.7), 11);
		});
		it('should return a number', () => {
			const roundUp = funcs.roundUp;
			assert.typeOf(roundUp(11), 'number');
		});
	});

	describe('`addExclamationPoint`', () => {
		it('should be a function', () => {
			const addExclamationPoint = funcs.addExclamationPoint;
			assert.typeOf(addExclamationPoint, 'function');
		});
		it('should "Hello!" when passed "Hello"', () => {
			const addExclamationPoint = funcs.addExclamationPoint;
			assert.equal(addExclamationPoint("Hello"), "Hello!");
		});
		it('should return a string', () => {
			const addExclamationPoint = funcs.addExclamationPoint;
			assert.typeOf(addExclamationPoint("Hello"), 'string');
		});
	});

	describe('`combineNames`', () => {
		it('should be a function', () => {
			const combineNames = funcs.combineNames;
			assert.typeOf(combineNames, 'function');
		});
		it('should return "Travis Jones" when passed "Travis" + "Jones"', () => {
			const combineNames = funcs.combineNames;
			assert.equal(combineNames("Travis", "Jones"), "Travis Jones");
		});
		it('should return a string', () => {
			const combineNames = funcs.combineNames;
			assert.typeOf(combineNames("Travis", "Jones"), 'string');
		});
	});

	describe('`getGreeting`', () => {
		it('should be a function', () => {
			const getGreeting = funcs.getGreeting;
			assert.typeOf(getGreeting, 'function');
		});
		it('should return  "Jones"', () => {
			const getGreeting = funcs.getGreeting;
			assert.equal(getGreeting("Travis"), "Hello Travis!");
		});
		it('should return a string', () => {
			const getGreeting = funcs.getGreeting;
			assert.typeOf(getGreeting("Travis"), 'string');
		});
	});

	describe('`getRectangleArea`', () => {
		it('should be a function', () => {
			const getRectangleArea = funcs.getRectangleArea;
			assert.typeOf(getRectangleArea, 'function');
		});
		it('should return true if passed 3 and 4 and equals 12', () => {
			const getRectangleArea = funcs.getRectangleArea;
			assert.equal(getRectangleArea(3, 4), 12);
		});
		it('should return a number', () => {
			const getRectangleArea = funcs.getRectangleArea;
			assert.typeOf(getRectangleArea(3,4), 'number');
		});
	});

	describe('`getTriangleArea`', () => {
		it('should be a function', () => {
			const getTriangleArea = funcs.getTriangleArea;
			assert.typeOf(getTriangleArea, 'function');
		});
	});

	describe('`getCircleArea`', () => {
		it('should be a function', () => {
			const getCircleArea = funcs.getCircleArea;
			assert.typeOf(getCircleArea, 'function');
		});
	});

	describe('`getRectangularPrismVolume`', () => {
		it('should be a function', () => {
			const getRectangularPrismVolume = funcs.getRectangularPrismVolume;
			assert.typeOf(getRectangularPrismVolume, 'function');
		});
	});
});