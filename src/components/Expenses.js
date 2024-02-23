import React, { useState, useEffect } from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, Row, Col, ListGroup, Alert } from 'react-bootstrap';
import { FaUtensils, FaShoppingCart, FaCar, FaHouseUser } from 'react-icons/fa';

// Register Chart.js components
Chart.register(ArcElement, Tooltip, Legend);

// Mock data for the pie chart and categories
const data = {
  labels: ['Groceries', 'Utilities', 'Transport', 'Rent'],
  datasets: [
    {
      label: 'Expenses',
      data: [300, 150, 100, 500],
      backgroundColor: [
        'rgba(255, 99, 132, 0.2)',
        'rgba(54, 162, 235, 0.2)',
        'rgba(255, 206, 86, 0.2)',
        'rgba(75, 192, 192, 0.2)',
      ],
      borderColor: [
        'rgba(255, 99, 132, 1)',
        'rgba(54, 162, 235, 1)',
        'rgba(255, 206, 86, 1)',
        'rgba(75, 192, 192, 1)',
      ],
      borderWidth: 1,
    },
  ],
};

const ExpenseSummary = () => {
  const [splitwiseSummary, setSplitwiseSummary] = useState({ totalOwed: 0, debts: [] });

  useEffect(() => {
    // Placeholder for fetching data from your backend, which in turn calls Splitwise's API
    const fetchSplitwiseData = async () => {
      try {
        const response = await fetch('/api/splitwise-summary'); // Your backend endpoint
        const data = await response.json();
        setSplitwiseSummary(data);
      } catch (error) {
        console.error('Error fetching Splitwise data:', error);
        // Handle error
      }
    };

    fetchSplitwiseData();
  }, []);

  return (
    <Row className="expense-summary-row">
      <Col md={6}>
        <Card className="expense-summary-card">
          <Card.Body>
            <Card.Title>Expense Breakdown</Card.Title>
            <Pie data={data} />
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="category-list-card">
          <Card.Body>
            <Card.Title>Splitwise Summary</Card.Title>
            <Alert variant="info">
              Total Owed: ${splitwiseSummary.totalOwed}
            </Alert>
            <ListGroup>
              {splitwiseSummary.debts.map(debt => (
                <ListGroup.Item key={debt.toWhom}>
                  You owe {debt.toWhom}: ${debt.amount}
                </ListGroup.Item>
              ))}
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
      <Col md={6}>
        <Card className="category-list-card">
          <Card.Body>
            <Card.Title>Categories</Card.Title>
            <ListGroup>
              <ListGroup.Item><FaShoppingCart /> Groceries</ListGroup.Item>
              <ListGroup.Item><FaUtensils /> Utilities</ListGroup.Item>
              <ListGroup.Item><FaCar /> Transport</ListGroup.Item>
              <ListGroup.Item><FaHouseUser /> Rent</ListGroup.Item>
            </ListGroup>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  );
};

export default ExpenseSummary;
