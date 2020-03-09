import React, { Component } from "react";
import { Row, Col, Card, Container } from "react-bootstrap";

class Dashboard extends Component {
  render() {
    return (
      <Container>
        <Row>
          {/* Stack the columns on mobile by making one full-width and the other half-width */}
          <Col xs={12} md={8}>
            <Card border="primary" style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>Card 1</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <br />
                </small>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={6} md={4}>
            <Card border="primary" style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>Card 3</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <br />
                </small>
              </Card.Footer>
            </Card>

            <Card border="primary" style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>Card 4</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <br />
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>

        <Row>
          <Col xs={12} md={8}>
            <Card border="primary" style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>Card 2</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <br />
                </small>
              </Card.Footer>
            </Card>
          </Col>

          <Col xs={6} md={4}>
            <Card border="primary" style={{ marginBottom: "15px" }}>
              <Card.Body>
                <Card.Title>Card 5</Card.Title>
                <Card.Text>
                  <br />
                  <br />
                </Card.Text>
              </Card.Body>
              <Card.Footer>
                <small className="text-muted">
                  <br />
                </small>
              </Card.Footer>
            </Card>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Dashboard;
