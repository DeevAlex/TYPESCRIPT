// Type assertions

// condicional - Recomendado
const body = document.querySelector('body');
// refinamento de tipo
if (body) body.style.backgroundColor = '#wvar'; // se voce acha que ele pode estar no documento use esse

// ! - non-null, não pode ser nulo - Não Recomendado
// const body2 = document.querySelector('body')!;
// body2.style.backgroundColor = '#wvar';

// type assertion - Recomendado
const body3 = document.querySelector('body') as HTMLBodyElement; // só vai fazer isso se tiver certeza
body3.style.backgroundColor = '#wvar';

// HTMLElement - Recomendado
const input = document.querySelector('.input') as HTMLInputElement;
input.value = 'awrvaw';
input.focus();

// type assertion - Não Recomendado
// const body4 = document.querySelector('body') as number; // o typescript não aceita diferentes valores apenas do mesmo tipo que nesse caso é o HTML
// body4.style.backgroundColor = '#wvar'; // que é subtipos

// type assertion - Não Recomendado
// const body5 = (document.querySelector('body') as unknown) as number; // para arrumar coloque unknown e o tipo porém a estilização não ficará disponivel
// body5.style.backgroundColor = '#wvar';
