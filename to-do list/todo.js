document.querySelector(".btn").addEventListener("click", () => {
    const taskText = document.getElementById('new-task').value;
    if (taskText === '') return;

    const li = document.createElement('li');

    const taskSpan = document.createElement('span');
    taskSpan.textContent = taskText;

    const removebtn = document.createElement('button');
    removebtn.textContent = 'Remove';
    removebtn.className = 'remove';
    removebtn.addEventListener('click', () => {
        li.remove();
    });
    
    li.appendChild(taskSpan);
    li.appendChild(removebtn);

    taskSpan.addEventListener("click", () => {
        taskSpan.classList.toggle('completed');
    });

    document.getElementsByClassName('task')[0].appendChild(li);
    document.getElementById('new-task').value = '';
});
