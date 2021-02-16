// Default binding
function foo() {
	console.log( this.a );
}

var a = 2;

foo()

// Implicit Binding
function foo() {
	console.log( this.a );
}

var obj = {
	a: 4,
	foo: foo
};

obj.foo();

// Only the top level matters

function foo() {
	console.log( this.a );
}

var obj2 = {
	a: 42,
	foo: foo
};

var obj1 = {
	a: 2,
	obj2: obj2
};

obj1.obj2.foo();

// Explicit Binding

function foo() {
	console.log( this.a );
}

var obj = {
	a: 6
};

foo.call( obj );

// node
// Using w/ iteration
function foo(el) {
	console.log( el, this.id );
}

var obj = {
	id: "awesome"
};

// use `obj` as `this` for `foo(..)` calls
[1, 2, 3].forEach( foo, obj );


// new binding
function foo(a) {
	this.a = a;
}

var bar = new foo( 100 );
console.log( bar.a );