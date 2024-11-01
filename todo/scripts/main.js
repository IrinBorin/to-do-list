const createTask = document.querySelector('#createTask');
const createList = document.querySelector('.list');
const inputTask = document.querySelector('.task-input');
const allButtonBucket = document.querySelector('.status');

const tasks = [];

createTask.addEventListener('click', buttonClickHandler);
allButtonBucket.addEventListener('click', statusHandler);

function buttonClickHandler() {
    const newTask = document.createElement('li');
    newTask.classList.add('list-item');
    newTask.textContent = inputTask.value;
    newTask.addEventListener('click', taskHandler);
    
    tasks.push(newTask);
    showTasks(tasks);
    inputTask.value = '';
}

function showTasks(arrTasks) {
    createList.innerHTML = '';
    createList.append(...arrTasks);
}

function taskHandler(event) {
    event.target.classList.toggle('list-item_done');
}

function statusHandler(event) {
    filterUniversalHandler(event.target.id);
}

function filterUniversalHandler(status) {
    let filteredTasks = [];
    
    if (status === 'all') {
        filteredTasks = tasks;
    } else if (status === 'completed') {
        filteredTasks = tasks.filter((task) => task.classList.contains('list-item_done'));
    } else if (status === 'uncompleted') {
        filteredTasks = tasks.filter((task) => !task.classList.contains('list-item_done'));
    }
    
    showTasks(filteredTasks);
}    

//all.addEventListener('click', allButtonHandler);
//completed.addEventListener('click', completedButtonHandler);
//uncompleted.addEventListener('click', uncompletedButtonHandler);







