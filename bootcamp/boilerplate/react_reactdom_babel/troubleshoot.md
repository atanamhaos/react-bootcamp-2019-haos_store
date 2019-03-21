## Working around CORS problems


### 4 Windows

"C:\Program Files (x86)\Google\Chrome\Application\chrome.exe" --allow-file-access-from-files --allow-file-access --allow-cross-origin-auth-prompt`

### 4 macOS

Quit any running instance of Chrome.
Run your favorite Terminal application.

In the terminal, run a commands like:
`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files --allow-file-access --allow-cross-origin-auth-prompt`

The above command will deliver console output, Chrome's, in the terminal and you will not be able to enter commands.

Running the below command allows continued command entery in the terminal but if you quit the terminal, chrome will close. You can type exit to close the shell but you will leave the terminal program running. You will still see Chrome's console output.

`/Applications/Google\ Chrome.app/Contents/MacOS/Google\ Chrome --allow-file-access-from-files --allow-file-access --allow-cross-origin-auth-prompt &`

