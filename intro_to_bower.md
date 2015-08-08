# Intro Bower
## A Package Manager For Assets

Bower is a front-end asset tool. It will be help for downloading and integrating some of the most common modules for the front-end:

* `bootstrap` comes with all the `css` and `js` modules you'll need.
* `normalize.css` comes with CSS for normalizing the default CSS in a browser
* `animate.css` comes with all the CSS for adding easy CSS animations like `bounce` or `shake`.
* `spinkit` comes with all the CSS you need to start adding custom beautiful CSS loading spinners.
* `hint.css` a tooltip for CSS hints next to elements



## Install

You'll need to install Bower via npm

```bash
npm install -g bower
```

Now you have it! Try checking your version.

```bash
bower -v
```

## Starting

In your project directory run the following:

```bash
bower install bootstrap
```

You should now see bootstrap in `bower_components` directory. You can include it in your express application by adding the following line.

```javascript
app.use(express.static("bower_components"))
```

Then add a link for it in one of your views.


```html
<link rel="stylesheet" type="text/css" href="/bootstrap/dist/css/bootstrap.css">

```

## Saving Bower Installs


If you want to keep a record of install modules via bower then you should create a `bower.json` file using `bower init`. *You run this in your main project directory.*

```bash
bower init
```

**NOTE**: just answer the questions as best as possible (just hint enter if you're not sure).


You can read more about it [here](http://bower.io/docs/creating-packages/#bowerjson) if you're concerned.










