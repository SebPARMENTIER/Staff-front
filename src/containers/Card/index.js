import { connect } from 'react-redux';

import Card from '../../components/Card/card';

import {
  clickOnButtonUpdateCard,
  cardInfosValue
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName,
  openUpdateCardModal: state.card.openUpdateCardModal
});

const mapDispatchToProps = (dispatch) => ({
  onClickUpdateCardModal: () => {
    dispatch(clickOnButtonUpdateCard());
  },
  getCardInfos: (value) => {
    dispatch(cardInfosValue(value));
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
