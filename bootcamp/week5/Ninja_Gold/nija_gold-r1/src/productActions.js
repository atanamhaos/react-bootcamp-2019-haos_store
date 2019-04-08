import fetch from 'cross-fetch';

function getGold(url) {
  return fetch(url)
    .then(handleErrors)
    .then(res => res.json());
}

export function fetchGold(path) {
  let url = `https://bootcamp-express-server-benjaminhaos.c9users.io/${path}`;
  return dispatch => {
    dispatch(fetchGoldBegin());
    return getGold(url)
      .then(json => {
        let successmessage;
        let goldamount = json.goldreturn;

        switch (path) {
          case 'farm':
            successmessage = `Farmed : ${goldamount}`;
            break;
          case 'cave':
            successmessage = `Mined : ${goldamount}`;
            break;
          case 'casino':
            successmessage = `Gambled : ${goldamount}`;
            break;
          case 'haos':
            successmessage = `At home : ${goldamount}`;
            break;
          default:
            console.log('This is an error!!');
            successmessage = 'not sure but something?';
        }
        dispatch(fetchGoldSuccess(json, successmessage));
      })
      .catch(error =>
        dispatch(fetchGoldFailure(error))
      );
  };
}

// Handle HTTP errors since fetch won't.
function handleErrors(response) {
  if (!response.ok) {
    throw Error(response.statusText);
  }
  return response;
}

export const FETCH_GOLD_BEGIN = "FETCH_GOLD_BEGIN";
export const FETCH_GOLD_SUCCESS =
  "FETCH_GOLD_SUCCESS";
export const FETCH_GOLD_FAILURE =
  "FETCH_GOLD_FAILURE";

export const fetchGoldBegin = () => ({
  type: FETCH_GOLD_BEGIN
});

export const fetchGoldSuccess = ({ goldreturn }, successmessage) => {

  return ({
    type: FETCH_GOLD_SUCCESS,
    goldreturned: { goldreturn },
    activity: successmessage,
  });
};

export const fetchGoldFailure = error => ({
  type: FETCH_GOLD_FAILURE,
  payload: { error }
});
