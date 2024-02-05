import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import './Hero.css'

const HeroSection = () => {
  // Function to determine the part of the day
  const getPartOfDay = () => {
    const hours = new Date().getHours();
    if (hours < 12) return 'Morning';
    if (hours < 18) return 'Afternoon';
    return 'Evening';
  };

  // Personalized greeting based on the time of day
  const greeting = `Good ${getPartOfDay()}, User!`;

  // Example function that would be called when "Add Expense" button is clicked
  const handleAddExpenseClick = () => {
    console.log("Redirecting to Add Expense Page...");
    // Implementation to redirect user to the add expense page or modal popup
  };

  return (
    <Container className="my-5 py-5 bg-light rounded shadow">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <h1>{greeting}</h1>
          <p className="mt-3">
            Welcome to your Expense Tracker. Manage your expenses effectively and achieve your financial goals with ease.
          </p>
          <Button variant="primary" size="lg" onClick={handleAddExpenseClick}>
            Quick Add Expense
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
