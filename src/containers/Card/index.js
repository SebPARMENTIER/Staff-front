import { connect } from 'react-redux';

import Card from '../../components/Card/card';

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName
});

export default connect(mapStateToProps)(Card);
