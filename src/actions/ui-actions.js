import * as types from './action-types';

export const openSidebar = () => {
	console.log('SIDEBAR EVENT');
	return {
		type: types.OPEN_SIDEBAR
	}
}

export const closeSidebar = () => {
	console.log('SIDEBAR EVENT');
	return {
		type: types.CLOSE_SIDEBAR
	}
}

