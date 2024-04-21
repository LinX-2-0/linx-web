// export default function apiMiddleware(client){
//     return({dispatch, getState}) => {
//         return next => (action) => {
//             if(typeof action === 'function'){
//                 return action(dispatch, getState)
//             }

//             const {promise, types, ...rest} = action;

//             if(!promise){
//                 return next(action);
//             }

//             const [REQUEST, SUCCESS, FAILURE] = types;
//             next({...rest, type: REQUEST});

//             const actionPromsie = promise(client);

//             actionPromsie.then(
//                 result => next({ ...rest, result, type: SUCCESS}),
//                 error => next({ ...rest, error, type: FAILURE})
//             ).catch((error)=>{
//                 console.log("MIDDLEWARE_ERROR", error);
//                 next({...rest, error, type: FAILURE})
//             })
//         }
//     }
// }

// apiMiddleware.js
export default function apiMiddleware(client) {
    return ({ dispatch }) => (next) => (action) => {
      if (typeof action === 'function') {
        return action(dispatch);
      }
      console.log('client--------', action && action.promise)
  
      const { promise, types, ...rest } = action;
  
      if (!promise || !types || types.length !== 3) {
        return next(action);
      }
  
      const [REQUEST, SUCCESS, FAILURE] = types;
  
      next({ ...rest, type: REQUEST });
  
      const actionPromise = promise(client);
  
      return actionPromise
        .then(
          (result) => next({ ...rest, result, type: SUCCESS }),
          (error) => next({ ...rest, error, type: FAILURE })
        )
        .catch((error) => {
          console.error("API Middleware Error:", error);
          next({ ...rest, error, type: FAILURE });
        });
    };
  }
  