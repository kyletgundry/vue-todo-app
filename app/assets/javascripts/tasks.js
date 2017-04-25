/* global Vue */
document.addEventListener("DOMContentLoaded", function(event) { 
  var app = new Vue({
    el: '#app',
    data: {
      tasks: [
      {name: "Wake Up!", complete: false}, 
      {name: "Eat Food!", complete: false},
      {name: "Brush Teeth!", complete: false}
      ],
      newTask: ""
    },
    methods: {
      addTask: function() {
        //console.log("I'm gonna add the review now...", this.newReview);
        if (this.newTask !== "") {
          this.tasks.push({name: this.newTask, complete: false});
          this.newTask = "";
        }
      },
      deleteTask: function(inputTask) {
        var index = this.tasks.indexOf(inputTask);
        this.tasks.splice(index, 1);
      },
      toggle: function(inputTask) {
        inputTask.complete = !inputTask.complete;
      }
      /* isPostive: function(inputReview) {
        return (inputReview.indexOf("bad") === -1) OR
        if if (inputReview.indexOf("bad") === -1) {
          return = false;
        else
          return = true;
        end
        }
      }*/
    }
  });
});
