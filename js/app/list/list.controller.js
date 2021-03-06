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
  vm.startRemove = startRemove;
  vm.isInReadMode = isInReadMode;
  vm.isInAddMode = isInAddMode;
  vm.isInEditMode = isInEditMode;
  vm.isInRemoveMode = isInRemoveMode;
  vm.save = save;
  vm.cancel = reset;
  vm.remove = remove;

  function add () {
    vm.currentTask.complete = false;
    vm.currentTask.id = vm.list.tasks.length + 1;
    vm.list.tasks.push(vm.currentTask);
    vm.currentTask = {};
    reset();
  }

  function startAdd() {
    reset();
    addFlag = true;
    vm.currentTask = {};
  }

  function startEdit(id) {
    reset();
    selectedId = id;
    editFlag = true;
    for (var i = 0; i < vm.list.tasks.length; i++) {
      var task = vm.list.tasks[i];
      if (task.id === id) {
        vm.currentTask.name = task.name;
        vm.currentTask.complete = task.complete;
      }
    }
  }

  function startRemove(id) {
    reset();
    selectedId = id;
    removeFlag = true;
  }

  function isInReadMode(id) {
    return selectedId < 0 || selectedId !== id;
  }

  function isInAddMode() {
    return addFlag;
  }

  function isInEditMode(id) {
    return selectedId === id && editFlag;
  }

  function isInRemoveMode(id) {
    return selectedId === id && removeFlag;
  }

  function save() {
    for (var i = 0; i < vm.list.tasks.length; i++) {
      if (vm.list.tasks[i].id === selectedId) {
        vm.list.tasks[i].name = vm.currentTask.name;
        vm.list.tasks[i].complete = vm.currentTask.complete;
        reset();
      }
    }
  }

  function reset() {
    selectedId = -1;
    addFlag = false;
    editFlag = false;
    removeFlag = false;
    vm.currentTask = {};
  }

  function remove(id) {
    for (var i = 0; i < vm.list.tasks.length; i++) {
      if (vm.list.tasks[i].id == id) {
        vm.list.tasks.splice(i, 1);
        reset();
      }
    }
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
