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
            {label: 'Going to learn React', important: false, like: false, id: 'qw'},
            {label: 'That is so good', important: false, like: false, id: 'er'},
            { label: 'I need a break...', important: false, like: false, id: 'ty'},
            { label: 'I need this kurs', important: false, like: false, id: 'zx'}
         ]
      }
      this.deleteItem = this.deleteItem.bind(this);
      this.onAdd = this.onAdd.bind(this);
      this.onToggleLiked = this.onToggleLiked.bind(this);
      this.onToggleImportant = this.onToggleImportant.bind(this);

      this.maxId = 4;
   }

   deleteItem(id) {
      this.setState(({ data }) => {
         const index = data.findIndex(elem => elem.id===id );
         
         const before = data.slice(0, index);
         const after = data.slice(index + 1);

         const newArr = [...before, ...after];
         return {
            data: newArr
         }
      });
   }

   onAdd(body) {
      const newItem = {
         label: body,
         important: false,
         id: this.maxId++
      }

      this.setState(({ data }) => {
         const newArr = [...data, newItem];
         return {
            data: newArr
         }
      })
   }

   onToggleLiked(id) {
      this.setState(({ data }) => {
         const index = data.findIndex(elem => elem.id === id);
         const oldItem = data[index];
         const newItem = { ...data[index], like: !oldItem.like };

         const before = data.slice(0, index);
         const after = data.slice(index + 1);

         const newArr = [ ...before, newItem, ...after ];

         return {
            data: newArr
         }
      })
      // console.log('liked' + id);
   }

   onToggleImportant(id) {
      this.setState(({ data }) => {
         const index = data.findIndex(elem => elem.id === id);
         const oldItem = data[index];
         const newItem = { ...data[index], important: !oldItem.important };

         const before = data.slice(0, index);
         const after = data.slice(index + 1);

         const newArr = [...before, newItem, ...after];

         return {
            data: newArr
         }
      })
      
      //console.log('important' + id);
   }

   render() {

      const { data } = this.state;

      const liked = data.filter(elem => elem.like).length;
      const allPosts = data.length;

      return (
         <AppBlock>
            <AppHeader
               liked = {liked}
               allPosts = {allPosts}
            />
            <div className="search-panel d-flex">
               <SearchPanel />
               <PostStatusFilter />
            </div>
            <PostList
               posts={this.state.data}
               onDelete={this.deleteItem}
               onToggleLiked={this.onToggleLiked}
               onToggleImportant={this.onToggleImportant}

            />
            <PostAddForm onAdd={this.onAdd}/>
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
