function ListController () {
  var vm = this;
  vm.currentTask = {};
  vm.add = add;

  function add () {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask)
  }

  vm.list = {
    name: 'To Do List',
    tasks: [
      {
        id: 1,
        name: 'Take out Trash',
        complete: false
      },
      {
        id: 2,
        name: 'Spank the monkey',
        complete: false
      },
      {
        id: 3,
        name: 'Take a poo',
        complete: true
      },
    ]
  }

}

angular
  .module('todoApp')
  .controller('ListController', ListController)
