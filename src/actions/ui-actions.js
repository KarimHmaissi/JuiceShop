import * as types from './action-types';

export const openSidebar = () => {
	return {
		type: types.OPEN_SIDEBAR
	}
}

export const closeSidebar = () => {
	return {
		type: types.CLOSE_SIDEBAR
	}
}

