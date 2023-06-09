import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';
import './App.css';

const INITIAL_EXPENCES = [
  { id: 1, title: 'Toilet paper', amount: 294.67, date: new Date(2021, 2, 28) },
  { id: 2, title: 'Car insurance', amount: 394.67, date: new Date(2022, 2, 29) },
  { id: 3, title: 'New desk (wooden)', amount: 394.67, date: new Date(2023, 2, 30) },
];

const App = () => {
  const [expenses, setExpenses] = useState(INITIAL_EXPENCES);

  const addExpenseHandler = (expense) => {
    setExpenses((previousExpences => {
      return [expense, ...previousExpences];
    }));
  };

  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses items={expenses} />
    </div>
  );
}

export default App;
