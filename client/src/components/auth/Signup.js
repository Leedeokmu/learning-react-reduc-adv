import {Field, reduxForm} from "redux-form";
import {connect} from "react-redux";
import {compose} from "redux";
import * as actions from "../../actions";
import {useNavigate} from "react-router-dom";

const Signup = (props) => {
  const navigate = useNavigate();
  const onSubmit = (formProps) => {
    props.signup(formProps, () => {
      navigate('/feature')
    });
  }

  const {handleSubmit} = props;

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <fieldset>
        <label>Email</label>
        <Field
          name={"email"}
          type={"text"}
          component={"input"}
          autoComplete="none"
        />
      </fieldset>
      <fieldset>
        <label>Password</label>
        <Field
          name={"password"}
          type={"password"}
          component={"input"}
          autoComplete="none"
        />
      </fieldset>
      <div>{props.errorMessage}</div>
      <button>Sign up!</button>
    </form>
  );
};

function mapStateToProps(state) {
  return {
    errorMessage: state.auth.errorMessage
  }
}

export default compose(
  connect(mapStateToProps, actions),
  reduxForm({form: 'signup'})
)(Signup);
