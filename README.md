## Node.js
**Node.js is a platform built on Chrome's JavaScript engine to run JavaScript applications.**
Go to [nodejs.org][node] download and install. Once installed verify sucessfull installation by running below command.
## Some important commands 
```
> node root -g  // print the path where global node_modules are installed.
> node --version or node -v 
> npm --version npm -v
> npm init
> npm install //install all the module metioned in package.json
> npm install <module_name> -g //-g for global installation
> npm install with option --save, --save-dev
> npm list
> npm link //run from a module, Create a link in global module (user.../node_modules)
> npm link <module_name> //create a link from global module folder to local node_moduels
> npm publish
> npm unpublish --force  //need an acc before publish or unpublish
```
## Interactive Terminal

*  Open shell and type **`node`** go get prompt. Here we can execute JavaScript.
* type .exit or press ctrl+c twoice to come out from node terminal

```JS
$node
>console.log('Hellow World');
>function(){
... console.log('function called');
... var  a = 2+3; // any thing
...} // Here triple dot represent continuation of function
```
## Debug Node JS App

* Microsoft visual studio code editor comes with build in debugger by using launch.json
* If we are using ATOM then install **node-debugger** plugin and configure it.
```launch.json
{
"type": "node",
"request": "launch",
"name": "Launch in WSL",
"useWSL": true,
"program": "${workspaceFolder}/hello.js"
}
```
* Remote debugging is also possilble by below configuration
``` launch.json Remote debugging
{
"type": "node",
"request": "attach",
"name": "Attach to remote",
"address": "TCP/IP address of process to be debugged",
"port": "9229",
"localRoot": "${workspaceFolder}",
"remoteRoot": "C:\\Users\\John\\project\\server"
}
```
## Node Global
* Node has global (can say same as window in browser).
* console.log(global) //here console comes from 'global' var

## Asynchronous Programming
**process.nextTick(funcitonName)**
Add the function at the head of eventque queue and it's called just after the current function.
**setImmidiate(functionName)**
Add the callback function at the end of eventque.

## Callback function in Node.js

Basically callback function takes two argument first one is error and second one is data**
```js
callbackFunction(error, data){
}
```

## Query and Path param
```js
var  url =require('url')
var  parseUrl = url.parse('https://user:pass@sub.host.com:8080/p/a/t/h?query=string');
var  path = parseUrl.pathname; // /p/a/t/h
var  query= parseUrl.query; // {query=string}
```
## HTTP request
```post
function myServer(req, res) {
  if(request.method === "POST") {
  if (request.url === "/inbound") {
    var requestBody = '';
    request.on('data', function(data) {
      requestBody += data;
    });
    request.on('end', function() {
      response.writeHead(200, {'Content-Type': 'text/html'});
      response.write('<!doctype html><html><head><title>response</title></head><body>');
      response.write(requestBody);
      response.end('</body></html>');
    });
    request.on('error', (err) => {
      console.error(err);
    })
  }else{
    response.writeHead(404, 'Resource Not Found', {'Content-Type': 'text/html'});
    response.end('<!doctype html><html><head><title>404</title></head><body>404: Resource Not Found</body></html>');
   }
 }
}
var httpServer = http.createServer(myServer);
httpServer.listen(8080); //the server object listens on port 8080
```

## Node Module
* If you’re installing something that you want to use in your program, using require('whatever'), then install it locally, at the root of your project.
* If you’re installing something that you want to use in your shell, on the command line or something, install it globally, so that its binaries end up in your PATH environment variable
* By default, every file in node.js is module and return  **module.exports**.
* exports is an alias of module.exports.
* Node module returns module.exports **not exports**  so
```
 modoule.exports.add = {} is valid.
 module.exports = {} is valid.
 export.add =  {} is valid //adding property to same object
 export = {} //is not valid 
```
 I already told only module.exports is returned not export and here export started pointing to completely diff object not the same one which is being pointed by module.export.

**ie** when we write
```mymodule.js
var greet = function () {
console.log('Hello World');
};
module.exports.greet = greet;
```
**is converted** in
```
(function (exports, require, module, __filename, __dirname) { //added by node
var export = module.export;
var greet = function () {
console.log('Hello World');
};
module.export.sayHello = "Hello";
module.exports.greet = greet; //exports =greet;
return module.exports;
})(); //add by node
```
## Consume node module
```
* var test =  require('mymodule');```
* console.log(test); // print {sayHello: "Hello", greet: greet}
```
## How node pickup node module.
* First it search for the file (not node module) at given path.
* If not found then it search the module in local (project's) node_modules.
*  require('modulename') vs require('modulename.js')
   - if extension is given then it directly search the file only
   - if extension is not given then first it search the file and if file is not found then it reads package.json inside `node_modules/modulename` and load the file with respect to `main` key

## What if two modules of diff version are loaded.

consider module1 loads module3v1 and module2 loads module3v2 then both modules use their own loaded version of module3
## Cyclic dependency? :) No problem
say module a.js loads b.js and b.js load a.js then no problem of cyclic dependency both refer to each other


## NPM Link
```node
modulea >npm link// create a link of current module in global node_modules
moduleb> npm link <module_name> //create a link of given module (modulea) into local node_modules and  it now it can be used in the moduleb.
```
1.  **use npm install async and require('async') to perform some async operations**
1.  **use npm install fs and require('fs') to perform file/stream operations**
1.  **use var rs = fs.readStream('filename'); rs.pipe(res) to write all content to res



[node]: <https://nodejs.org/en/>