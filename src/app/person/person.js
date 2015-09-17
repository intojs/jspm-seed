/**
 *	hello.js
 */

class Person {

	constructor(name) {
		this.name = name || 'Foo';
	}

	sayHello() {
		console.log('Hello ' + this.name + '!');
	}
}

export default Person;