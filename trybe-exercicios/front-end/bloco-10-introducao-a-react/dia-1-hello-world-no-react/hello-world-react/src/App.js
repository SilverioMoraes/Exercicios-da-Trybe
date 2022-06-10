import Tarefas from 'react';

const Task = (value) => {
  return (
    <li key={value}>{value}</li>
  );
}

const tarefas = ['Limpar o quintal', 'Dar banho nos cachorros', 'Lavar a moto', 'Ir ao mercado']

class App extends Tarefas.Component {
  render() {
    return (<>
    <ul>{ tarefas.map(tarefa => Task(tarefa)) }</ul>
    </>);
  }
}

export default App;
