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

module.exports = Usuario;