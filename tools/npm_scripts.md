# Tools
## NPM Scripts

Npm's `package.json` file let's you do a lot more than just separate dependency lists. You may have noted earlier we had something like the following in our `package.json`.

```javascript
  "scripts": {
    "test": "echo \"Error: no test specified\" && exit 1"
  }
```

This is a built-in script npm command for running tests. 

```bash
npm test
```

Running the `npm test` will print an `Error: ...` message to the console.

We are ready to explore more tasks in general.

## NPM Tasks

To get started with NPM Scripts we will need a `package.json` in our project directory. Use `npm init` or your editor to create one. Then let's install our first tool.


```bash
 npm install --save-dev jshint
```

You might have something like the following:

```javascript
{
  "name": "Something",
  "version": "0.0.0",
  "description": "A Something project",
  "main": "index.js",
  "scripts": {},
  "author": "",
  "license": "ISC",
  "dependencies": {
  },
  "devDependencies": {
    "jshint": "^2.5.6",
  }
}

```

Next let's edit the `"scripts":` object to include our first task.


```javascript
"scripts": {
  "lint": "jshint ./example.js"
}
```

Now we have our first command setup we can run it.

```bash

npm run lint
```

Anything in your `"scripts"` object can be run using `npm run <key_of_script>`.

## Hooks

### Exercise

1.) Make a directory called `scripts` and create a file called `scripts/greet.js`. In the `greet.js` file use `console.log` to print out a greeting. Verify it works using `node scripts/greet.js`. Add the following to your `package.json`.

  
```javascript`
...
"scripts": {
  ...
  
  "prelint": "node scripts/greet.js"
},
...

```
Now use the `npm run lint` command again. What do you see?

You can also have a `post-` install script.

  
```javascript`
...
"scripts": {
  ...
  
  "postinstall": "echo 'Done Installing!' "
},
...

```

Now when you run `npm install` you should see the `Done Installing` message.

## Script Variables

You can set and use variables for npm scripts using the `config` key.


```javascript
...
  "config": {
    greeting: "Hello, world!"
  },
...

```

Then we can use this in our scripts

```javascript
...
  "scripts": {
    greet: "echo $npm_package_config_greeting"
  }
...
```

Now run `npm run greet` and you should see the appropriate `Hello, world!`



