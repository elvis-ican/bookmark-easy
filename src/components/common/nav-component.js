import Button from "react-bootstrap/Button";
import Nav from "react-bootstrap/Nav";
// import { Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export default function NavComponent() {
  return (
    <Nav>
        <Button variant="primary">Bookmark-Easy</Button>
        <Nav.Item>
            <Nav.Link as={Link} to="/bookmarks">Bookmarks</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/explore">Explore</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/community">Community</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/update">Update</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/register">Register</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/login">Login</Nav.Link>
        </Nav.Item>
        <Nav.Item>
            <Nav.Link as={Link} to="/logout">Logout</Nav.Link>
        </Nav.Item>
    </Nav>
  );
}
