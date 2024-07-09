const form = document.getElementById('form');
const nome = document.getElementById('nome');
const email = document.getElementById('email');
const cpf = document.getElementById('cpf');

const sobrenome = document.getElementById('sobrenome');
const telefone = document.getElementById('telefone');
const cep = document.getElementById('cep');
const rua = document.getElementById('rua');
const numero = document.getElementById('numero');
const cidade = document.getElementById('cidade');
const uf = document.getElementById('uf');
const bairro = document.getElementById('bairro');

form.addEventListener('submit', (e) => {
    e.preventDefault();
    checkInputs();
});

function checkInputs() {
    const nomeValue = nome.value.trim();
    const emailValue = email.value.trim();
    const cpfValue = cpf.value.trim();

    const sobrenomeValue = sobrenome.value.trim();
    const telefoneValue = telefone.value.trim();
    const cepValue = cep.value.trim();
    const ruaValue = rua.value.trim();
    const numeroValue = numero.value.trim();
    const cidadeValue = cidade.value.trim();
    const ufValue = uf.value.trim();
    const bairroValue = bairro.value.trim();

    if (nomeValue === '') {
        setErrorFor(nome, 'Preencha esse campo');
    } else {
        setSuccessFor(nome);
    }

    if (emailValue === '') {
        setErrorFor(email, 'Preencha esse campo');
    } else if (!isEmail(emailValue)) {
        setErrorFor(email, 'Email inválido');
    } else {
        setSuccessFor(email);
    }

    if (cpfValue === '') {
        setErrorFor(cpf, 'Preencha esse campo');
    } else if (!validarCPF(cpfValue)) {
        setErrorFor(cpf, 'CPF inválido');
    } else {
        setSuccessFor(cpf);
    }

    if (telefoneValue === '') {
        setErrorFor(telefone, 'Preencha esse campo');
    } else {
        setSuccessFor(telefone);
    }
    if (cepValue === '') {
        setErrorFor(cep, 'Preencha esse campo');
    } else {
        setSuccessFor(cep);
    }
    if (ruaValue === '') {
        setErrorFor(rua, 'Preencha esse campo');
    } else {
        setSuccessFor(rua);
    }
    if (numeroValue === '') {
        setErrorFor(numero, 'Preencha esse campo');
    } else {
        setSuccessFor(numero);
    }
    if (cidadeValue === '') {
        setErrorFor(cidade, 'Preencha esse campo');
    } else {
        setSuccessFor(cidade);
    }
    if (ufValue === '') {
        setErrorFor(uf, 'Preencha esse campo');
    } else {
        setSuccessFor(uf);
    }
    if (bairroValue === '') {
        setErrorFor(bairro, 'Preencha esse campo');
    } else {
        setSuccessFor(bairro);
    }
    if (sobrenomeValue === '') {
        setErrorFor(sobrenome, 'Preencha esse campo');
    } else {
        setSuccessFor(sobrenome);
    }
}
function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]/g, ''); // Remove tudo que não é dígito

    if (cpf.length !== 11) return false; // Verifica se o CPF tem 11 dígitos

    let v1 = 0;
    let v2 = 0;

    // Validação do primeiro dígito verificador
    for (let i = 0; i < 9; i++) {
        v1 += parseInt(cpf.charAt(i)) * (10 - i);
        v2 += parseInt(cpf.charAt(i)) * (11 - i);
    }

    v1 = (v1 * 10) % 11;
    if (v1 === 10) v1 = 0;

    v2 += v1 * 2;
    v2 = (v2 * 10) % 11;
    if (v2 === 10) v2 = 0;

    // Verificação dos dígitos verificadores
    if (v1 !== parseInt(cpf.charAt(9)) || v2 !== parseInt(cpf.charAt(10))) {
        return false;
    }

    return true;
}

function setErrorFor(input, message) {
    const formControl = input.parentElement;
    const small = formControl.querySelector('small');

    small.innerText = message;
    formControl.className = 'form-control error';
}

function setSuccessFor(input) {
    const formControl = input.parentElement;
    formControl.className = 'form-control success';
}

function isEmail(email) {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}