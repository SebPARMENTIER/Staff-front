import { connect } from "react-redux";

import Menus from "../../components/Menus/menus";

const mapStateToProps = (state) => ({
  menusName: state.menus.menusName
});

export default connect(mapStateToProps)(Menus);
