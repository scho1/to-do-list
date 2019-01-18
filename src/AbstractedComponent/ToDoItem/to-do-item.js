import React from 'react';
import { Row, Col, Grid, Checkbox } from 'react-bootstrap';

const ToDoItem = ({ item, handleCheckBoxClick }) => {
  return (
    <li key={item.id}>
      <Row>
        <Col sm={6}>
        {item.name}

        </Col>
          <Checkbox checked={item.checked} name={item.id} onClick={handleCheckBoxClick}>
            Checkbox
          </Checkbox>
        <Col sm={2}></Col>
      </Row>
    </li>
  )
}

export default ToDoItem
