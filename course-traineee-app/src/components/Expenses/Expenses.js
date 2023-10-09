import React, { useState } from "react";

import ExpenseItem from "./ExpenseItem";
import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";

const Expenses = (props) => {
  const [year, setYear] = useState("");
  const onSelectYearHandler = (selectedYear) => {
    setYear(selectedYear);
    console.log(selectedYear);
  };
  return (
    <div>
      <ExpensesFilter onSelectYear={onSelectYearHandler} />
      <Card className="expenses">
        {props.items.map((expense) => (
          <ExpenseItem
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))}
      </Card>
    </div>
  );
};

export default Expenses;
