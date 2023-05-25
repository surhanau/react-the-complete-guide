import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import ExpensesList from './ExpensesList';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const expensesFilterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log('Got the selected year from the ExpensesFilter component: ' + selectedYear);
    };

    const filteredExpenses = props.items.filter((expense) => {
        return expense.date.getFullYear().toString() === selectedYear;
    });

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onExpensesFilterChangeHandler={expensesFilterChangeHandler} />
                <ExpensesList items={filteredExpenses} />
            </Card>
        </div>
    );
}

export default Expenses;