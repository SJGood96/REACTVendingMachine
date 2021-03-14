import React from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Col, Row } from 'react-bootstrap'

class VendingForm extends React.Component {

  render() {
      return (
          <Form>
              <Form.Group controlId="Total$In">
                  <Form.Label><h1>Total $ In:</h1></Form.Label>
                  <Form.Control type="text" placeholder="0.00" name="Total$In" display="0.00" readOnly/>
                  <br/>
                    <ButtonToolbar aria-label="Toolbar with button groups">
                      <ButtonGroup className="mr-4" aria-label="Second group">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridButton1">
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                              <Button variant="outline-dark" type="onClick">Add Dollar</Button>
                              &nbsp;
                              &nbsp; 
                              &nbsp; 
                              <Button variant="outline-dark" type="onClick">Add Quarter</Button>
                            </Form.Group>
                          </Form.Row>
                    </ButtonGroup> 
                    <ButtonGroup className="mr-4" aria-label="Second group">
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridButton2">
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                            &nbsp; 
                              <Button variant="outline-dark" type="onClick">Add Dime</Button>
                              &nbsp; 
                              &nbsp; 
                              &nbsp;  
                              <Button variant="outline-dark" type="onClick">Add Nickel</Button>
                            </Form.Group>
                          </Form.Row>
                    </ButtonGroup>
                  </ButtonToolbar>
              </Form.Group>
              <hr/>
              <Form.Group controlId="Messages">
                  <Form.Label><h2>Messages</h2></Form.Label>
                  <Form.Control type="text" placeholder="Messages" name="Messages" display="Messages" readOnly/>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalItemId">
                <Form.Label column sm={2}>Item:</Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="itemId" name="itemId"  readOnly/>
                </Col>
              </Form.Group>
              <hr/>
              <Form.Group controlId="change">
                  <Form.Label><h3>Change</h3></Form.Label>
                  <Form.Control type="phone" placeholder="change" name="change" readOnly/>
                  <br/>
                  <Button variant="outline-dark" size="lg" block type="onClick">Change Return</Button>
              </Form.Group>
          </Form>
      )
  }
}

export default VendingForm