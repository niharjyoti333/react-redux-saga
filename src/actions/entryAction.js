import * as types from '../actionTypes';

export  function entryAction(data){
	return {type: types.ENTRY_POINT, data}
}

export function homePageData(){
	return {type: types.HOME_DATA}
}

export function loadCourse(){
	return {type:types.LOAD_COURSE}
}

export function loadCategory(){
	return {type:types.LOAD_CATEGORY}
}
