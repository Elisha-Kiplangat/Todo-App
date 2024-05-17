const pege = document.DOMContentLoaded(() => {
    const dlt = document.querySelector('.clear');

    dlt.addEventListener('click', (e) => {
        e.target.parentElement.parentElement.remove();
    });

    const add = document.querySelector('input').value;



});

let form=document.querySelector("form");
let text=document.getElementById("text");
let todoCon=document.querySelector(".todo-list")
form.addEventListener('submit', (e)=>{
    e.preventDefault();
    addtodo();
})


