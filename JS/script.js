const Usuario = require("./user");

const main = document.querySelector('main');

const inputName = document.getElementById('name');
const inputDate = document.getElementById('birthDate');
const inputCPF = document.getElementById('cpf');
const inputPhone = document.getElementById('phone');
const inputCell = document.getElementById('cellphone');
const inputPIS = document.getElementById('pis')
const inputCheck = document.getElementById('studies');

const button = document.getElementById('btnSubmit');


const container = document.querySelector('.employersCard')
function card(user) {
    const div = document.createElement('div');
    div.classList.add('card')
    const { nome, nascimento, cpf, telefone, celular, pis, estuda } = user;

    const paragraphName = document.createElement('p');
    const paragraphbirth = document.createElement('p')
    const paragraphCPF = document.createElement('p');
    const paragraphPhone = document.createElement('p');
    const paragraphCell = document.createElement('p');
    const paragraphPIS = document.createElement('p')
    const spanStudent = document.createElement('span');

    paragraphName.innerText = `Nome do funcionário: ${nome}`;
    paragraphbirth.innerText = `Data de nascimento: ${nascimento}`
    paragraphCPF.innerText = `CPF: ${cpf}`;
    paragraphPhone.innerText = `Numero do telefone: ${telefone}`;
    paragraphCell.innerText = `Numero do celular: ${celular}`;
    paragraphPIS.innerText = `PIS: ${pis}`;
    spanStudent.innerText = estuda;

    div.appendChild(paragraphName);
    div.appendChild(paragraphbirth)
    div.appendChild(paragraphCPF);
    div.appendChild(paragraphPhone);
    div.appendChild(paragraphCell);
    div.appendChild(paragraphPIS)
    div.appendChild(spanStudent);

    container.appendChild(div)
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
