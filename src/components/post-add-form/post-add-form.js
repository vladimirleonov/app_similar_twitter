import React from 'react'
import './post-add-form.css';

const PostAddForm = ({addItem}) => {
   return (
      <div className="bottom-panel d-flex">
         <input
            type="text"
            placeholder="О чем вы думаете сейчас?"
            className="form-control new-post-label"
         />
         <button
            onClick={() => addItem('Hello')}
            type="submit"
            className="btn btn-outline-secondary">
            Добавить</button>
      </div>
   )
}

export default PostAddForm;