//'use strict';

function testArrays() {
	var ratings = [ 3, 1, 5, 11 ];
	ratings.sort(function(value1, value2) {
		return value1 - value2;
	});
	console.log(ratings.toString());
}

function testDates() {
	var dt = new Date();
	console.log(dt.toDateString());
	console.log(dt.toTimeString());
}

function testRegEx() {
	var blogText = "Sam I Am";
	// var pattern = new RegExp('am', 'g');
	var pattern = /m/g;
	// console.log(pattern.test(blogText));
	// console.log(pattern.test(blogText));
	// console.log(pattern.test(blogText));

	var result = pattern.exec(blogText);
	console.log(result);
	console.log(result[0]);
}

function testJson() {
	var project = new Object();
	project.name = 'Project Alin';
	project.securityLevel = 15;
	project.updateDueDate = function() {
		return new Date();
	};
	// console.log(project.updateDueDate());
	// console.log(project['securityLevel']);

	var topic = {}; // create empty object
	topic.name = 'Project Topic';
	console.log(topic.name);
}

function testJson2() {
	var project = {
		name : 'Project Alin',
		securityLevel : 15,
		updateDueDate : function() {
			return new Date();
		},
		team : [ 'iguanaboy', 'cactusgirl', 'Buffy' ]
	};
	console.log(project.name);
	console.log(project.team[2]);
}

function testPrototypes() {
	var project = {
		name : 'Project Phoenix'
	};
	// console.log(project.toString());
	// console.log(typeof Object.prototype.toString);
	// console.log(typeof project.__proto__);
	console.log(project.__proto__ === Object.prototype);
}

function testPrototypes2() {
	var project = {
		securityLevel : 2
	};
	var secretProject = Object.create(project);

	console.log(secretProject.securityLevel);
	console.log(project.__proto__ === Object.prototype);
}

function testProperty() {
	var task = {};
	Object.defineProperty(task, 'text', {
		value : 'Get this job done!',
		writable : true
	});

	task.text = task.text + '... NOW!';

	console.log(task.text);
}

function testProperty2() {
	var task = {};
	Object.defineProperty(task, 'text', {
		value : 'Get this job done!',
		configurable : false
	// if false then VALUE cannot be mofied later
	});

	Object.defineProperty(task, 'text', {
		value : 'done'
	});

	console.log(task.text);
}

function testProperty3() {
	var task = {
		_dueDate : '01/01/2001'
	};
	Object.defineProperty(task, 'dueDate', {
		get : function() {
			return this._dueDate;
		},
		set : function(newValue) {
			this._dueDate = newValue;
		}
	});

	task.dueDate = '02/02/2016';
	console.log(task.dueDate);
	var descriptor = Object.getOwnPropertyDescriptor(task, 'dueDate');
	console.log(descriptor);
}

function testProperty4() {
	var project = {
		name : 'Top Secret',
		dueDate : '1/1/2016'
	};

	console.log(project.hasOwnProperty('name'));
	console.log(project.hasOwnProperty('toString'));

}

function testProperty5() {
	var project = {
		securityLevel : 3
	};

	var secretProject = Object.create(project);
	console.log(project.isPrototypeOf(secretProject));
	console.log(secretProject.securityLevel);
	console.log("securityLevel" in secretProject);
	console.log("toString" in secretProject);
	console.log("securityLevel" in Object.prototype);
}

function testFunctions1() {
	var hireEmp = function myHireEmployeeFn(name) {
		throw ('Error');
	};
	hireEmp('John');
}

function testFunctions2() {
	console.log(typeof Object);

	var Employee = function(name) {
		this.name = name;
	};

	var newEmployee = new Employee('John');
	console.log(typeof newEmployee);
	console.log(newEmployee.name);

	var e1 = new Employee('JJ');
	var e2 = new Employee('JX');
	console.log(e1.__proto__ === e2.__proto__);
}

function testFunctions3() {
	var Employee = function(name) {
		this.name = name;
		this.giveRaise = function() {
		};
	};
	console.log(typeof Employee.prototype);
	console.log(Employee.prototype === Object.prototype);
}

function testFunctions4() {
	var Employee = function(name) {
		this.name = name;
	};
	Employee.prototype.giveRaise = function() {
	};
	var e1 = new Employee('JJ');
	var e2 = new Employee('JV');

	console.log(e1.giveRaise === e2.giveRaise);
}

function testFunctions5() {
	var Employee = function(name) {
		this.name = name;
		this.salary = 50000;
	};
	Employee.prototype.giveRaise = function(raise) {
		this.salary += raise;
	};

	var e1 = new Employee('JJ');
	var e2 = new Employee('JV');
	e1.giveRaise(100000);
	e1.giveRaise(100000);

	console.log(e1.salary);
	console.log(e2.salary);
}

function testThis() {
	console.log(typeof this);
	console.log(this === window);

	var name = 'Jeff';
	console.log(name);
}

function testThis2() {
	var employee = {
		name : 'Jeff',
		updateSalary : function() {
			console.log(this);
		}
	};
	employee.updateSalary();
}

function testThis3() {
	var employee = {
		name : 'Jeff',
		updateSalary : function() {
			var fn = function() {
				console.log(this);
			};
			fn();
		}
	};
	employee.updateSalary();
}

function testThis4() {
	var employee = {
		name : 'Jeff',
		updateSalary : function() {
			var fn = function() {
				console.log(this);
			};
			fn();
		}
	};
	employee.updateSalary();
}

function testThis5() {
	var employee = {
		name : 'Jeff',
		updateSalary : function() {
			var fn = function() {
				console.log(this === window);
			};
			fn();
		}
	};
	employee.updateSalary();
}

function testThis6() {
	var Address = function(line1) {
		this.line1 = line1;
		console.log(this);
	};
	var addr = new Address('123 State Avenue');
}

function testThis7() {
	var Address = function(line1) {
		this.line1 = line1;
	};
	Address.prototype.updateZipCode = function() {
		console.log(this);
	};

	var addr = new Address('123 State Avenue');
	addr.updateZipCode();
}

function testCall() {
	var updateZipCode = function() {
		console.log(this);
	};
	updateZipCode.call({});
	updateZipCode.call({
		zip : '11121',
		city : 'Brux'
	});
}

function testCall2() {
	var updateZipCode = function() {
		console.log(this);
	};

	var zipCode = {
		zip : '23131'
	};

	updateZipCode.call(zipCode);
}

function testCall3() {
	var updateZipCode = function(newZip, country) {
		console.log(newZip + ' ' + country);
		console.log(this);
	};

	var zipCode = {
		zip : '23131'
	};

	updateZipCode.call(zipCode, '121211', 'ro');
}

function testCall4() {
	var updateZipCode = function(newZip, country) {
		console.log(newZip + ' ' + country);
	};

	var zipCode = {
		zip : '23131'
	};

	updateZipCode.apply(zipCode, [ '121211', 'ro' ]); // with APPLY you need
	// to pass an ARRAY
	// with CALL you need to pass a list of arguments
}

function testClosure() {
	var salaryUpdater = function(salary) {
		var currentSalary = salary;
		var generator = function() {
			currentSalary += 10000;
			return currentSalary;
		};
		return generator;
	};

	var updateFn = salaryUpdater(500);
	updateFn();
	console.log(updateFn());
}

// IIFE -- Immediately Invoked Function Expressions
/*
 * (function(){ console.log('Test IIFE'); })();
 * 
 */

function testWindow1() {
	console.log(window.screenLeft + ', ' + window.screenTop);
	console.log(window.innerWidth + ', ' + window.outerWidth);
	// window.open('www.google.com', '_blank');

	console.log(new Date().getSeconds());

	// creates a timer
	var id = setTimeout(function() {
		console.log(new Date().getSeconds());
	}, 2000);

	// clearTimeout(id); // cancels the timer
}

function testWindow2() {
	console.log(new Date().getSeconds());

	// creates a timer
	var id = setInterval(function() {
		var secs = new Date().getSeconds();
		console.log(secs);
		if (secs === 10)
			clearInterval(id);
	}, 1000);
}

function testSystemDialog() {
	alert('Test');

	if (confirm('Delete all?')) {
		console.log('all was deleted');
	} else {
		console.log('not now');
	}

	var result = prompt('Your name');
	console.log(result);
}

function testLocation() {
	console.log(location.href);
	console.log(location.host);
	console.log(location.port);
	console.log(location.protocol);
	location.assign('www.google.com');
}

function testDOM() {
	var element = document.getElementById('article1');
	console.log(element);

	var elementsTag = document.getElementsByTagName('p');
	console.log(elementsTag);

	var elementsByClass = document.getElementsByClassName('special');
	console.log(elementsByClass);

	var article = document.getElementById('article1');
	console.log(article.getAttribute('class'));
	article.setAttribute('class', 'dynamic-style');
	console.log(article.getAttribute('class'));

	console.log(article.childNodes);
}

function testDOMQuerySelector() {
	var element = document.querySelector('article');
	console.log(element);

	var element1 = document.querySelector('#article1');
	console.log(element1);

	var element2 = document.querySelector('.special');
	console.log(element2);

	var allElements = document.querySelectorAll('.special');
	console.log(allElements);
}

// events:
// UI Events:load, unload, abort, error, select, resize, scroll;

// Mouse: click, dbclick, mousedown, mouseenter, mouseleave, mousemove,
// mouseover, mouseup, mousewheel;

// Keyboard and Text: keydown, keypress, keyup, textInput;

// Focus: blur, focus, focusin, focusout;

// HTML5 Events: contextmenu, beforeunload;

// Touch: touchstart, touchmove, touchend, touchcancel;

// Event object properties: bubbles, cancelable, currentTarget,
// defaultPrevented, detail, eventPhase preventDefault(),
// stopImmediatePropagation(), stopPropagation(), target, trusted, type;

function testEvents1() {
	console.log('in submitForm');
}

function testEvents2(element, event) {
	console.log(element.id + ' ' + event.type);
}

function testEvents3() {
	var button = document.getElementById('submit1');
	button.onclick = function() {
		console.log('Button Clicked');
	};
}

function testEventListener1() {
	var button = document.getElementById('submit1');
	button.addEventListener('click', function() {
		console.log('Button Clicked - first listener!');
	});
	button.addEventListener('click', function() {
		console.log('Button Clicked - second listener!');
	});
}

function testEventListener2() { // much elegant way
	var button = document.getElementById('submit1');

	var submitHandler = function formSubmitHandler() {
		console.log('in formSubmitHandler()');
	};

	button.addEventListener('click', submitHandler);
}

function testEventListener3() {
	var button = document.getElementById('submit1');

	var submitHandler = function formSubmitHandler() {
		console.log('in formSubmitHandler()');
	};

	button.addEventListener('click', submitHandler);
	button.removeEventListener('click', submitHandler);
}

function testEventListener4() {
	var div1 = document.getElementById('div1');
	var div2 = document.getElementById('div2');
	var clickHandler = function divClickHandler(event) {
		console.log(this.id);
		event.stopPropagation();
		event.preventDefault();
	};
	div1.addEventListener('click', clickHandler, true);
	div2.addEventListener('click', clickHandler, true);
}

function testEval() {
	var test = 'oupsss';
	eval('console.log(test)'); // do not use it --> dangerous!!!
}

function testArguments() {
	var validateValues = function() {
		console.log(arguments.length);
		console.log(arguments[0]);
		arguments[0] = 9;
		console.log(arguments[0]);

	};
	validateValues(1, true, 'Settings');
}

function testErrorHandling1() {
	try {
		throw new Error('Custom Error');
	} catch (e) {
		console.log(e.name + ' - ' + e.message);
	} finally {
		console.log('Finally done.');
	}
}

function testErrorHandling2() {
	try {
		var i = 10;
	} catch (e) {
		console.log(e.name + ' - ' + e.message);
	} finally {
		console.log('Finally done.');
	}
}

function testErrorHandling3() {
	try {
		throw new RangeError('Range Error');
	} catch (e) {
		if (e instanceof RangeError)
			console.log(e.name + ' - ' + e.message);
	}
}

 

function main() {
	testArguments();
};

main(); // comment this line to run in browser so you don't have duplicates
// in
// console
