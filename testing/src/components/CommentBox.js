import React, {useState} from "react";
import {connect} from "react-redux";
import {fetchComments} from "../actions";

const CommentBox = (props) => {
  const [comment, setComment] = useState('');
  const handleSubmit = (event) => {
    event.preventDefault();
    setComment('');
  }
  return (
    <div>
    <form onSubmit={handleSubmit}>
      <h4>Add a Comment</h4>
      <textarea value={comment} onChange={(e) => setComment(e.target.value)}/>
      <div>
        <button>Submit Comment</button>
      </div>
    </form>
      <button className={'fetch-comments'} onClick={props.fetchComments} >Fetch Comment</button>
    </div>
  )
}

export default connect(null, {fetchComments})(CommentBox) ;