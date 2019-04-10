export const fieldUpdate = (fieldval) => dispatch => {
  dispatch({
    type: 'FIELD_UPDATE',
    fieldval,
  });
};

export const fieldStore = () => dispatch => {
  dispatch({
    type: 'FIELD_STORE',
  });
};
