import { connect } from 'react-redux';

import Card from '../../components/Card/card';

import {
  clickOnButtonUpdateCard,
  cardInfosValue,
  clickOnButtonDeleteCard
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName,
  openUpdateCardModal: state.card.openUpdateCardModal,
  openDeleteCardModal: state.card.openDeleteCardModal
});

const mapDispatchToProps = (dispatch) => ({
  onClickUpdateCardModal: (value1, value2) => {
    dispatch(clickOnButtonUpdateCard(value1, value2));
  },
  getCardInfos: (value) => {
    dispatch(cardInfosValue(value));
  },
  onClickDeleteCardModal: () => {
    dispatch(clickOnButtonDeleteCard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
