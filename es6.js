function fun () {
	var args = 1
	return args + 1
}

console.log(fun.prototype)

var foo = () => { }
console.log(foo.prototype)