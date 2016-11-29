export default function courseReducer(state=[],action){
	switch(action.type){
		case 'COURSE_RECEIVED':
		console.log(action.course);
		return action.course;
		default:
		return state;
	}
}