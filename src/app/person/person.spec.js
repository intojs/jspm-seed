/**
 *	person.spec.js
 */

import Person from './person';

describe('person.spec.js', function () {

	var person;

	beforeEach(function() {
		person = new Person();
	});

	it('should pass', function() {
		expect(true).toEqual(true);
	});
});