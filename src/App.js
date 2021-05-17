import {
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
  Navbar,
  Nav,
  NavDropdown,
  FormControl,
} from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Navbar.Brand href="#home">React-Bootstrap</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="mr-auto">
            <Nav.Link href="#home">Home</Nav.Link>
            <Nav.Link href="#link">Link</Nav.Link>
            <NavDropdown title="Dropdown" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">
                Another action
              </NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.4">
                Separated link
              </NavDropdown.Item>
            </NavDropdown>
          </Nav>
          <Form inline>
            <FormControl type="text" placeholder="Search" className="mr-sm-2" />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
      </Navbar>
      <Breadcrumb>
        <Breadcrumb.Item>Home1</Breadcrumb.Item>
        <Breadcrumb.Item>Home2</Breadcrumb.Item>
        <Breadcrumb.Item>Home3</Breadcrumb.Item>
      </Breadcrumb>
      <Row>
        <Col>
          <Form>
            <Form.Group controlId="formEmail">
              <Form.Label>Email address</Form.Label>
              <Form.Control type="email" placeholder="examble@email.com" />
              <Form.Text>trust us !!!! </Form.Text>
            </Form.Group>
          </Form>
        </Col>
        <Col>
          <Form className="mb-3">
            <Form.Group controlId="Password">
              <Form.Label>Password</Form.Label>
              <div style={{ display: "flex" }}>
                <Form.Control type="Password" />
                <Button className="" variant="secondary">
                  {" "}
                  log
                </Button>
              </div>
            </Form.Group>
          </Form>
        </Col>
      </Row>
      <Card className="card">
        <Card.Img src="https://picsum.photos/600/150" />
        <Card.Body>
          <Card.Title className="card-title">this is title</Card.Title>
          <Card.Text>plz send me a paper</Card.Text>
        </Card.Body>
      </Card>

      <Alert variant="danger">this is a button</Alert>
      <Button> test button</Button>
    </div>
  );
}

export default App;
