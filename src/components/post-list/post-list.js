import React from 'react';
import PostListItem from '../post-list-item/';
import './post-list.css';

const PostList = () => {
   return (
      <ul className="app-list list-group"> 
         <PostListItem label = "Going to learn React"/>
         <PostListItem label="That is so good" important/>
         <PostListItem label = "I need a break..."/>
      </ul>
   )
}

export default PostList;