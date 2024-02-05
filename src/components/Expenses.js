import React from 'react';
import { Pie } from 'react-chartjs-2';
import { Chart, ArcElement, Tooltip, Legend } from 'chart.js';
import { Card, Row, Col, ListGroup } from 'react-bootstrap';
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
