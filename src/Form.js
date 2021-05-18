import {
  Form,
  Col,
  Button,
  Container,
  Row,
  Card,
  ListGroup,
  ListGroupItem,
} from "react-bootstrap";
const FormAd = () => {
  return (
    <div>
      <Form>
        <Container>
          <div className="divunder">
            <Row className="Form-Container">
              <Col xs={11}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="first name" />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridEmail">
                    <Form.Control type="email" placeholder="last name" />
                  </Form.Group>
                </Form.Row>
              </Col>
            </Row>
            <div style={{ width: "425px" }}>
              <Row className="Form-Container">
                <Form.Group controlId="formGridAddress1">
                  <Form.Control placeholder="username                                                     @gmail.com" />
                  <div style={{ marginBottom: "5px" }}>
                    <Form.Text style={{ textAlign: "right" }}>
                      you can use letters,numbers & periode
                    </Form.Text>
                  </div>
                </Form.Group>
              </Row>
            </div>
            <Row className="Form-Container">
              <Col xs={9}>
                <Form.Row>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Password     " />
                  </Form.Group>
                  <Form.Group as={Col} controlId="formGridPassword">
                    <Form.Control type="password" placeholder="Confirm     " />
                  </Form.Group>
                  <div style={{ paddingTop: "-6px" }}>
                    <Form.Text style={{ textAlign: "right" }}>
                      Use 8 or more characters with a mix of letters, numbers &
                      symbols
                    </Form.Text>
                  </div>
                </Form.Row>
              </Col>
            </Row>
            <div className="buttt">
              <Button
                variant="primary"
                type="submit"
                style={{
                  backgroundColor: "white",
                  color: "blue",
                  border: "none",
                }}
              >
                sign in instead
              </Button>
              <Button variant="primary" type="submit">
                next
              </Button>
            </div>
          </div>
        </Container>
      </Form>
    </div>
  );
};

export default FormAd;
