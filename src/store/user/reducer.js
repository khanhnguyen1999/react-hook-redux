import {
    LOGOUT,
    LOGIN,
    REGISTER
} from './actions'
var username = {}
const initialState = [
        username = {
            username: '123',
            password: '123',
            token: "null" 
            },{
                username: 'khanh',
                password: '123',
                token: "null" 
                }   
]

const findUser = (state,v)=>{
    for(var i=0;i<state.length;i++){
        if(state[i].username.indexOf(v.username)!== -1){
            return true;
        }
    }
}
const findPass = (state,v)=>{
    for(var i=0;i<state.length;i++){
        if(state[i].password.indexOf(v.password) !== -1){
            return true;
        }
    }
}
export default function  userReducer(state = initialState,action){
    switch(action.type){
        case LOGOUT:
            return{
                ...state,
                token:''
            }
        case LOGIN:
                var index = findUser(state,action.user)
                var index1 = findPass(state,action.user)
                if(index && index1){
                return {
                    ...state,
                    token:'123'
                }
            }
        case REGISTER:
            action.user["token"]='';
            state.push(action.user)
            return {
                ...state,
            };
    }
    return state;
}