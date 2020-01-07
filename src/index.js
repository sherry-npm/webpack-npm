// 大整数加法【版本1】良
function add(a, b) {
	let aIndex = a.length - 1;
	let bIndex = b.length -1;
	let baseString = '';
	let carry = 0;
	let result = '';
	if (aIndex > bIndex) {
		baseString = a.substring(0, aIndex - bIndex);
	} else {
		baseString = b.substring(0, bIndex - aIndex);
	}
	while (aIndex > -1 && bIndex > -1) {
		let sum = parseInt(a[aIndex], 10) + parseInt(b[bIndex], 10);
		sum = sum + carry;
		if (sum > 9) {
			sum = sum - 10;
			carry = 1;
		} else {
			carry = 0;
		}
		result = sum + result;
		aIndex --;
		bIndex --;
	}
	if (carry) {
		baseString = add(baseString, '1');
	}
	return baseString + result;
}

// 大整数加法【版本2】优
function add2(a, b) {
	let aIndex = a.length - 1;
	let bIndex = b.length - 1;
	let carry = 0;
	let result = '';
	while (aIndex >= 0 || bIndex >= 0) {
		let x = 0;
		let y = 0;
		let sum = 0;
		if (aIndex >= 0) {
			x = a[aIndex];
		}
		if (bIndex >= 0) {
			y = b[bIndex];
		}
		sum = parseInt(x, 10) + parseInt(y, 10) + carry;
		if (sum >= 10) {
			carry = 1;
			sum = sum - 10;
		} else {
			carry = 0;
		}
		result = sum + result;
		aIndex --;
		bIndex --;
	}
	// 如果加到最高位，还有进位
	if (carry) {
		result = '1' + result;
	}
	return result;
}

export default add;
