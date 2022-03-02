import { connect } from "react-redux";

import App from "../../components/App/app";

const mapStateToProps = (state) => ({
  isLogged: state.user.isLogged
});

export default connect(mapStateToProps)(App);