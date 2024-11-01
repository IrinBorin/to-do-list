function universalHandler(filter){
    if(filter === 'all'){
        allButtonHandler();
    }else if (filter === 'completed') {
        completedButtonHandler();
    } else if (filter === 'uncompleted') {
        uncompletedButtonHandler();
    }
    function allButtonHandler(){
        let allPart = [];
        allPart = tasks.filter((element) => element.classList.contains('list-item'));
        showTasks(allPart);
    }
    function completedButtonHandler(){
    
        let completedPart = [];
       completedPart = tasks.filter((element) => element.classList.contains('list-item_done'));
    
        showTasks(completedPart);
    
    }
    function uncompletedButtonHandler(){
        let uncompletedPart = [];
        uncompletedPart = tasks.filter((element) => !element.classList.contains('list-item_done'));
     
         showTasks(uncompletedPart);
     
    }
    
}