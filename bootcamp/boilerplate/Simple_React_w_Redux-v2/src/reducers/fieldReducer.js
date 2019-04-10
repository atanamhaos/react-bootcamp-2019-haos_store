export default (state = { submissions: [], fieldval: '' }, action) => {

  switch (action.type) {
    case 'FIELD_UPDATE':
      return {
        ...state,
        fieldval: action.fieldval,
      };
    case 'FIELD_STORE':
      state.submissions.push({ submittedval: state.fieldval, });

      return {
        ...state,
        fieldval: '',
      };
    default:
      return state;
  }
};
