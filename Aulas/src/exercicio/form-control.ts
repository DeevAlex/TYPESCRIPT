import validator from 'validator';

const SHOW_ERROR_MESSAGES = 'show-error-message';

const form = document.querySelector('.form') as HTMLInputElement;
const usuario = document.querySelector('.usuario') as HTMLInputElement;
const email = document.querySelector('.email') as HTMLInputElement;
const senha = document.querySelector('.senha') as HTMLInputElement;
const rsenha = document.querySelector('.rsenha') as HTMLInputElement;

form.addEventListener('submit', function (e: Event) {
  e.preventDefault();
  hideErrorMessage(this);
  checkForEmptyFields(usuario, email, senha, rsenha);
  checkEmail(email);
  checkEqualSenhas(senha, rsenha);
  if (shouldSendForm(this)) console.log('Enviado');
});

function checkForEmptyFields(...inputs: HTMLInputElement[]): void {
  inputs.forEach((input) => {
    if (!input.value)
      showErrorMessage(input, 'Este Campo não pode ficar vazio');
  });
}

function checkEmail(input: HTMLInputElement): void {
  if (!validator.isEmail(email.value))
    showErrorMessage(input, 'Email Inválido');
}

function checkEqualSenhas(
  senha: HTMLInputElement,
  rsenha: HTMLInputElement,
): void {
  if (senha.value !== rsenha.value) {
    showErrorMessage(senha, 'As senhas devem ser iguais');
    showErrorMessage(rsenha, 'As senhas devem ser iguais');
  }
}

function hideErrorMessage(form: HTMLInputElement): void {
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach((item) => item.classList.remove(SHOW_ERROR_MESSAGES));
}

function showErrorMessage(input: HTMLInputElement, msg: string): void {
  const formFields = input.parentElement as HTMLDivElement;
  const errorMessage = formFields.querySelector(
    '.error-message',
  ) as HTMLSpanElement;
  errorMessage.innerText = msg;
  formFields.classList.add(SHOW_ERROR_MESSAGES);
}

function shouldSendForm(form: HTMLInputElement): boolean {
  let send = true;
  form
    .querySelectorAll('.' + SHOW_ERROR_MESSAGES)
    .forEach(() => (send = false));
  return send;
}
