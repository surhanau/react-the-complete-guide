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
                <ExpenseItem title={props.items[0].title} amount={props.items[0].amount} date={props.items[0].date} />
                <ExpenseItem title={props.items[1].title} amount={props.items[1].amount} date={props.items[1].date} />
                <ExpenseItem title={props.items[2].title} amount={props.items[2].amount} date={props.items[2].date} />
            </Card>
        </div>
    );
}

export default Expenses;