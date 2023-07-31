import React, { useState } from 'react';
import { Button, Container, Card } from 'react-bootstrap';
import ExpenseCard from './components/ExpenseCard';
import AddExpenseModel from './components/AddExpenseModel';
import { useExpenses } from './contexts/ExpenseContext';
import ExpenseSearch from './components/ExpenseSearch';
import './App.css'

export default function Main() {
  const [showAddExpenseModal, setShowAddExpenseModal] = useState(false);
  const { expenses } = useExpenses();
  const [searchText, setSearchText] = useState('');

  const handleAddExpense = () => {
    setShowAddExpenseModal(true);
  };

  const handleCloseModal = () => {
    setShowAddExpenseModal(false);
  };

  const handleSearch = (searchText) => {
    setSearchText(searchText);
  };

  const filteredExpenses = expenses.filter((expense) =>
    expense.name.toLowerCase().includes(searchText.toLowerCase())
  );

  return (
    <>
      <Container className="my-6">
        <div className="d-flex justify-content-between align-items-center m-3 ">
          <h1>MY EXPENSE MANAGER</h1>
          <ExpenseSearch onSearch={handleSearch} />
          <Button variant="primary" onClick={handleAddExpense}>
            + New Expense
          </Button>
        </div>
        <Card style={{ marginBottom: '1rem' }} className='card-heading'>
          <Card.Body style={{ display: 'flex', gap: '8rem', alignItems: 'center' }}>
            <div><h6>Name</h6></div>
            <div><h6>Category</h6></div>
            <div><h6>Date of Expense</h6></div>
            <div><h6>Amount</h6></div>
            <div><h6>Created By</h6></div>
            <div></div>
          </Card.Body>
        </Card>
        {filteredExpenses.map((expense) => (
          <ExpenseCard
            key={expense.id}
            id={expense.id}
            name={expense.name}
            category={expense.category}
            dateofexpense={expense.dateofexpense}
            amount={expense.amount}
            createdby={expense.createdby}
          />
        ))}
      </Container>
      <AddExpenseModel show={showAddExpenseModal} handleClose={handleCloseModal} />
    </>
  );
}
