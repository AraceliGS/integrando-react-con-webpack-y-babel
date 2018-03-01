import React, {Component} from 'react';
import ReactDOM from 'react-dom'; 

class FormContainer extends Component {
  contructor() {
    super();

    this.state = {
      title:''
    };
  }

  render()  {
    return (
      <form id='article-form'></form>
    );
  }
}

export default FormContainer;
