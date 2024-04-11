import React from "react";
import Card from "react-bootstrap/Card";
import CardGroup from "react-bootstrap/CardGroup";
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
function B1() {
  return (
    <CardGroup>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://livevox.com/wp-content/uploads/2019/11/How-to-Measure-the-Effectiveness-of-Your-Call-Center-Ticket-System-Blog.png"
          style={{ width: '100%', height: '50vh' }}/>
        <Card.Body>
          <Card.Title>Support Services</Card.Title>
          <Card.Text>want experts for your problems</Card.Text>
          <Card.Link href="https://customer-tss.vercel.app/">Fill the form</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRvk9gAxELV3p1tHXiGjVZJtHACQkYn-cHrMw&usqp=CAU"
          style={{ width: '100%', height: '50vh' }}/>
        <Card.Body>
          <Card.Title>Register as a Servicemen</Card.Title>
          <Card.Text>want a common platform for potential clients</Card.Text>
          <Card.Link href="https://servicemen-tss.vercel.app/">Fill the form</Card.Link>
        </Card.Body>
      </Card>
      <Card style={{ width: "18rem" }}>
        <Card.Img
          variant="top"
          src="https://d1csarkz8obe9u.cloudfront.net/posterpreviews/grey-and-red-emergency-services-logo-icon-tem-design-template-47ee933f723ba897e03d3dd911abe02e_screen.jpg?ts=1655219677"
          style={{ width: '100%', height: '50vh' }}/>
        <Card.Body>
          <Card.Title>Emergency Services</Card.Title>
          <Card.Text>want a csolution asap</Card.Text>
          <Card.Link href="https://servicemenlist-tss.vercel.app/">reach out to servicemens</Card.Link>
        </Card.Body>
      </Card>
    </CardGroup>
  );
}
const Book = () => {
  return (
    <>
      <B1 />
    </>
  );
};
export default Book;
