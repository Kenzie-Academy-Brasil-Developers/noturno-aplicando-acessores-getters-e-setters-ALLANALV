const container = document.querySelector('.employersCard');

const inputName = document.getElementById('name');
const inputDate = document.getElementById('birthDate');
const inputCPF = document.getElementById('cpf');
const inputPhone = document.getElementById('phone');
const inputCell = document.getElementById('cellphone');
const inputPIS = document.getElementById('pis')
const inputCheck = document.getElementById('studies');

const button = document.getElementById('btnSubmit');

class Usuario {
    constructor(nome, CPF, telefone, celular, PIS, estuda) {
        this.nome = nome;
        this.nascimento = inputDate.value;
        this.cpf = CPF;
        this.telefone = telefone;
        this.celular = celular;
        this.pis = PIS
        this.estuda = estuda
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
    div.classList.add('card')
    const { nome, nascimento, cpf, telefone, celular, pis, estuda } = user;

    createParagraph(div, `Nome do funcionário: ${nome}`);
    createParagraph(div, `Data de nascimento: ${nascimento}`);
    createParagraph(div, `CPF: ${cpf}`);
    createParagraph(div, `Numero do telefone: ${telefone}`);
    createParagraph(div, `Numero do celular: ${celular}`);
    createParagraph(div, `PIS: ${pis}`);
    createParagraph(div, estuda)

    container.appendChild(div)
}

function createParagraph(element, text) {
    const paragraph = document.createElement('p');
    paragraph.innerText = text;

    element.appendChild(paragraph)
}

function createUser() {
    const valores = [inputName.value, inputCPF.value, inputPhone.value, inputCell.value, inputPIS.value, inputCheck.checked]
    const user = new Usuario(...valores);

    return user
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    const user = createUser();
    console.log(user)
    card(user)
});
