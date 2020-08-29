import React from 'react';
import './post-list-item.css';

const PostListItem = () => {
   return (
      <li className="app-list-item d-flex justify-content-between">
         <span className="app-list-item-label">
               Создаю первое приложение
         </span>
         <div className="d-flex justify-content-center align-items-center">
            <button
            type="button" className="btn-star btn-sm">
               <i className="fa fa-star" aria-hidden="true"></i>
            </button>
            <button
            type="button" className="btn-trash btn-sm">
               <i class="fa fa-trash" aria-hidden="true"></i>
            </button>
            <i class="fa fa-heart-o" aria-hidden="true"></i>
         </div>
      </li>
   )
}

export default PostListItem;