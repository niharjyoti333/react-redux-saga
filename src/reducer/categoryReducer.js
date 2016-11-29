export default function categoryReducer(state=[],action){
	switch(action.type){
		case 'CATEGORY_RECEIVED':
      ct(action.category);
      return action.category;
		default:
      return state;
	}
}

function ct(data){
  console.log(data);
}
