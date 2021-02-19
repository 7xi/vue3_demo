/**
 *
 * 手机号码加星号
 * @export
 * @param {number} mobile - 手机号码 - 例：13606006000
 * @returns {*} - 例：136****6000
 */
export function asteriskMobile(mobile: string): string {
	if (mobile) {
		const mobileReg: string = mobile.toString().replace(/(\d{3})\d{4}(\d{4})/, '$1****$2')
		return mobileReg
	} else {
		return ""
	}
}

/**
 *
 * 验证邮箱
 * @export
 * @param {number} email - 邮箱地址 - 例：1000@qq.com
 * @returns {boolean} - 返回判断结果
 */
export function emailCheck(email: string): boolean {
	const emailReg = /^([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+@([a-zA-Z0-9]+[_|.]?)*[a-zA-Z0-9]+\.[a-zA-Z]{2,3}$/
	if (!emailReg.test(email)) {
		return false
	} else {
		return true
	}
}

/**
 *
 * 验证手机号码
 * @export
 * @param {*} mobile  - 手机号码 - 例：13606006000
 * @returns {boolean}  - 返回判断结果
 */
export function phoneNumCheck(mobile: string): boolean {
	const mobileReg = /^1[3456789]\d{9}$/
	if (!mobileReg.test(mobile)) {
		return false
	} else {
		return true
	}
}