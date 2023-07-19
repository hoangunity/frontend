/* eslint-disable react/prop-types */
import { useState } from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

const RegisterForm = ({ formFieldSpacing }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [role, setRole] = useState("");
  const [fullName, setFullName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleRegister = (e) => {
    e.preventDefault();
    // Handle registration logic here
    // You can make an API call to register the user or perform any other necessary actions
    console.log("new user: ", {
      username,
      password,
      email,
      role,
      fullName,
      phoneNumber,
    });
    console.log("Registering user...");
  };

  return (
    <Form onSubmit={handleRegister}>
      <Form.Group controlId="formUsername">
        <Form.Label>Username</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter username"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formPassword" className={`${formFieldSpacing}`}>
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Enter password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          pattern=".{6,}" // Minimum of 6 characters
          title="Password must be at least 6 characters long"
          required
        />
      </Form.Group>

      <Form.Group controlId="formFullName" className={`${formFieldSpacing}`}>
        <Form.Label>Full Name</Form.Label>
        <Form.Control
          type="text"
          placeholder="Enter full name"
          value={fullName}
          onChange={(e) => setFullName(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formEmail" className={`${formFieldSpacing}`}>
        <Form.Label>Email</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
      </Form.Group>

      <Form.Group controlId="formRole" className={`${formFieldSpacing}`}>
        <Form.Label>Role</Form.Label>
        <Form.Control
          as="select"
          value={role}
          onChange={(e) => setRole(e.target.value)}
          required
        >
          <option value="">Select role</option>
          <option value="member">Member</option>
          <option value="trainer">Trainer</option>
          <option value="manager">Manager</option>
        </Form.Control>
      </Form.Group>

      <Form.Group controlId="formPhoneNumber" className={`${formFieldSpacing}`}>
        <Form.Label>Phone Number</Form.Label>
        <Form.Control
          type="tel"
          placeholder="Enter phone number"
          value={phoneNumber}
          onChange={(e) => setPhoneNumber(e.target.value)}
          pattern="^(0[1-9]|84[1-9])(\d{8}|\d{9})$"
          required
        />
        <Form.Text muted>
          Phone number format: 0XXXXXXXXX or 84XXXXXXXXX
        </Form.Text>
      </Form.Group>

      <Button
        variant="primary"
        type="submit"
        className={`${formFieldSpacing}`}
        style={{ width: "100%" }}
      >
        Register
      </Button>
    </Form>
  );
};

export default RegisterForm;
