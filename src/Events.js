export function createButton() {
    const btn = document.createElement('button');
    btn.textContent = 'Удали меня';
    btn.addEventListener('click', () => {
        btn.remove();
    });
    document.body.appendChild(btn);
}

export function createArrList(arr) {
    const ul = document.createElement('ul');
    arr.forEach((text) => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('mouseover', () => {
            li.setAttribute('title', text);
        });
        ul.appendChild(li);
    });
    document.body.appendChild(ul);
}

export function createLink() {
    const a = document.createElement('a');
    a.href = 'https://tensor.ru/';
    a.textContent = 'tensor';
    a.addEventListener('click', (event) => {
        if (!a.textContent.includes(a.href)) {
            event.preventDefault();
            a.textContent = `${a.textContent} ${a.href}`;
        }
    });
    document.body.appendChild(a);
}

export function createList() {
    const ul = document.createElement('ul');
    const btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';

    const handleLiClick = (event) => {
        event.target.textContent = `${event.target.textContent}!`;
    };

    const addNewLi = (text) => {
        const li = document.createElement('li');
        li.textContent = text;
        li.addEventListener('click', handleLiClick);
        ul.appendChild(li);
    };

    addNewLi('Пункт');

    btn.addEventListener('click', () => {
        addNewLi('Пункт');
    });

    document.body.appendChild(ul);
    document.body.appendChild(btn);
}
