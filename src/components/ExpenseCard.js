import React from 'react';
import { Card } from 'react-bootstrap';
import { currencyFormatter } from '../utils';
import DeleteExpenseButton from './DeleteExpenseButton';

export default function ExpenseCard({ id, name, category, dateofexpense, amount, createdby }) {
  return (
    <Card style={{ marginBottom: '1rem' }}>
      <Card.Body style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
        <div>{name}</div>
        <div>{category}</div>
        <div>{dateofexpense}</div>
        <div>{currencyFormatter.format(amount)}</div>
        <div>{createdby}</div>
        <DeleteExpenseButton expenseId={id} />
      </Card.Body>
    </Card>
  );
}
