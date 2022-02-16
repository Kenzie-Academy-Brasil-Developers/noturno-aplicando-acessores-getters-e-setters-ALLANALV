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
    constructor(nome, nascimento, CPF, telefone, celular, PIS, estuda) {
        this.nome = nome;
        this.nascimento = nascimento;
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
        const formatName = newName.split(' ');
        const fullName = []
        formatName.forEach((value) => {
            const firstLetter = value.slice(0, 1).toUpperCase();
            const rest = value.slice(1).toLowerCase();
            fullName.push(firstLetter + rest)
        });

        this._nome = fullName.join(' ')
    }

    get nascimento() {
        const format = this._nascimento.split('-');
        format.reverse()

        return format.join('/')
    }
    set nascimento(newValue) {
        this._nascimento = newValue
    }

    get cpf() {
        const format = this._cpf.split('');
        format.forEach((value, index) => {
            if (index === 3 || index === 7) {
                format.splice(index, 0, '.')
            }
        });
        format.forEach((value, index) => {
            if (index === 11) {
                format.splice(index, 0, '-')
            }
        })

        return format.join('')
    }
    set cpf(newCPF) {
        const format = newCPF.split('');
        const filterNumbers = format.filter((value) => value == Number(value));

        this._cpf = filterNumbers.join('')
    }

    get telefone() {
        const format = this._telefone.split('');
        format.unshift('(');
        format.forEach((value, index) => {
            if (index === 3) {
                format.splice(index, 0, ') ')
            }
            if (index === 8) {
                format.splice(index, 0, '-')
            }
        })

        return format.join('')
    }
    set telefone(NewPhone) {
        const format = NewPhone.split('');
        const filterNumbers = format.filter((value) => value == Number(value));

        this._telefone = filterNumbers.join('')
    }

    get celular() {
        const format = this._celular.split('');
        format.unshift('(');
        format.forEach((value, index) => {
            if (index === 3) {
                format.splice(index, 0, ') ')
            }
            if (index === 8) {
                format.splice(index, 0, '-')
            }
        });

        return format.join('')
    }
    set celular(newCell) {
        const format = newCell.split('');
        const filterNumbers = format.filter((value) => value == Number(value));

        this._celular = filterNumbers.join('')
    }

    get pis() {
        const format = this._pis.split('');
        format.forEach((value, index) => {
            if (index === 3 || index === 8) {
                format.splice(index, 0, '.')
            }
        });
        const last = format.length - 1
        format.splice(last, 0, '-')

        return format.join('')
    }
    set pis(newPIS) {
        const format = newPIS.split('');
        const filterNUmbers = format.filter((value) => value == Number(value));

        this._pis = filterNUmbers.join('')
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
    const valores = [inputName.value, inputDate.value, inputCPF.value, inputPhone.value, inputCell.value, inputPIS.value, inputCheck.checked]
    const user = new Usuario(...valores);

    return user
}

button.addEventListener('click', (event) => {
    event.preventDefault();

    const user = createUser();
    console.log(user)
    card(user)

    inputName.value = ''
    inputDate.value = ''
    inputCPF.value = ''
    inputPhone.value = ''
    inputCell.value = ''
    inputPIS.value = ''
    inputCheck.value = ''
});

