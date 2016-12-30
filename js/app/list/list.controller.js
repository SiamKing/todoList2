function ListController () {
  var vm = this;
  var selectedId = -1;
  var addFlag = false;
  var editFlag = false;
  var removeFlag = false;

  vm.currentTask = {};
  vm.add = add;
  vm.startAdd = startAdd;
  vm.startEdit = startEdit;
  vm.isInAddMode = isInAddMode;
  vm.isInEditMode = isInEditMode;
  vm.save = save;

  function add () {
    vm.currentTask.complete = false;
    vm.list.tasks.push(vm.currentTask);
    reset();
  }

  function startAdd() {
    reset();
    addFlag = true;
    vm.currentTask = {};
  }

  function startEdit() {

  }

  function isInAddMode() {
    return addFlag;
  }

  function isInEditMode() {

  }

  function save() {
    
  }

  function reset() {
    selectedId = -1;
    addFlag = false;
    editFlag = false;
    removeFlag = false;
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
