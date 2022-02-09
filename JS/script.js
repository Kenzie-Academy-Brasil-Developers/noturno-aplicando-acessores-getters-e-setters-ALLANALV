const main = document.querySelector('main');

const inputName = document.getElementById('name');
const inputDate = document.getElementById('birthDate');
const inputCPF = document.getElementById('cpf');
const inputPhone = document.getElementById('phone');
const inputCell = document.getElementById('cellphone');
const inputPIS = document.getElementById('pis')
const inputCheck = document.getElementById('studies');

const button = document.getElementById('btnSubmit');

class Usuario {
    constructor(nome, nascimento, CPF, telefone, celular, PIS, estuda) {
        this._nome = nome;
        this.nascimento = nascimento;
        this._cpf = CPF;
        this._telefone = telefone;
        this._celular = celular;
        this._PIS = PIS
        this._estuda = estuda
    }

    get nome() {
        return this._nome
    }
    set nome(newName) {
        const arrName = newName.split(' ');
        const fullName = []
        arrName.forEach((value) => {
            const firstLetter = value.slice(0, 1).toUpperCase();
            const rest = value.slice(1).toLowerCase();
            fullName.push(firstLetter + rest)
        });
        this._nome = fullName.join(' ')
    }

    get cpf() {
        return inputCPF.value
    }
    set cpf(newCPF) {
        const arr = newCPF.split('');
        const filterNumbers = arr.filter((value) => value == Number(value));

        this._cpf = filterNumbers.join('')
    }

    get telefone() {
        return inputPhone.value
    }
    set telefone(NewPhone) {
        const arr = NewPhone.split('');
        const filterNumbers = arr.filter((value) => value == Number(value));

        this._telefone = filterNumbers.join('')
    }

    get celular() {
        return inputCell.value
    }
    set celular(newCell) {
        const arr = newCell.split('');
        const filterNumbers = arr.filter((value) => value == Number(value));

        this._celular = filterNumbers.join('')
    }

    get pis() {
        return inputPIS.value
    }
    set pis(newPIS) {
        const arr = newPIS.split('');
        const filterNUmbers = arr.filter((value) => value == Number(value));

        this._PIS = filterNUmbers.join('')
    }

    get estuda() {
        if (this._estuda === true) {
            return 'É estudante'
        } else {
            return 'não é estudante'
        }
    }
    set estuda(check) {
        this._estuda = check
    }
}


function card(user) {
    const div = document.createElement('div');
    const { nome, nascimento, cpf, telefone, celular, pis, estuda } = user;

    const paragraphName = document.createElement('p');
    const paragraphbirth = document.createElement('p')
    const paragraphCPF = document.createElement('p');
    const paragraphPhone = document.createElement('p');
    const paragraphCell = document.createElement('p');
    const paragraphPIS = document.createElement('p')
    const spanStudent = document.createElement('span');

    paragraphName.innerText = nome;
    paragraphbirth.innerText = nascimento
    paragraphCPF.innerText = cpf;
    paragraphPhone.innerText = telefone;
    paragraphCell.innerText = celular;
    paragraphPIS.innerText = pis;
    spanStudent.innerText = estuda;

    div.appendChild(paragraphName);
    div.appendChild(paragraphbirth)
    div.appendChild(paragraphCPF);
    div.appendChild(paragraphPhone);
    div.appendChild(paragraphCell);
    div.appendChild(paragraphPIS)
    div.appendChild(spanStudent);

    main.appendChild(div)
}

function createUser() {
    const user = new Usuario(null, inputDate.value, null, null, null, null, null);

    user.nome = inputName.value
    user.cpf = inputCPF.value
    user.telefone = inputPhone.value
    user.celular = inputCell.value
    user.pis = inputPIS.value
    user.estuda = inputCheck.checked

    return user
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    const user = createUser();
    console.log(user)
    card(user)
});
