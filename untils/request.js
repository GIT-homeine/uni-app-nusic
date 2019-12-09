const baseUrl = 'http://121.196.226.246:84';

const httpRequest = (url = "/seach", methods = "get", data = {}) => {
	let httpDefaultOpts = {
		url: baseUrl + url,
		data: data,
		method: methods,
		header: methods == 'get' ? {
			'X-Requested-With': 'XMLHttpRequest',
			"Accept": "application/json",
			"Content-Type": "application/json; charset=UTF-8"
		} : {
			'X-Requested-With': 'XMLHttpRequest',
			'Content-Type': 'application/x-www-form-urlencoded; charset=UTF-8'
		},
		dataType: 'json',
	}
	let promise = new Promise(function(resolve, reject) {
		uni.request(httpDefaultOpts).then(
			(res) => {
				resolve(res)
			}
		).catch(
			(response) => {
				reject(response)
			}
		)
	})
	return promise
}
export default {
	baseUrl,
	httpRequest,
}
