import readlineSync from 'readline-sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = readlineSync.question('May i have your name? ');
  console.log(`hello, ${name}!`);
};

export default sayGreetings;
