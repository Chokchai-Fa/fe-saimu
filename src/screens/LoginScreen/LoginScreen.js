import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Image from 'react-bootstrap/Image';

import './index.css'
import logo from '../../assets/logo.png'
import { useState } from 'react';

const LoginScreen = () =>{

  const  [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(email, password)
  };

    return (
        <div className='container' >
          <div className='inner-container'>
           <div className='header'>
            <Image className= "logo" src = {logo} />
           <h1>SaiMU</h1>
          </div>
          <div>
        <Form>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control 
            type="email" 
            placeholder="Enter email" 
            value = {email}
            onChange={handleEmailChange}  
          />
          <Form.Text className="text-muted">
            We'll never share your email with anyone else.
          </Form.Text>
        </Form.Group>
  
        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control 
            type="password" 
            placeholder="Password" 
            value = {password}
            onChange={handlePasswordChange}  
          />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicCheckbox">
          <Form.Check type="checkbox" label="Check me for Good Fortune" />
        </Form.Group>
        <Button 
          variant="danger" 
          type="submit"
          onClick={handleSubmit}  
        >
          Login
        </Button>
      </Form>
      </div>

      </div>
      </div>
    )

}


const style = {
    
}

export default LoginScreen;