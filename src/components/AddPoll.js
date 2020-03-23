import React, { Component } from 'react';

class AddPoll extends Component {
  state = {
    question: '',
    a: '',
    b: '',
    c: '',
    d: ''
  };

  handleInputChange = e => {
    const { value, name } = e.target;
    this.setState(() => ({
      [name]: value
    }));
  };

  isDisabled = () => {
    const { question, a, b, c, d } = this.state;
    return question === '' || a === '' || b === '' || c === '' || d === '';
  };

  handleSubmit = e => {
    e.preventDefault();
  };

  render() {
    const { question, a, b, c, d } = this.state;
    return (
      <form className='add-form' onSubmit={this.handleSubmit}>
        <h3 style={{ marginBottom: 5 }}>What is you question?</h3>
        <input
          value={question}
          onChange={this.handleInputChange}
          name='question'
          className='input'
          type='text'
        />

        <h3 style={{ marginBottom: 5 }}>What are the options?</h3>

        <label className='label' htmlFor='a'>
          A.
        </label>
        <input
          onChange={this.handleInputChange}
          name='a'
          className='input'
          type='text'
          value={a}
        />

        <label className='label' htmlFor='a'>
          B.
        </label>
        <input
          onChange={this.handleInputChange}
          name='b'
          className='input'
          type='text'
          value={b}
        />

        <label className='label' htmlFor='b'>
          C.
        </label>
        <input
          onChange={this.handleInputChange}
          name='c'
          className='input'
          type='text'
          value={c}
        />

        <label className='label' htmlFor='d'>
          D.
        </label>
        <input
          onChange={this.handleInputChange}
          name='d'
          className='input'
          type='text'
          value={d}
        />

        <button className='btn' type='submit' disabled={this.isDisabled()}>
          Submit
        </button>
      </form>
    );
  }
}

export default AddPoll;
