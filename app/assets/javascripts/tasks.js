/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: ["Wake Up!", "Eat Food!", "Brush Teeth!"],
      newTask: ""
    },
    methods: {
      addTask: function() {
        //console.log("I'm gonna add the review now...", this.newReview);
        this.tasks.push(this.newTask);
      }
    }
  });
});
