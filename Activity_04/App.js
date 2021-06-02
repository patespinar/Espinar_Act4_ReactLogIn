import './App.css';
import { Form, FormGroup, Label, Input, Button }
    from 'reactstrap';
import { FacebookLoginButton } from 'react-social-login-buttons';
import { GithubLoginButton } from 'react-social-login-buttons';

function App() {
  return (
    <Form className="Coffee-form">
    <h1>
      <span className="font-weight-bold" className="coffee">My Coffee Shop</span>
    </h1>
    <h2 className="text-center">Welcome</h2>
      <FormGroup>
        <Label>Email</Label>
        <Input type="email" placeholder="Email"/>
      </FormGroup>

      <FormGroup>
        <Label>Password</Label>
        <Input type="password" placeholder="Password"/>
      </FormGroup>

      <div className="center">
      <Button className="btn-lg btn-dark btn-block">
        Log in
      </Button>
      </div>

        <div className="tcenter"> 
        Or continue your social account 
        </div> 

        <div className="fcenter"> 
        <FacebookLoginButton className="mt-3 mb-3"/>

        <div className="gcenter">
           <GithubLoginButton className="mt-3 mb-3"/>  

         <div className="scenter">
          <a href="/sign-up">Sign up</a>
          <span className="p-2">|</span>
          <a href="/sign-up">Forgot Password</a>
           </div>
          </div>
        </div>
    </Form>
  );
}

export default App;
