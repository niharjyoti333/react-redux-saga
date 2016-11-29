export default function entryReducer(state = [], action){
	switch(action.type){
		
		case 'ENTRY_POINT':
		debugger;
		return [...state, 
		Object.assign({}, action.data)
		];

		default: 
		return state;
	}
}