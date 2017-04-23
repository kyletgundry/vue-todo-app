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
        if (this.newTask !== "") {
          this.tasks.push(this.newTask);
          this.newTask = "";
        }
      },
      deleteTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1);
      }
    }
  });
});
