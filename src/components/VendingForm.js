import React from 'react';
import { Form, Button, ButtonGroup, ButtonToolbar, Col, Row } from 'react-bootstrap'
import '../style/button.css'

class VendingForm extends React.Component {

  render() {
      return (
          <Form>
              <Form.Group controlId="Total$In">
                  <Form.Label><h3>Total $ In:</h3></Form.Label>
                  <Form.Control type="text" placeholder="0.00" name="Total$In" display="0.00" readOnly/>
                    <ButtonToolbar aria-label="Toolbar with button groups"><center>
                      <ButtonGroup className="mr-4" aria-label="Second group">
                        <Form.Row>
                            <Form.Group as={Col} controlId="formGridButton1">
                              <Button className="btn1" size="sm" variant="outline-dark" >Add Dollar</Button>
                              <Button className="btn2" size="sm" variant="outline-dark" >Add Quarter</Button>
                            </Form.Group>
                          </Form.Row>
                    </ButtonGroup> 
                    <ButtonGroup className="mr-4" aria-label="Second group">
                        <Form.Row>
                        <Form.Group as={Col} controlId="formGridButton2">
                              <Button className="btn3" size="sm" variant="outline-dark" >Add Dime</Button>
                              <Button className="btn4" size="sm" variant="outline-dark" >Add Nickel</Button>
                            </Form.Group>
                          </Form.Row>
                    </ButtonGroup>
                    </center></ButtonToolbar>
              </Form.Group>
              <hr/>
              <Form.Group controlId="Messages">
                  <Form.Label><h3>Messages</h3></Form.Label>
                  <Form.Control type="text" placeholder="Messages" name="Messages" display="Messages" readOnly/>
              </Form.Group>
              <Form.Group as={Row} controlId="formHorizontalItemId">
                <Form.Label column sm={2}>Item:</Form.Label>
                <Col sm={10}>
                <Form.Control type="text" placeholder="itemId" name="itemId"  readOnly/>
                </Col>
              </Form.Group>
                <Button className="btn5" variant="outline-dark" >Make Purchase</Button>
              <hr/>
              <Form.Group controlId="change">
                  <Form.Label><h3>Change</h3></Form.Label>
                  <Form.Control type="phone" placeholder="change" name="change" readOnly/>
                  <Button className="btn6" variant="outline-dark" >Change Return</Button>
              </Form.Group>
          </Form>
      )
  }
}

export default VendingForm