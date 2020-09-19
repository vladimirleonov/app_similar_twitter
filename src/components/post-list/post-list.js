import React from 'react';
import PostListItem from '../post-list-item/';
import './post-list.css';
import { ListGroup, ListGroupItem } from 'reactstrap';

const PostList = ({posts, onDelete}) => {

   const elements = posts.map(item => {
      const { id, label, important } = item;
      return (
         // <li key={id} className="list-group-item">
         //    <PostListItem
         //       label={label}
         //       important={important} />
         // </li>
         <ListGroupItem key={id}>
            <PostListItem
               onDelete={() => { onDelete(id) }}
               label={label}
               important={important} />
         </ListGroupItem>
      ) 
   })

   return (
      // <ul className="app-list list-group"> 
      //    <PostListItem label = "Going to learn React"/>
      //    <PostListItem label="That is so good" important = "true"/>
      //    <PostListItem label="I need a break..." />
      //    <PostListItem label = "I need this kurs"/>
      // </ul>
      // <ul className="app-list list-group"> 
      //    {elements}
      // </ul>
      <ListGroup className="app-list">
         {elements}
      </ListGroup>
   )
}

export default PostList;