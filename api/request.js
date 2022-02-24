const BASE_URL = "http://221.6.253.254:8075/joffice/";
export const get = (url, data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + url,
			method: "GET",
			params: data | {},
			dataType: "json",
			header: {
				'Authorization': "bearer" + uni.getStorageSync("token")
			},
			success: (res) => {
				console.log(res);
				if (res.statusCode == 401 || res.data.code == 401) {
					return uni.showToast({
						title: "token过期需要重新登录"
					})
				}
				if (res.statusCode != 200 || (res.data.code != undefined && res.data.code !=
						200)) {
					return uni.showToast({
						title: "获取数据失败"
					})
				}
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: "接口请求失败",
				})
				reject(err)
			}
		})
	})
}

export const post = (url, data) => {
	return new Promise((resolve, reject) => {
		uni.request({
			url: BASE_URL + url,
			method: "POST",
			params: data | {},
			dataType: "json",
			header: {
				'Content-Type':'application/json',
				'Authorization': "bearer" + uni.getStorageSync("token")
			},
			success: (res) => {
				console.log(res);
				if (res.statusCode == 401 || res.data.code == 401) {
					return uni.showToast({
						title: "token过期需要重新登录"
					})
				}
				if (res.statusCode != 200 || (res.data.code != undefined && res.data.code !=
						200)) {
					return uni.showToast({
						title: "获取数据失败"
					})
				}
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: "接口请求失败",
				})
				reject(err)
			}
		})
	})
}

export const upload = (url,file, formData) => {
	return new Promise((resolve, reject) => {
		uni.uploadFile({
			url: BASE_URL + url,
			filePath: file,
			formData:formData,
			header: {
				'Authorization': "bearer" + uni.getStorageSync("token")
			},
			success: (res) => {
				console.log(oploadFileRes);
				var obj = JSON.parse(oploadFileRes.data)
				resolve(res.data)
			},
			fail: (err) => {
				uni.showToast({
					title: "接口请求失败",
				})
				reject(err)
			}
		})
	})
}
