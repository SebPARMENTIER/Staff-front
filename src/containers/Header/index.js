import { connect } from "react-redux";

import Header from "../../components/Header/header";

const mapStateToProps = (state) => ({
  firstname: state.user.firstname,
  isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(Header);
