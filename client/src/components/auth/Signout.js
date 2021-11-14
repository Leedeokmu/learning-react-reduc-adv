import {Component} from "react";
import * as actions from '../../actions';
import {connect} from "react-redux";

class Signout extends Component {
  componentDidMount() {
    this.props.signout();
  }

  render() {
    return <div>Sign out</div>
  }
}

export default connect(null, actions)(Signout);
