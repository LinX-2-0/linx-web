// apiReducer.js
export const SUCCESS = 'user/SUCCESS'
export const REQUEST = 'user/REQUEST'
export const FAILURE = 'user/FAILURE'

const initialState = {
  loading: false,
  data: null,
  error: null,
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

export default apiReducer;
