import Expenses from './components/Expenses';
import './App.css';

function App() {
  const expenses = [
    { id: 1, title: 'Toilet paper', amount: 294.67, date: new Date(2021, 2, 28) },
    { id: 2, title: 'Car insurance', amount: 394.67, date: new Date(2021, 2, 29) },
    { id: 3, title: 'New desk (wooden)', amount: 394.67, date: new Date(2021, 2, 30) },
  ];
  return (
    <div>
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
