# CLEAN THIS!

## Setup C9 for React Bootcamp!

### Step 1

```
sudo apt-get update
sudo apt-get install -y build-essential checkinstall libssl-dev
curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.32.1/install.sh | bash
```

* This didn't seem to work...

```
 export NVM_DIR="/home/ubuntu/.nvm"
 [ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
```

## Step 2

* These commands, for whatever reason, do not work in a script, run them w. copy/paste though, and they do. Do that.

```
nvm install 10.15.3
nvm use 10.15.3
nvm alias default 10.15.3
```

* You can test that it works with something like this (ToDo: update to npx/expand?)

```
npm install -g create-react-app
```


## Browser Dumps

* [How to Update Node.js to Latest Version (Linux, Ubuntu, OSX, Others) - HostingAdvice.com](https://www.hostingadvice.com/how-to/update-node-js-latest-version/)
* [Set default node version with NVM – Eric Binnion](https://eric.blog/2016/08/23/set-default-node-version-with-nvm/)
* [Getting Started · Create React App](https://facebook.github.io/create-react-app/docs/getting-started)
* [facebook/create-react-app: Set up a modern web app by running one command.](https://github.com/facebook/create-react-app)
* [Create a New React App – React](https://reactjs.org/docs/create-a-new-react-app.html)
* [Creating a new project with npm <= 5.2](https://gist.github.com/gaearon/4064d3c23a77c74a3614c498a8bb1c5f)




# Garbage

sudo npm cache clean -f
sudo npm install -g n
sudo n stable


```

Error: Cannot find module 'strip-ansi'
    at Function.Module._resolveFilename (module.js:469:15)
    at Function.Module._load (module.js:417:25)
    at Module.require (module.js:497:17)
    at require (internal/module.js:20:19)
    at Object.<anonymous> (/home/ubuntu/.nvm/versions/node/v6.11.2/lib/node_modules/npm/node_modules/wide-align/node_modules/string-width/index.js:2:17)
    at Module._compile (module.js:570:32)
    at Object.Module._extensions..js (module.js:579:10)
    at Module.load (module.js:487:32)
    at tryModuleLoad (module.js:446:12)
    at Function.Module._load (module.js:438:3)
nvm is not compatible with the npm config "prefix" option: currently set to ""
Run `npm config delete prefix` or `nvm use --delete-prefix v6.11.2 --silent` to unset it.
=> Close and reopen your terminal to start using nvm or run the following to use it now:

export NVM_DIR="/home/ubuntu/.nvm"
[ -s "$NVM_DIR/nvm.sh" ] && . "$NVM_DIR/nvm.sh"  # This loads nvm
benjaminhaos:~/workspace $ 
```
13

For what it's worth, this ended up happening to me, using nvm on mac. npm cache clean didn't work. I ended up reinstalling via nvm:

$ curl -o- https://raw.githubusercontent.com/creationix/nvm/v0.33.2/install.sh | bash
$ nvm install node