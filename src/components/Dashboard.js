import React from 'react';
import { Card, ListGroup, Row, Col } from 'react-bootstrap';
import './Dashboard.css'

// Mock data for demonstration
const mockData = {
  balance: 1200,
  recentExpenses: [
    { id: 1, name: "Groceries", amount: 150 },
    { id: 2, name: "Utilities", amount: 75 },
    { id: 3, name: "Internet", amount: 50 },
  ],
  stats: {
    totalExpenses: 500,
    highestExpenseCategory: "Rent",
    budgetUtilization: "75%",
  }
};

const DashboardOverview = () => {
  return (
    <Row className="mt-4">
      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Current Balance</Card.Title>
            <Card.Text>
              ${mockData.balance.toFixed(2)}
            </Card.Text>
          </Card.Body>
        </Card>
      </Col>

      <Col md={4}>
        <Card>
          <Card.Header>Recent Expenses</Card.Header>
          <ListGroup variant="flush">
            {mockData.recentExpenses.map(expense => (
              <ListGroup.Item key={expense.id}>
                {expense.name}: ${expense.amount.toFixed(2)}
              </ListGroup.Item>
            ))}
          </ListGroup>
        </Card>
      </Col>

      <Col md={4}>
        <Card>
          <Card.Body>
            <Card.Title>Quick Stats</Card.Title>
            <Card.Text>Total Expenses: ${mockData.stats.totalExpenses.toFixed(2)}</Card.Text>
            <Card.Text>Highest Expense Category: {mockData.stats.highestExpenseCategory}</Card.Text>
            <Card.Text>Budget Utilization: {mockData.stats.budgetUtilization}</Card.Text>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default DashboardOverview;
