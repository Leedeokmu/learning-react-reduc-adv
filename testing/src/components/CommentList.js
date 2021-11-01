import React from "react";
import {connect} from "react-redux";

class CommentList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          <h4>Comment List</h4>
          {this.renderComments()}
        </ul>
      </div>
    )
  }

  renderComments() {
    return this.props.comments.map(comment => {
      return <li key={comment}>{comment}</li>
    })
  }
}

const mapStateToProps = (state) => {
  return {comments: state.comments}
}

export default connect(mapStateToProps, null)(CommentList);