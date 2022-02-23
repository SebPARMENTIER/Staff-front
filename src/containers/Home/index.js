import { connect } from "react-redux";

import Home from "../../components/Home/home";

import {
  createSetInputValueAction,
  createSubmitAction
} from '../../actions/user';

import {
  createGetAllCardsAction
} from '../../actions/cards';

import {
  createGetAllMenusAction
} from '../../actions/menus';

const mapStateToProps = (state) => ({
  email: state.user.email,
  password: state.user.password,
  isError: state.user.isError,
  isLogged: state.user.isLogged
});

const mapDispatchToProps = (dispatch) => ({
  changeField: (newValue, name) => {
    dispatch(createSetInputValueAction(newValue, name));
  },
  handleLogin: () => {
    dispatch(createSubmitAction());
  },
  getAllCards: () => {
    dispatch(createGetAllCardsAction());
  },
  getAllMenus: () => {
    dispatch(createGetAllMenusAction());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Home);
