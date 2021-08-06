function promiseAll (promises) {
	let result = [];
	let promiseCount = 0
	let promisesLength = promises.length
	return new Promise(function (resolve, reject) {
		for (let i = 0; i < promises.length; i++) {
			Promise.resolve(promises[i]).then(function (res) {
				promiseCount++
				result[i] = res

				if (promiseCount === promisesLength) {
					return resolve(result)
				}
			}, function (err) {
				return reject(err)
			})
		}
	})
}

let promise1 = new Promise(function (resolve, reject) { resolve(1) })
let promise2 = new Promise(function (resolve, reject) { resolve(2) })

promiseAll([promise1, promise2]).then(function (res) {
	console.log(`res`, res)
})