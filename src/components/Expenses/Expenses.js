import React, { useState } from 'react';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter'
import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
    const [selectedYear, setSelectedYear] = useState('2023');

    const expensesFilterChangeHandler = (selectedYear) => {
        setSelectedYear(selectedYear);
        console.log('Got the selected year from the ExpensesFilter component: ' + selectedYear);
    };

    return (
        <div>
            <Card className="expenses">
                <ExpensesFilter selected={selectedYear} onExpensesFilterChangeHandler={expensesFilterChangeHandler} />
                {props.items.map(item =>
                    <ExpenseItem
                        key={item.id}
                        title={item.title}
                        amount={item.amount}
                        date={item.date} />)}
            </Card>
        </div>
    );
}

export default Expenses;