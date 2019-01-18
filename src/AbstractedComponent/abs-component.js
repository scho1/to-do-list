import React, { Component } from 'react';
import { Button, FormGroup, ControlLabel, FormControl, HelpBlock, Row, Col, Grid, Checkbox } from 'react-bootstrap'; // from react-bootstrap library
import ToDoItem from './ToDoItem'; // Created components
import uuidv1 from 'uuid/v1';

import logo from '../logo.svg';
import '../App.css';

class AbstractedComponent extends Component {
  state = {
      items:[
        {
          name:"Learn React",
          checked: false
        },
        {
          name:"Learn Vue",
          checked: true
        }
      ],
      toDoInput:""
  }

  componentDidMount() {
    const { items } = this.state;
    if (this.state.items.length > 0) {
      this.setState({
        items: items.map(item => {
          return {
            ...item,
            id:uuidv1()
          }
        })
      })
    }
  }


  handleChange = (e) => {
    console.log(e.target.value)
    this.setState({
      toDoInput: e.target.value
    })
  }

  handleCheckBoxClick = (e) => {
    console.log(e.target.name)
    const { items } = this.state;
    const newItems = items.map(item => {
      if (item.id === e.target.name) {
        return {
          ...item,
          checked: !item.checked
        }
      } else {
        return item;
      }
    })

    this.setState({
      items: newItems
      })
  }


  renderTodos = () => {
    // ES5
    // const items = this.state.items;
    // ES6
    const { items } = this.state;
    if (items.length > 0) {
      return items.map(item => {
        return (
          <ToDoItem item={item} handleCheckBoxClick={this.handleCheckBoxClick} />
        )
      })
    }
  }

  onClick = (e) => {
    e.preventDefault();
    const { toDoInput, items } = this.state;
    this.setState({
      items: items.concat({
        name:toDoInput,
        checked: false,
        id: uuidv1()
      }),
      toDoInput: ""
    })
  }

  render() {
    return (
      <div className="AbstractedComponent">
        <Grid>
          <Row>
            <Col smOffset={3} sm={6}>
            <form
              onSubmit={this.onClick}

            >
              <FormGroup
                controlId="formBasicText"
              >
                <ControlLabel>Add item</ControlLabel>
                <FormControl
                  type="text"
                  value={this.state.toDoInput}
                  placeholder="Enter text"
                  onChange={this.handleChange}
                />
              </FormGroup>
              <Button onClick={this.onClick} >Add Item</Button>
            </form>
            <br />
              <ul>
                {
                  this.renderTodos()
                }
              </ul>

            </Col>

          </Row>
        </Grid>

      </div>
    );
  }
}

export default AbstractedComponent;
