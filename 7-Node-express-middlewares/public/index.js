console.log("-index.js-")

// ( here u can use react.js if you wish)

let todosBtn = document.querySelector('.btn-dark')

todosBtn.addEventListener('click', async e => {
    let response = await fetch("/todos")
    let todos = await response.json();
    document.querySelector('.card-body')
    .innerHTML=todos.map(todo=>{
        return `
        <div class="list-group-item">
            ${todo.id} ${todo.title}  ${todo.completed}
        </div>
        `
    }).join(" ")
})