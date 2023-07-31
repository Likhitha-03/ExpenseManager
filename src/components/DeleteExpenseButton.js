import React from 'react';
import { Button } from 'react-bootstrap';
import { useExpenses } from '../contexts/ExpenseContext';

export default function DeleteExpenseButton({ expenseId }) {
  const { deleteExpense } = useExpenses();

  const handleDelete = () => {
    const confirmDelete = window.confirm("Are you sure you want to delete this expense?");
    if (confirmDelete) {
      deleteExpense(expenseId);
    }
  };

  return (
    <Button variant="outline-primary" onClick={handleDelete}>
      Delete Expense
    </Button>
  );
}
