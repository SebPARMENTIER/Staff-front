import { connect } from "react-redux";

import Home from "../../components/Home/home";

import {
  createSetInputValueAction,
  createSubmitAction
} from '../../actions/user';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isError: state.user.isError
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createSetInputValueAction(newValue, name));
  },
  handleLogin: () => {
    dispatch(createSubmitAction());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
