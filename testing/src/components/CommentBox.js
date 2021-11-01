import React, {useEffect, useState} from "react";
import {connect} from "react-redux";
import {fetchComments} from "../actions";
import requireAuth from "./requireAuth";

class CommentBox extends React.Component {
  state = {
    comment: ''
  }
  componentDidMount() {
    this.shouldNavigateAway();
  }

  componentDidUpdate() {
    this.shouldNavigateAway();
  }

  shouldNavigateAway() {
    if (!this.props.auth) {
      this.props.history.push('/');
    }
  }

  handleSubmit = (event) => {
    event.preventDefault();
    this.setState({comment: ''})
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <h4>Add a Comment</h4>
          <textarea value={this.state.comment} onChange={(e) => this.setState({comment: e.target.value})}/>
          <div>
            <button>Submit Comment</button>
          </div>
        </form>
        <button className={'fetch-comments'} onClick={this.props.fetchComments}>Fetch Comment</button>
      </div>
    )
  }
}

export default connect(null, {fetchComments})(requireAuth(CommentBox)) ;