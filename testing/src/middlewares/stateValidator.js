import tv4 from "tv4";
import stateSchema from "./stateSchema";
const stateValidator = ({dispatch, getState}) => next => action => {
  next(action);
  if (!tv4.validate(getState(), stateSchema)) {
    console.warn('Invalid data detected')
  }
}

export default stateValidator;