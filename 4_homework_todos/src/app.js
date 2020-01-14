import Vue from 'vue';

document.addEventListener('DOMContentLoaded', () => {
  new Vue ({
    el: "#app",
    data: {
      tasks: [
        {name: "Wash the car ", isCompleted: true},
        {name: "Do the dishes ", isCompleted: false},
        {name: "Get the shopping ", isCompleted: false},
        {name: "Cut the grass ", isCompleted: false},
      ],
      newTask: ""
    },
    methods: {
      saveNewTask: function(task) {
        this.tasks.push({
          name: this.newTask,
          isCompleted: false
        });
        this.newTask = "";
      },
        taskCompleted: function(index) {
        this.tasks[index].isCompleted = true;
      }

    }
  });
});
