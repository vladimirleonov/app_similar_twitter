import React, {Component} from 'react';

import AppHeader from '../app-header/';
import SearchPanel from '../search-panel/';
import PostStatusFilter from '../post-status-filter/';
import PostList from '../post-list/';
import PostAddForm from '../post-add-form/';
import './app.css';
import styled from 'styled-components'

const AppBlock = styled.div`
   margin: 0 auto;
   max-width: 800px;   
`

export default class App extends Component {
   constructor(props) {
      super(props);
      this.state = {
         data : [
            {label: 'Going to learn React', important: false, id: 'qw'},
            {label: 'That is so good', important: false, id: 'er'},
            { label: 'I need a break...', important: false, id: 'ty'},
            { label: 'I need this kurs', important: false, id: 'zx'}
         ]
      }
   }

   deleteItem(id) {
      console.log(id);
   }

   render() {
      return (
         <AppBlock>
            <AppHeader />
            <div className="search-panel d-flex">
               <SearchPanel />
               <PostStatusFilter />
            </div>
            <PostList
               posts={this.state.data}
               onDelete={this.deleteItem}
            />
            <PostAddForm />
         </AppBlock>
      )
   }
}

// const App = () => {

//    const data = [
//       {label: 'Going to learn React', important: false, id: 'qw'},
//       {label: 'That is so good', important: false, id: 'er'},
//       { label: 'I need a break...', important: false, id: 'ty'},
//       { label: 'I need this kurs', important: false, id: 'zx'}
//    ];

   // return (
   //    <AppBlock>
   //       <AppHeader />
   //       <div className="search-panel d-flex">
   //          <SearchPanel />
   //          <PostStatusFilter/>
   //       </div>
   //       <PostList
   //          posts={data}
   //          onDelete={id => { console.log(id)}}
   //       />
   //       <PostAddForm/>
   //    </AppBlock>
   // )
// }

// export default App;
