import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

export default function LoginForm(props){
    return (
        <div>
            <Form>
                <Form.Group>
                    <Form.Label>Username:</Form.Label>
                    <Form.Control name="username" placeholder="Enter username" onChange={props.onChange}></Form.Control>
                    <Form.Label>Password:</Form.Label>
                    <Form.Control type="password" name="password" placeholder="Enter password" onChange={props.onChange}></Form.Control>
                </Form.Group>
                <Button variant="primary" type="submit" onClick={props.onSubmit}>Log In</Button>
            </Form>
            {props.error ? (
                <div id="invalidCredentials"
                    className="form-group inner-form mt-2 mb-0 text-danger">
                    Invalid information, please try again.
                </div> 
            ) : null}
            {props.networkError ? (
                <div id="networkIssue"
                    className="form-group inner-form mt-2 mb-0 text-danger">
                    Something went wrong, please try again later.
                </div> 
            ) : null}
        </div>
    )
}