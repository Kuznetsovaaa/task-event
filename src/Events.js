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
    const li = document.createElement('li');
    li.textContent = 'Пункт';

    li.addEventListener('click', (event) => {
        event.target.textContent = `${event.target.textContent}!`;
    });

    ul.appendChild(li);

    const btn = document.createElement('button');
    btn.textContent = 'Добавить пункт';

    btn.addEventListener('click', () => {
        const newLi = document.createElement('li');
        newLi.textContent = 'Пункт';
        newLi.addEventListener('click', (event) => {
            event.target.textContent = `${event.target.textContent}!`;
        });
        ul.appendChild(newLi);
    });

    document.body.appendChild(ul);
    document.body.appendChild(btn);
}
