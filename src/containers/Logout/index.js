import { connect } from 'react-redux';

import Logout from '../../components/Logout/logout';

import { clickOnLogout } from '../../actions/user';

const mapStateToProps = (state) => ({
  openLogout: state.user.openLogout,
});

const mapDispatchToProps = (dispatch) => ({
  onClickLogout: () => {
    dispatch(clickOnLogout());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
