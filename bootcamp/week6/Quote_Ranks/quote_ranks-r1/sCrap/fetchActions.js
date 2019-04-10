const APIbasrURL = 'https://bootcamp-express-server-benjaminhaos.c9users.io/';

function callAPI() {
  return fetch(APIbasrURL)
    .then(handleErrors)
    .then(console.log('hi ben'))
    .then(res => res.json());
}

export function fetchData() {
  return dispatch => {
    dispatch(fetchBegin());
    return callAPI()
      .then(json => {
        dispatch(fetchSuccess(json));
        return json;
      })
      .catch(error =>
        dispatch(fetchFailure(error))
      );
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    //console.log('test');
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_BEGIN =
  "FETCH_BEGIN";
export const FETCH_SUCCESS =
  "FETCH_SUCCESS";
export const FETCH_FAILURE =
  "FETCH_FAILURE";

export const fetchBegin = () => {
  console.log('fetchBegin');
  return ({
    type: FETCH_BEGIN
  });
};

export const fetchSuccess = json => {
  console.log('fetchSuccess');
  return ({
    type: FETCH_SUCCESS,
    payload: json
  })
};

export const fetchFailure = error => {
  console.log('fetchFailure');
  return ({
    type: FETCH_FAILURE,
    payload: { error }
  })
};
