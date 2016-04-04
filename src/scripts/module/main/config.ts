requirejs.config({
  paths:{
    'scrollToPlugin': '/cache/public/js/gsap/plugins/ScrollToPlugin',
    'tweenMax': '/cache/public/js/gsap/TweenMax',
    'timelineMax': '/cache/public/js/gsap/TimelineMax',
    'button':'../button',
    'sectionselect':'../sectionselect',
    'plateselect':'../plateselect'
  },
  shim: {
    "tweenMax": {
      deps:    ["scrollToPlugin"],
      exports: "TweenMax"
    },
    "timelineMax": {
        deps:    ["tweenMax"],
        exports: "TimelineMax"
    },
    "scrollToPlugin": {
      exports: "ScrollToPlugin"
    }
  }
});