
export const initialState = {
  data: [
    { 1: { id: 1, name: 'jack', quotes: [{ 1: { quote: 'smart words said', votes: 0 }, }, ], }, },
    { 2: { id: 2, name: 'jill', quotes: [{ 1: { quote: 'words said smart', votes: 0 }, }, ], }, },
  ],
  newAuthor:'',
  loading: false,
  error: null
};
