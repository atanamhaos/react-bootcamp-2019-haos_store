

# This sources NVM for the script.
. $NVM_DIR/nvm.sh
# Install more current version of node
nvm install 10.15.3
# Make sure it is being used
nvm use 10.15.3
# Set it as default
nvm alias default node

# Install nodemon globally for use with express server
npm install -g nodemon


: <<'END' # Block Comment STARTS
END
# Block Comment ENDS

# ToDo: Console out what is happening and direction for using the setup
# ToDo: put output to logs
# ToDo: Add in the auto correcting/quiting shebang