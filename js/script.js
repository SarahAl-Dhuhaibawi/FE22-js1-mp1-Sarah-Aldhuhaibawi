for (let i = 1; i < 6; i++) {
    const h3 = document.createElement('h3');
    h3.innerText = 'Rad' + i;
    document.body.appendChild(h3);
    h3.style.backgroundColor = `hsl(${255 + i * 30}, 90%, 70%)`;
    h3.style.color = 'blue';
    h3.style.textAlign = 'center';
    h3.style.fontSize = `${8 + i * 8}px`;
}

const div = document.createElement('div');
document.body.appendChild(div);
div.style.display = 'flex';
div.style.justifyContent = 'space-around';
div.style.border = '2px solid black';


const ul1 = document.createElement('ul');
div.appendChild(ul1);
const ul2 = document.createElement('ul');
div.appendChild(ul2);
const ul3 = document.createElement('ul');
div.appendChild(ul3);


for (let i = 0; i < 10; i++) {
    const li1 = document.createElement('li');
    ul1.appendChild(li1);
    li1.innerText = + i;

    ul1.style.width = '50px';
    ul1.style.backgroundColor = '#a8a8f0';
    ul1.style.padding = '10px';
    ul1.style.textAlign = 'left';
    ul1.style.listStyleType = 'none';


    if (i % 2 == 0) {
        li1.style.color = 'white';
        li1.style.background = 'black';

    }

    else {
        li1.style.background = 'white'
    }

    if (i == 4) {
        li1.style.background = "none"
    }
}


for (let i = 9; i >= 0; i--) {
    const li2 = document.createElement('li');
    ul2.appendChild(li2);
    li2.innerText = i;

    ul2.style.width = '50px';
    ul2.style.backgroundColor = '#a8a8f0';
    ul2.style.padding = '10px';
    ul2.style.textAlign = 'center';
    ul2.style.listStyleType = 'none';


    if (i % 2 == 0) {
        li2.style.color = 'white';
        li2.style.background = 'black';

    }

    else {
        li2.style.background = 'white';
    }

    if (i == 8) {
        li2.style.background = "none"
    }
}

const numbers = ['ett', 'två', 'tre', 'fyra', 'fem', 'sex', 'sju', 'åtta', 'nio', 'tio'];
console.log(numbers);


for (let i = 0; i < numbers.length; i++) {
    const li3 = document.createElement('li');
    ul3.appendChild(li3);
    li3.innerText = numbers[i];

    ul3.style.width = '50px';
    ul3.style.backgroundColor = '#a8a8f0';
    ul3.style.padding = '10px';
    ul3.style.textAlign = 'right';
    ul3.style.listStyleType = 'none';

    if (i % 2 == 0) {
        li3.style.color = 'white';
        li3.style.background = 'black';

    }

    else {
        li3.style.background = 'white';

    }

    if (i == 5) {
        li3.style.background = "none"
    }
}