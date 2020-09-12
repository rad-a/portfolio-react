import React, { Component } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import { IoIosSend } from "react-icons/io";
import emailjs from "emailjs-com";

import apiKeys from "../../Assets/apiKeys";
import "./style.css";

export class ContactForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      email: "",
      message: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  render() {
    return (
      <Form className="test-mailing">

        <Form.Group controlId="contactForm.subjectInput">
          <Form.Label className="formLabel">Subject:</Form.Label>
          <Form.Control
            as="select"
            name="subject"
            onChange={this.handleChange}
            value={this.state.subject}
          >
            <option value="0">Let's collaborate</option>
            <option value="1">Build me something amazing</option>
          </Form.Control>
        </Form.Group>

        <Form.Group controlId="contactForm.nameInput">
          <Form.Label className="formLabel">Name:</Form.Label>
          <Form.Control
            type="text"
            name="name"
            onChange={this.handleChange}
            value={this.state.name}
          />
        </Form.Group>

        <Form.Group controlId="contactForm.emailInput">
          <Form.Label className="formLabel">Email:</Form.Label>
          <Form.Control
            type="email"
            name="email"
            onChange={this.handleChange}
            value={this.state.email}
          />
        </Form.Group>

        <Form.Group controlId="contactForm.messageTextarea">
          <Form.Label className="formLabel">Message:</Form.Label>
          <Form.Control
            as="textarea"
            name="message"
            rows="6"
            onChange={this.handleChange}
            value={this.state.message}
          />
        </Form.Group>

        <Button className="submitBtn" name="name" type="submit" onChange={this.handleChange}>
          <IoIosSend />
          Submit
        </Button>
      </Form>
    );
  }

  handleChange = (event) => {
    this.setState({
      [event.target.name]: event.target.value,
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    emailjs
      .sendForm(
        "contact_me",
        apiKeys.TEMPLATE_ID,
        event.target,
        apiKeys.USER_ID
      )
      .then((result) => {
        console.log(result.text);
      })
      .catch();
  };
}

export default ContactForm;
