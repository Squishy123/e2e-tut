//store our tasks
let data = {
    todo: [],
    completed: []
};

//add listener for button
document.querySelector('#task').addEventListener("click", () => {
    let input = document.querySelector('input');
    if (input.value) {
        addTodo(input.value);
    }
    input.value = "";
});

/** 
//add listener for button
document.querySelector('.addTodo').addEventListener("click", () => {
    let input = document.querySelector('input');
    if (input.value) {
        addTodo(input.value);
    }
    input.value = "";
});

//add listener for button
document.querySelector('.removeTodo').addEventListener("click", () => {
    let input = document.querySelector('input');
    if (input.value) {
        removeTodo(input.value);
    }
});*/

function addTodo(value) {
    let i = data.todo.findIndex((e) => {
        return (e.value == value);
    });
    if (i >= 0) {
        data.todo[i].num++;
        data.todo[i].node.innerHTML = `${value}<span class="badge badge-primary badge-pill">${data.todo[i].num}</span>`
    } else {
        let node = document.createElement('li');
        node.classList.add("todo", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
        node.innerHTML = `${value}<span class="badge badge-primary badge-pill">1</span>`
        document.querySelector('#todo').appendChild(node);
        data.todo.push({ node: node, value: value, num: 1 });
    }
}

function removeTodo(value) {
    let i = data.todo.findIndex((e) => {
        return (e.value == value);
    });

    if (i >= 0) {
        if (data.todo[i].num > 1) {
            data.todo[i].num--;
            data.todo[i].node.innerHTML = `${value}<span class="badge badge-primary badge-pill">${data.todo[i].num}</span>`
        } else {
            document.querySelector('#todo').removeChild(data.todo[i].node);
            data.todo.splice(i, 1);
        }
    }
}

function addCompleted(value) {
    let i = data.completed.findIndex((e) => {
        return (e.value == value);
    });
    if (i >= 0) {
        data.completed[i].num++;
        data.completed[i].node.innerHTML = `${value}<span class="badge badge-primary badge-pill">${data.completed[i].num}</span>`
    } else {
        let node = document.createElement('li');
        node.classList.add("completed", "list-group-item", "d-flex", "justify-content-between", "align-items-center");
        node.innerHTML = `${value}<span class="badge badge-primary badge-pill">1</span>`
        document.querySelector('#completed').appendChild(node);
        data.completed.push({ node: node, value: value, num: 1 });
    }
}

function removeCompleted(value) {
    let i = data.completed.findIndex((e) => {
        return (e.value == value);
    });

    if (i >= 0) {
        if (data.completed[i].num > 1) {    
            data.completed[i].num--;
            data.completed[i].node.innerHTML = `${value}<span class="badge badge-primary badge-pill">${data.completed[i].num}</span>`
        } else {
            document.querySelector('#completed').removeChild(data.completed[i].node);
            data.completed.splice(i, 1);
        }
    }
}