const input = document.querySelector('input');
const btn = document.getElementById('addBtn');

btn.addEventListener('click', addList);

function addList(e) {
    const ul = document.querySelector('#ul');

    const newLi = document.createElement('li');
    const delBtn = document.createElement('button');

    newLi.classList.add('newLi');
    delBtn.classList.add('delBtn');

    delBtn.innerHTML = '<i class="fa-solid fa-trash"></i>';

    if (input.value === '') {
        alert('Bạn chưa nhập nhiệm vụ');
    } else {
        newLi.textContent = input.value;
        input.value = '';
        ul.appendChild(newLi);
        newLi.appendChild(delBtn);
        let result = input.value;
        result.trim();
    }

    function sortList() {
        result.sort();
    }

    delBtn.addEventListener('click', function () {
        const parent = this.parentElement;
        parent.remove();
    })

}

function delAll() {
    ul.innerHTML='';
}




























