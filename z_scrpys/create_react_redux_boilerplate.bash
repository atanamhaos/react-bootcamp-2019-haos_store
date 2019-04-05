# Run with : `bash $GOPATH/react-bootcamp-2019-haos_store/z_scrpys/create_react_redux_boilerplate.bash`
# Built using notes from : /react-bootcamp-2019-haos_store/bootcamp/week5/Speros_Examples/React_Redux-Basics/README.md
CURRENT_DIR=$PWD

# ToDo : check for passed in project name to use and if none found prompt for it.
PROJECT_NAME="dojo_dossier-r1"

# Run create react app and install redux
npx create-react-app $PROJECT_NAME
cd $PROJECT_NAME
npm install --save redux react-redux react-router react-router-dom

# ToDo : Delete contents of src and public folders and write new files.

# Return shell curser to directory script was run from.
cd $CURRENT_DIR