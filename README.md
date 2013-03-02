# jQuery Toggles

Want to create easy toggle buttons that you can click, drag, animate, use to toggle checkboxes and more? Yeah.

Using jQuery Toggles is easy...

```javascript

// Simplest way:
$('.toggle').toggles();


// With options (defaults shown below)
$('.toggle').toggles({
    drag: true, // can the toggle be dragged
    click: true, // can it be clicked to toggle
    text: {
      on: 'ON', // text for the ON position
      off: 'OFF' // and off
    },
    on: true, // is the toggle ON on init
    animate: 250, // animation time
    transition: 'ease-in-out', // animation transition,
    checkbox: null, // the checkbox to toggle (for use in forms)
    clicker: null, // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
    width: 50, // width used if not set in css
    height: 20 // height if not set in css
  });


// Getting notified of changes, and the new state:
$('.toggle').on('toggle', function (active) {
    if (active) {
        foo();
    } else {
        bar();
    }
});

```

## TODO
- Improve themes
- Document new toggle type (select)

Examples can be seen [here](http://simontabor.com/toggles/)


MIT. See LICENSE.