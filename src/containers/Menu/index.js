import { connect } from 'react-redux';

import Menu from '../../components/Menu/menu';

const mapStateToProps = (state) => ({
  menusName: state.menus.menusName
});

export default connect(mapStateToProps)(Menu);
