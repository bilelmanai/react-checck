import {
  Row,
  Col,
  Button,
  Alert,
  Breadcrumb,
  Card,
  Form,
} from "react-bootstrap";
import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "./Navbar";
import FormAd from "./Form.js";
function App() {
  return (
    <div className="App">
      <NavBar />
      <FormAd />
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
