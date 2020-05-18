"use strict";
class Model {
    constructor() {
    // this.todos = JSON.parse(localStorage.getItem('todos')) || []
    this.tasks = [
        { id:1, text: 'Nueiti namo', status: false},
        { id:2, text: 'Nueiti i darba', status: false}
    ]

    }
    bindTasksListChanged(callback) {
        this.onTasksListChanged = callback
    }

    // _commit(tasks) {
    //     this.onTasksListChanged(tasks)
    //     localStorage.setItem('tasks', JSON.stringify(tasks))
    //   }

    addTask ( newTask ) {
        const task = {
            id:this.tasks.length > 0 ? this.tasks[this.tasks.length - 1].id + 1 : 1 ,
            text: taskText,
            status: false,
        }
        this.tasks.push(task)
    }
    deleteTask () {
        this.tasks = this.tasks.filter( task => task.id !== id )
    }
  }
  
  class View {
    constructor() {
        this.app = this.getElement('#root');

        this.title = this.createElement('h1');
        this.title.textContent = 'ToDo OOP'
        this.form = this.createElement('form');

        this.textArea = this.createElement('textarea');
       

        this.input = this.createElement('input');
        this.input.type = 'text';

        this.input = this.createElement('input');
        this.input.type = 'text';
        this,this.input.name = 'task';

        this.taskList = this.createElement('section');

        this.submitButton = this.createElement('div',['btn','blue']);
        this.submitButton.textContent = 'Add New';

        this.clearFormButton = this.createElement('div',['btn','grey']);
        this.clearFormButton.textContent = 'Clear form';

        this.deleteAllButton = this.createElement('div',['btn','red']);
        this.deleteAllButton.textContent = 'Delete All';

        this.form.append(this.textArea, this.input, this.submitButton, this.clearFormButton);
        this.app.append(this.deleteAllButton, this.title, this.form, this.taskList);
    }
    createElement(tag, classNames) {
        const element = document.createElement(tag)
        if (classNames) {
            classNames.forEach(className => {
                element.classList.add(className)
            }); 
        }
    return element
    }

    getElement(selector) {
        const element = document.querySelector(selector)
        return element
    }


    renderTasks(tasks) {
        
        tasks.forEach(task => {
            let item = this.createElement('div',['item']);
            item.textContent = task.text;
            item.id = task.id;
            item.status = task.status;
            this.taskList.append(item);
        }); 
             
     
        
    }
  }
  
  class Controller {
    constructor(model, view) {
      this.model = model;
      this.view = view;

      this.model.bindTasksListChanged(this.onTasksListChanged);

      this.onTasksListChanged(this.model.tasks);
    }
    onTasksListChanged = tasks => {
        this.view.renderTasks(tasks);
      }
  }
  
  const app = new Controller(new Model(), new View())
