export const signIn = (username, password) =>{
    return{
        type: 'SignIn',
        payload:{
            username,
            password
        }
    }
}
