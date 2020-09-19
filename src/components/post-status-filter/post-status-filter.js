import React from 'react';
import './post-status-filter.css';
import { Button } from 'reactstrap';

const PostStatusFilter = () => {
   return (
      <div className="btn-group">
         <Button color="info">Все</Button>
         {/* <button type="button" className="btn btn-info">Все</button> */}
         <Button outline color="secondary">Понравились</Button>
         {/* <button type="button" className="btn btn-outline-secondary">Понравились</button> */}
      </div>
   )
}

export default PostStatusFilter;