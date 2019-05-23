// SO THIS IS WHERE EVERYTHING IS 'IMPORTED' TO....

import React, { Component } from "react";
import { Input, TextArea, FormBtn } from "../Components/Form";
import API from "../utils/api";
import Form from "react-bootstrap/Form";
import Col from "react-bootstrap/Col";
import teachers from "../Components/Form/TeacherDropdown/teachers.json";
import TeacherDropdown from "../Components/Form/TeacherDropdown/teacherSelect";
import "./contact.css";

class ContactPage extends React.Component {
  state = {
    teachers: teachers
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleMessagePost = event => {
    const userMessage = this.state;
    console.log(userMessage);

    API.saveMessage({
      firstName: userMessage.firstName,
      lastName: userMessage.lastName,
      message: userMessage.message,
      dateCreated: Date.now()
    });
  };

  componentDidMount() {}

  render() {
    return (
      <div className="message-container" id="formHolder">
        <br />
        <h1>Reach Out To Us!</h1>
        <br />
        <Form>
          <Form.Group>
            <Form.Label>Who are you looking for?</Form.Label>
            <Form.Control
              as="select"
              name="teacher"
              value={this.state.value}
              onChange={this.handleInputChange}
            >
              <option>select a teacher...</option>

              {this.state.teachers.map(teacher => (
                <TeacherDropdown key={teacher.id} name={teacher.name} />
              ))}
            </Form.Control>
          </Form.Group>

          <Form.Group>
            <Form.Label>Who is leaving the message?</Form.Label>
            <Form.Row>
              <Col>
                <Input
                  name="firstName"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  placeholder="First Name"
                />
              </Col>
              <Col>
                <Input
                  name="lastName"
                  value={this.state.value}
                  onChange={this.handleInputChange}
                  placeholder="Last Name"
                />
              </Col>
            </Form.Row>
          </Form.Group>

          <Form.Group>
            <Form.Label>Write your message below</Form.Label>
            <TextArea
              value={this.state.value}
              onChange={this.handleInputChange}
              name="message"
            />
          </Form.Group>

          <FormBtn onClick={save => this.handleMessagePost(save)}>
            SUBMIT
          </FormBtn>
        </Form>
      </div>
    );
  }
}

export default ContactPage;
