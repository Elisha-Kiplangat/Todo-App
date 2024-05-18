document.addEventListener('DOMContentLoaded', () => {
    const list = document.querySelector('.todo-list ul');
    const input = document.querySelector('.todo-input')


    list.addEventListener("click", (e) => {
        if (e.target.className == "delete") {
            const li = e.target.parentElement;
            li.parentNode.removeChild(li);
        }
    })


    input.addEventListener('.submit', (e) => {
        e.preventDefault();

        const value = input.querySelector('input[type="text"]').value;
        const li = document.createElement('li');
        const name = document.createElement('span');
        const delBtn = document.createElement('span');

        
        name.textContent = value;
        delBtn.textContent = 'x';

        
        name.classList.add('content');
        delBtn.classList.add('delete');

        
        li.appendChild(name);
        li.appendChild(delBtn);
        list.appendChild(li);
       
        input.querySelector('input[type="text"]').value = '';

    })
})


