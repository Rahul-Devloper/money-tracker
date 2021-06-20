import React from 'react'
import '../components/ExpenseDate.css'
const ExpenseDate = (props) => {

const month = props.date.toLocaleString('en-US',{month: 'long'});
const year = props.date.toLocaleString('en-US',{day: '2-digit'});
const date = props.date.getFullYear();



    return (
        <div className = "expense_date">
            <div className = "expense_date_month">{month}</div>
            <div className = "expense_date_year">{year}</div>
            <div className = "expense_date_day">{date}</div>
        </div>
    )
}

export default ExpenseDate;
