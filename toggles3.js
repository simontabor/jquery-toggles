/**
@license jQuery Toggles v3.0.0
Copyright 2013 Simon Tabor - MIT License
https://github.com/simontabor/jquery-toggles / http://simontabor.com/labs/toggles
*/

var Toggles = function(el, opts) {
  if (!opts) opts = {};

  // extend default opts with the users options
  opts = this.opts = $.extend({
    // can the toggle be dragged
    'drag': true,
    // can it be clicked to toggle
    'click': true,
    'text': {
      // text for the ON/OFF position
      'on': 'ON',
      'off': 'OFF'
    },
    // is the toggle ON on init
    'on': false,
    // animation time (ms)
    'animate': 250,
     // animation transition,
    'transition': 'ease-in-out',
    // the checkbox to toggle (for use in forms)
    'checkbox': null,
    // element that can be clicked on to toggle. removes binding from the toggle itself (use nesting)
    'clicker': null,
    // width used if not set in css
    'width': 50,
    // height if not set in css
    'height': 20,
    // defaults to a compact toggle, other option is 'select' where both options are shown at once
    'type': 'compact'
  }, opts);

  this.el = el;
  this.on = opts['on'];

  el.data('toggles', this);

  this.selectType = (opts['type'] == 'select');

  // ensure these are jquery elements
  this.checkbox = $(opts['checkbox']);

  // leave as undefined if not set
  if (opts['clicker']) this.clicker = $(opts['clicker']);

  // use native transitions if possible
  var transition = 'margin-left ' + opts['animate'] + 'ms ' + opts['transition'];
  this.transitions = {
    '-webkit-transition': transition,
    '-moz-transition': transition,
    'transition': transition
  };

  // for resetting transitions to none
  this.noTransitions = {
    '-webkit-transition': '',
    '-moz-transition': '',
    'transition': ''
  };

  this.createEl();
  this.bindEvents();
};

Toggles.prototype.createEl = function() {

  var height = this.el.height();
  var width = this.el.width();

  // if the element doesnt have an explicit height/width in css, set them
  if (!height) toggle.height(height = this.opts['height']);
  if (!width) toggle.width(width = this.opts['width']);

  var div = function(name) {
    return $('<div class="toggle-' + name +'>');
  };

  this.els = {
    // wrapper inside toggle
    slide: div('slide'),

    // inside slide, this bit moves
    inner: div('inner'),

    // the on/off divs
    on: div('on'),
    off: div('off'),

    // the grip to drag the toggle
    blob: div('blob')
  };

  var halfHeight = height / 2;
  var onOffWidth = width - halfHeight;

  var isSelect = this.selectType;

  // set up the CSS for the individual elements
  this.els.on
    .css({
      height: height,
      width: onOffWidth,
      textIndent: isSelect ? '' : -halfHeight,
      lineHeight: height + 'px'
    })
    .html(this.opts['text']['on']);

  this.els.off
    .css({
      height: height,
      width: onOffWidth,
      marginLeft: isSelect ? '' : -halfHeight,
      textIndent: isSelect ? '' : halfHeight,
      lineHeight: height + 'px'
    })
    .html(this.opts['text']['off'])
    .addClass('active');

  this.els.blob.css({
    height: height,
    width: height,
    marginLeft: -halfHeight
  });

  this.els.inner.css({
    width: width * 2 - height,
    marginLeft: (isSelect || this.on) ? 0 : -width + height
  });

  if (selectType) {
    this.els.slide.addClass('toggle-select');
    this.el.css('width', onOffWidth * 2);
    this.els.blob.hide();
  }

  // construct the toggle
  this.els.inner.append(this.els.on, this.els.blob, this.els.off);
  this.els.slide.html(this.els.inner);
  this.el.html(this.els.slide);
};

Toggles.prototype.bindEvents = function() {

  // evt handler for click events
  var clickHandler = function(e) {
    // if the target isn't the blob or dragging is disabled, toggle!
    if (e.target !=  this.els.blob[0] || !opts['drag']) {
      this.toggle();
    }
  }.bind(this);

  // if click is enabled and toggle isn't within the clicker element (stops double binding)
  if (this.opts['click'] && (!this.opts['clicker'] || !this.opts['clicker'].has(this.el).length)) {
    this.el.on('click', clickHandler);
  }

  // setup the clicker element
  if (opts['clicker']) {
    opts['clicker'].on('click', clickHandler);
  }

  // we're done with all the non dragging stuff
  if (!opts['drag'] || selectType) return;


};

$.fn['toggles'] = function(opts) {
  return this.each(function() {
    new Toggles($(this), opts);
  });
};
