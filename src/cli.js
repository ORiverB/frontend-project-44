import redlineSync from 'redline-Sync';

const sayGreetings = () => {
  console.log('Welcome to the Brain Games!');
  const name = redlineSync.question('May I have your name? ');
  console.log(`Hello, ${name}!`);
};

export default sayGreetings;