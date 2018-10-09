import { CALL_API } from '../constants/variables';

/**
 * Handler communication with web service
 *
 * @param {Object} callAPI
 * @param {Object} next
 * @param {Object} actionWith
 */
export const api = async (callAPI, next, actionWith) => {
  const [requestType, successType, failureType] = callAPI.types;

  try {
    const res = await fetch(callAPI.endpoint, {
      method: callAPI.method,
    });
    const data = await res.json();

    if (res.ok) {
      next(
        actionWith({
          data,
          type: successType,
          payload: callAPI.payload || '',
        })
      );
    } else {
      next(
        actionWith({
          type: failureType,
          errors: [data.message || 'Error with API, please try again'],
        })
      );
    }
  } catch (e) {
    next(
      actionWith({
        type: failureType,
        errors: [e.message || 'Error with API, please try again'],
      })
    );
  }
};

// Middleware
export default store => next => action => {
  const callAPI = action[CALL_API];

  if (callAPI) {
    const { types } = callAPI;
    const [requestType, successType, failureType] = types;
    const actionWith = data => {
      const finalAction = Object.assign({}, action, data);
      delete finalAction[CALL_API];
      return finalAction;
    };
    next(actionWith({ type: requestType }));

    api(callAPI, next, actionWith);
  } else {
    return next(action);
  }
};
