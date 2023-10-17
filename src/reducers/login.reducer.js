const initialState = {
	user: null,
	isConnected: false,
	token: null,
};

export default function login(state = initialState, action) {

    switch (action.type) {
    	case 'LOGIN':
    		return {
    			...state,
    			token: action.payload.token,
    			user:{ username },
				isConnected: true
    		};
    	default:
    		return state;
    }

}

