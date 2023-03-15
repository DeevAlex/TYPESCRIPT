// type alias
type Age = number; // por convenção a primeira letra começa em maiuscula
type Pearson = {
  fistname: string;
  lastname: string;
  age: Age;
  salary: number;
  FavoriteColor?: string;
};

type CorRGB = 'Vermelho' | 'Verde' | 'Azul';
type corCMYK = 'Ciano' | 'Magenta' | 'Amarelo' | 'Preto';
type FavoriteColor = CorRGB | corCMYK;

export const pearson: Pearson = {
  fistname: 'Alex',
  lastname: 'Josévaldo',
  age: 18,
  salary: 0.0_0,
};

export function setFavoriteColor(
  pearson: Pearson,
  color: FavoriteColor,
): Pearson {
  return { ...pearson, FavoriteColor: color };
}

console.log(setFavoriteColor(pearson, 'Preto'));
console.log();
