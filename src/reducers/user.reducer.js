const initialState = {
	user: null,
	isConnected: false,
	token: null
}

export default function userReducer(state = initialState, action) {
	switch(action.type){
		// Case Sign In
		case 'SignIn':
		const { username, password } = action.payload
		//Conditions
		if(username && password){
			return{
				...state,
				user:{ username },
				isConnected: true
			}
		}else{
			return state
		}
		// Case Logout
		case 'LogOut': 
		return{
			...state,
			user:null,
			isConnected: false
		}
	}

	return state
}
