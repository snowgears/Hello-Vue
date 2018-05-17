new Vue({
  el: "#app",
  data: {
      title: "Type to change the title!",
      counter: 0,
      x: 0,
      y: 0,
      attachBlue: false,
      colorClass: ''
  },
  methods: {
    changeTitle: function(event) {
      this.title = event.target.value;
    },
    incCount: function() {
      this.counter++;
    },
    updateCoords: function(event) {
      this.x = event.clientX;
      this.y = event.clientY;
    }
  }
});
