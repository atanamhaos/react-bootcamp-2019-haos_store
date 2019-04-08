# Run with : `bash $GOPATH/react-bootcamp-2019-haos_store/z_scrpys/test.bash passed_in_parm`
# Run with : `bash $GOPATH/react-bootcamp-2019-haos_store/z_scrpys/test.bash passed_in_parm testparm2`

echo 'hi'
echo $0
echo $1

#PROJECT_NAME=$2
if [ -z ${2+x} ]; then
  echo "parm 2 is unset";
  echo "parm 2 is still unset";
  read -p "Enter Project Name : " PROJECT_NAME
else 
  echo "parm 2 is set to '$2'";
  echo "parm 2 is  is still set to '$2'";
  PROJECT_NAME=$2;
fi

#read -p "Enter Project Name : " PROJECT_NAME
echo $PROJECT_NAME