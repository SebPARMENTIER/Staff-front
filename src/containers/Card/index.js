import { connect } from 'react-redux';

import Card from '../../components/Card/card';

import {
  clickOnButtonUpdateCard,
  cardInfosValue,
  clickOnButtonDeleteCard,
  cardDeleteSuccessToFalse
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName,
  openUpdateCardModal: state.card.openUpdateCardModal,
  openDeleteCardModal: state.card.openDeleteCardModal,
  cardDeletesSuccess: state.card.cardDeletesSuccess
});

const mapDispatchToProps = (dispatch) => ({
  onClickUpdateCardModal: (value1, value2) => {
    dispatch(clickOnButtonUpdateCard(value1, value2));
  },
  getCardInfos: (value) => {
    dispatch(cardInfosValue(value));
  },
  onClickDeleteCardModal: (value) => {
    dispatch(clickOnButtonDeleteCard(value));
  },
  setCardDeleteSuccessToFalse: () => {
    dispatch(cardDeleteSuccessToFalse());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Card);
