# Run with : `bash $GOPATH/react-bootcamp-2019-haos_store/z_scrpys/create_react_redux_boilerplate.bash`
# or
# run with : `bash $GOPATH/react-bootcamp-2019-haos_store/z_scrpys/create_react_redux_boilerplate.bash project_name_here`

# Built using notes from : /react-bootcamp-2019-haos_store/bootcamp/week5/Speros_Examples/React_Redux-Basics/README.md
CURRENT_DIR=$PWD

# check for passed in project name to use and if none found prompt for it.
if [ -z ${1+x} ]; then
  read -p "Enter Project Name : " PROJECT_NAME
else 
  PROJECT_NAME=$1;
fi

# Run create react app and install redux
npx create-react-app $PROJECT_NAME
cd $PROJECT_NAME
#npm install --save redux react-redux react-router react-router-dom

npm install --save redux react-redux react-router react-router-dom babel-polyfill cross-fetch redux-thunk redux-logger prop-types

# ToDo : Delete contents of src and public folders and write new files.

rm -rf $PWD/src/*
rm -rf $PWD/public/*

# Return shell curser to directory script was run from.
cd $CURRENT_DIR