console.log('OK JS');

const setBtn = document.querySelector('#set-dim');
const body = document.querySelector('.body')
const dimensionLevel = document.getElementById('dimensions')

setBtn.addEventListener('click', () => {
    body.innerHTML = '';

    const n_bomb = parseInt(prompt('inserisci numero di bombe'))
    const container = document.createElement('div')
    container.classList.add ('container')

    body.append(container)

    const grid_dim = dimensionLevel.value;
    let cellsNumber
    let cellPerSide

    switch (grid_dim) {
        case '3':
            cellsNumber = 100;
            cellPerSide = 10;
            break;
        
        case '2':
            cellsNumber = 81;
            cellPerSide = 9;
            break;

        case '1':
            cellsNumber = 49;
            cellPerSide = 7;
            break;
    }

    let bombs = [];

    while (bombs.length < n_bomb) {
        let new_bomb = Math.floor((Math.random() * cellsNumber) + 1);
        if (bombs.includes(new_bomb) === false) {
            bombs.push(new_bomb);
        }
    }

    console.log(bombs);

    for (let i = 1; i <= cellsNumber; i++) {
        const square = createGridSquare(i, cellPerSide);
        container.append(square);

        square.addEventListener('click', function() {
        this.classList.add('active');
        if (this.classList.contains("bomb")){
            const node_2 = document.createElement('h2');
            node_2.append('HAI PERSO')
            body.append (node_2)
        }});
    }

    function createGridSquare(num, cells) {
        // pari o dispari
        const type = (num % 2 === 0) ? 'even' : 'odd';

        // creiamo nodo .square
        const node = document.createElement('div');
        node.classList.add('square', `square-${type}`);
        node.style.width = `calc( 100% / ${cells})`;
        node.style.height = `calc(100% / ${cells})`;

        if (bombs.includes(num)) {
            node.classList.add('bomb');
        }

        //nodo span per il testo
        const span = document.createElement('span');
        span.append(num);
        node.append(span);

        return node;
    }
});