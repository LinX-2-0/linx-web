// apiReducer.js
export const SUCCESS = 'user/SUCCESS'
export const REQUEST = 'user/REQUEST'
export const FAILURE = 'user/FAILURE'

export const LOGIN_SUCCESS = 'user/LOGIN_SUCCESS'

export const REGISTRATION_SUCCESS = 'user/REGISTRATION_SUCCESS'


const initialState = {
  loading: false,
  data: null,
  error: null,
  logindata: null,
  registration: null
};

const apiReducer = (state = initialState, action) => {
  switch (action.type) {
    case REQUEST:
      return {
        ...state,
        loading: true,
      };
    case SUCCESS:
      console.log("action----success",action.result);
      return {
        ...state,
        loading: false,
        data: action.result,
        error: null,
      };
    case FAILURE:
      return {
        ...state,
        loading: false,
        data: null,
        error: action.error,
      };
    case LOGIN_SUCCESS:
      return{
        ...state,
        loading:false,
        logindata: action && action.result,
        error:false
      }
    case REGISTRATION_SUCCESS:
      return {
        ...state,
        loading:false,
        registration: action && action.result,
        error:false

      }
    default:
      return state;
  }
};

export const isUserExist = (data) => {

  console.log(data);
  return {
    types: [REQUEST, SUCCESS, FAILURE],
    promise: client=> client.post('userExists', data)
  }
}

export const fetchLoginAuthToken=(data)=>{
  return {
    types: [REQUEST, LOGIN_SUCCESS, FAILURE],
    promise: client=> client.post('login', data)
  }
}

export const saveUser=(data)=>{
  return {
    types: [REQUEST, REGISTRATION_SUCCESS, FAILURE],
    promise: client=> client.post('saveuser', data)
  }
}

export default apiReducer;
