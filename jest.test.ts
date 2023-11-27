import {expect} from '@jest/globals'

beforeEach(() => {
	const EPSILON = 1e-6

	function nearlyEqual(a: number, b: number) {
		return (
			Math.abs(a - b) <= EPSILON * Math.max(1, Math.abs(a), Math.abs(b)) ||
			undefined
		)
	}

	expect.addEqualityTesters([nearlyEqual])
})
