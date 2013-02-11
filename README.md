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

Examples can be seen [here](http://simontabor.com/toggles/)



## License (MIT)
Copyright (C) 2012 Simon Tabor

Permission is hereby granted, free of charge, to any person obtaining a copy of this software and associated documentation files (the "Software"), to deal in the Software without restriction, including without limitation the rights to use, copy, modify, merge, publish, distribute, sublicense, and/or sell copies of the Software, and to permit persons to whom the Software is furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM, OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE SOFTWARE.
