# Tools
## Grunt 

To get started with Grunt we'll need to do the following:

```javascript
npm install -g grunt-cli
```

This will allow use to run the `grunt` command for any project. Next every `grunt` driven project needs a `Gruntfile.js`, so let's create one

`Gruntfile.js`

```javascript
module.exports = function (grunt) {
  
  grunt.registerTask("default", "Greet the world!", function () {
    console.log("HELLO WORLD!!")
  });
  
};
```

Now you can attempt to run this script by typing `grunt`.


```bash

grunt
```

However, you should get an error, because every Grunt project requires `grunt` to also be installed locally, so let's do that. For best practice you should also install `grunt-cli` locally and record it in your `devDependencies` list.


```
npm install --save grunt
```

Now we can run our `grunt` script. 

1.) Use the following code to create a greeting.txt file.

  ```javascript
  grunt.registerTask("greet", "creates a greeting.txt file", function () {
    var name = grunt.option("name") || "World";
    var text = grunt.template.process("Hello, <%= name %>", {data: {name: name }});
    grunt.file.write("greeting.txt", text);
  })
  ```
  
Then run it using `grunt greet --name="john doe"`


------

Alternatively, you could just install `grunt` locally and use `npm` to kickoff each `grunt task`, e.g.

```javascript
"devDependencies": {
  ...
  "grunt": "0.4.5",
  "grunt-cli": "0.1.13",
    ...
}


```

paired with some type of build command in NPM

```javascript
"scripts": {
  "build": "npm install && grunt",
  "grunt": "grunt"
}
```

Then you can use npm to run this 

```javascript
npm run grunt -- greet --name="joe"
```


------

 You can also use `grunt` packages to setup common build tasks. Let's setup a build task for our CSS.
 
 1.) First install a `grunt-contrib-cssmin` library.
 
 2.) Then load it into your application
 
```javascript
  grunt.loadNpmTasks("grunt-contrib-cssmin");
  
```
  
 3.) Next configure it to read your `css` files.
 
  ```javascript
   
    grunt.config('cssmin', {
      combine: {
        files: {
          'public/stylesheets/app.min.css': [
            'public/stylesheets/**/*.css'
          ]
        }
      }
    });
   
  ```
  
 
4.) Now just run the grunt minification command, `grunt cssmin`


### More Grunt


As you add more libraries you'll have one big config object instead of configuring each task individually.

```javascript
  grunt.initConfig({
    cssmin: {
      combine: {
            files: {
              'public/stylesheets/app.min.css': [
                 'public/stylesheets/**/*.css'
              ]
            }
          }
    },
    watch: {
      files: [
        'public/stylesheets/**/*.css'
      ],
      tasks: [default]
    }
  });
  
  grunt.registerTask("clean", function () {
    grunt.file.delete('public/stylesheets/app.min.css');
  })
  
  grunt.registerTask("default", ["clean", "cssmin", "watch"])
```

You'll also want to install `load-grunt-tasks`, and the following to your project.

```javascript
 require('load-grunt-tasks')(grunt, {
    pattern: 'grunt-*',
    scope: 'devDependencies'
  });
  
```
