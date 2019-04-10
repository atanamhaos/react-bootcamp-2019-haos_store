export const ADD_AUTHOR =
  "ADD_AUTHOR";

export const addAuthorAction = (authorName) => {
  console.log('addAuthor action');
  return ({
    type: ADD_AUTHOR,
    name: authorName,
  });
};