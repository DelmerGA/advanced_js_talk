# Tools
## Browserify


To get started we will need to install browserify

```javascript
npm install -g browserify
```

## Playing

To get playing with browserify we should build a quick example directory.

```bash
mkdir browserify_example
mkdir index.html
mkdir -p public/{javascripts,stylesheets}

echo {} > package.json

```

Then let's install `underscore` and `broswerify` locally (just so people know it's a dependency)

```bash
npm install --save underscore
npm install --save-dev browserify
```

Now let's write our first script

`public/javascripts/caps.js`

```javascript
var _ = require("underscore");


var capitalize = function (word) {
  return word[0].toUpperCase() + word.slice(1);
};

var titleize = function titleize(string) {
  var words = string.split(/\s+/);
  return _.map(words, capitalize).join(" ");
};

module.exports.capitalize = capitalize;
module.exports.titleize = titleize;
```

Now let's write our `app.js`

`public/javascripts/app.js`

```javascript
var caps = require("./caps.js");

var title = caps.titelize("a brave new world");

console.log(title);
```


Now let's run it through browserify.

```bash
browserify public/javascripts/app.js -o public/javascripts/main.js
```

You should now have a single `main.js` file in your `public/javascripts`.

Let's link it in our index.html


```html
<!DOCTYPE html>
<html>
<head>
  <title>Browserify-ing</title>
  <script type="text/javascript" src="public/javascripts/main.js"></script>
</head>
<body>
  Check the console!
</body>
</html>
```


