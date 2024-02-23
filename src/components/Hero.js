import React from 'react';
import { Button, Container, Row, Col } from 'react-bootstrap';
import { FaPiggyBank } from 'react-icons/fa'; // Importing an icon from react-icons
import './Hero.css';

const HeroSection = () => {
  const getPartOfDay = () => {
    const hours = new Date().getHours();
    return hours < 12 ? 'Morning' : hours < 18 ? 'Afternoon' : 'Evening';
  };

  const greeting = `Good ${getPartOfDay()}, User!`;

  const handleAddExpenseClick = () => {
    console.log("Redirecting to Add Expense Page...");
    // Implement redirection logic here
  };

  const handleLearnMoreClick = () => {
    console.log("Redirecting to Learn More Page...");
    // Implement redirection logic here
  };

  return (
    <Container className="hero-container my-5 py-5 bg-light rounded shadow">
      <Row className="justify-content-center">
        <Col md={8} className="text-center">
          <FaPiggyBank className="hero-icon mb-4" size="3em" />
          <h1>{greeting}</h1>
          <p className="mt-3">
            Welcome to your Expense Tracker. Manage your expenses effectively and achieve your financial goals with ease.
          </p>
          <p className="inspirational-quote">
            "The best time to start managing your finances was yesterday. The next best time is today."
          </p>
          <Button variant="primary" size="lg" onClick={handleAddExpenseClick} className="me-2">
            Quick Add Expense
          </Button>
          <Button variant="info" size="lg" onClick={handleLearnMoreClick}>
            Learn Financial Tips
          </Button>
        </Col>
      </Row>
    </Container>
  );
};

export default HeroSection;
