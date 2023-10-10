import React, { useState } from "react";

import Card from "../UI/Card";
import "./Expenses.css";
import ExpensesFilter from "./ExpensesFilter";
import ExpenesList from "./ExpensesList";
import ExpensesChart from "./ExpensesChart";

const Expenses = (props) => {
  const [year, setYear] = useState("2021");

  const onSelectYearHandler = (selectedYear) => {
    setYear(selectedYear);
  };
  const filteredExpenses = props.items.filter((expense) => {
    const expenseYear = new Date(expense.date).getFullYear();
    return expenseYear.toString() === year;
  });

  return (
    <div>
      <Card className="expenses">
        <ExpensesFilter defaultYear={year} onSelectYear={onSelectYearHandler} />
        <ExpensesChart expenses={filteredExpenses} />
        <ExpenesList items={filteredExpenses} />
      </Card>
    </div>
  );
};

export default Expenses;
