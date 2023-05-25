import React, { useState } from "react";
import './ExpenseForm.css';

const ExpenseForm = (props) => {
    const [userInput, setUserInput] = useState({
        title: '',
        amount: '',
        date: '',
    });

    const [visible, setVisibility] = useState(props.visible);

    const titleChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, title: event.target.value };
        });
    };

    const amountChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, amount: event.target.value };
        });
    };

    const dateChangeHandler = (event) => {
        setUserInput((previousState) => {
            return { ...previousState, date: event.target.value };
        });
    };

    const saveChangesHandler = (event) => {
        event.preventDefault();
        const expenseData = {
            title: userInput.title,
            amount: userInput.amount,
            date: new Date(userInput.date),
        };
        props.onSaveExpenseData(expenseData);
        setUserInput(() => {
            return {
                title: '',
                amount: '',
                date: '',
            };
        });
        setVisibility(false);
    };

    const onCancelClick = () => {
        setVisibility(false);
    };

    const addNewExpenseClickHandler = () => {
        setVisibility(true);
    };

    if (visible) {
        return (
            <form onSubmit={saveChangesHandler}>
                <div className="new-expense__controls">
                    <div className="new-expense__control">
                        <label>Title</label>
                        <input type="text" value={userInput.title} onChange={titleChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Amount</label>
                        <input type="number" min="0.01" step="0.01" value={userInput.amount} onChange={amountChangeHandler} />
                    </div>
                    <div className="new-expense__control">
                        <label>Date</label>
                        <input type="date" min="2023-01-01" max="2023-12-31" value={userInput.date} onChange={dateChangeHandler} />
                    </div>
                </div>
                <div className="new-expense__actions">
                    <button onClick={onCancelClick}>Cancel</button>
                    <button type="submit">Add Expense</button>
                </div>
            </form>
        );
    } else {
        return (
            <button onClick={addNewExpenseClickHandler}>Add New Expense</button>
        );
    }
};

export default ExpenseForm;