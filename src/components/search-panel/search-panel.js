import React, { Component } from 'react';
import './search-panel.css';

export default class SearchPanel extends Component {
   constructor(props) {
      super(props);
      this.state = {
         text: ''
      }
      this.onUpdateSearch = this.onUpdateSearch.bind(this);
   }
   onUpdateSearch(e) {
      const text = e.target.value;
      this.setState({ text });
      this.props.onUpdateSearch(text);
   }
   render() {
      return (
         <input
         onChange={this.onUpdateSearch}
         className="form-control search-input"
         type="text"
         placeholder="Поиск по записям" />
      )
   }
}
