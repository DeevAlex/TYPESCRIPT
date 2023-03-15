// O Structural type system do TypeScript

type VerifyUser = (user: User, recivedValues: User) => boolean;
type User = {
  username: string; // Structural type system linka com o de baixo e não precisa colocar o tipo novamente na outra variavel
  password: string;
};

const verifyUser: VerifyUser = (user, recivedValues) => {
  return (
    user.username === recivedValues.username &&
    user.password === recivedValues.password
  );
};

const bdUser = {
  // Structural type system linka com aquele de cima
  username: 'Alex',
  password: '12345678',
};

const sentUser = {
  // Structural type system linka com aquele de cima
  username: 'Alex',
  password: '123456789',
};

const loggedIn = verifyUser(bdUser, sentUser);

console.log(loggedIn);
