import { connect } from "react-redux";

import Cards from "../../components/Cards/cards";

import {
  clickOnButtonAddNewCard,
  clickOnButtonUpdateCard
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName,
  openAddNewCardModal: state.cards.openAddNewCardModal,
  openUpdateCardModal: state.cards.openUpdateCardModal
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddNewCardModal: () => {
    dispatch(clickOnButtonAddNewCard());
  },
  onClickUpdateCardModal: () => {
    dispatch(clickOnButtonUpdateCard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
