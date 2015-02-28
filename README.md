# jQuery Toggles

Want to create easy toggle buttons that you can click, drag, animate, use to toggle checkboxes and more? Yeah.

Examples can be seen [here](http://simontabor.com/toggles/).

## Usage

### Step 1: Include it in your page

Include the CSS at the start:

```html
  <head>
    <title>My cool page</title>
  
    <link rel="stylesheet" href="css/toggles.css">
    <link rel="stylesheet" href="css/toggles-modern.css">
    
    <!-- ALL OF THE THEMES -->
    <!-- <link rel="stylesheet" href="css/toggles-all.css"> -->
    
    <!-- ALL OF THE CSS AND THEMES IN ONE FILE -->
    <!-- <link rel="stylesheet" href="css/toggles-full.css"> -->
```

And the JS at the end:

```html
    <script src="js/toggles.js" type="text/javascript"></script>
  </body>
</html>
```

### Step 2: Create your element

You need to specify the class for the specific theme you want to use.  In this case we are using `toggle-modern`.  The `toggle` class is simply what we will use as our selector to initialize it.

```html
<div class="toggle toggle-modern">
```

The other themes we could have used are:

* soft
* light
* dark
* iphone

### Step 3: Initialize!

Now we just need to initialize the element we made to make it toggleable!

```javascript

// Simplest way:
$('.toggle').toggles();


// With options (defaults shown below)
$('.toggle').toggles({
  drag: true, // allow dragging the toggle between positions
  click: true, // allow clicking on the toggle
  text: {
    on: 'ON', // text for the ON position
    off: 'OFF' // and off
  },
  on: true, // is the toggle ON on init
  animate: 250, // animation time
  transition: 'swing', // animation transition,
  checkbox: null, // the checkbox to toggle (for use in forms)
  clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
  width: 50, // width used if not set in css
  height: 20, // height if not set in css
  type: 'compact' // if this is set to 'select' then the select style toggle will be used
});


// Getting notified of changes, and the new state:
$('.toggle').on('toggle', function (e, active) {
  if (active) {
    foo();
  } else {
    bar();
  }
});

```

## Advanced Usage

### Setting toggle states

```javascript
// initiate a new Toggles class
$('.toggles').toggles({
  on: true
});

// the underlying Toggles class can be accessed
var myToggle = $('.toggles').data('toggles');

console.log(myToggle.active); // true
myToggle.toggle();
console.log(myToggle.active); // false

// set the state to 'false'
// will not do anything if the state is already false
myToggle.toggle(false);
console.log(myToggle.active); // false

// passing a boolean in place of options on an active toggle element
// will set the state
$('.toggles').toggles(true);
console.log(myToggle.active); // true

// the toggle-active data attribute stores the state too
console.log($('.toggles').data('toggle-active')); // true

// myToggle.toggle(state, noAnimate, noEvent)

// don't animate the change
myToggle.toggle(false, true);

// change the state without triggering an event
myToggle.toggle(true, false, true);
```

### Using data-toggle-\* attributes on the element

Any of the following options can be set using data-toggle attributes: `on`, `drag`, `click`, `width`, `height`, `animate`, `easing`, `type`
```html
<div class="toggles" data-toggle-on="true" data-toggle-height="20" data-toggle-width="60"></div>
```
```javascript
$('.toggles').toggles();
```
