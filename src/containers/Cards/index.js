import { connect } from "react-redux";

import Cards from "../../components/Cards/cards";

import { clickOnButtonAddNewCard } from '../../actions/cards';

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName,
  openAddNewCardModal: state.cards.openAddNewCardModal,
  isLoading: state.cards.isLoading
});

const mapDispatchToProps = (dispatch) => ({
  onClickAddNewCardModal: () => {
    dispatch(clickOnButtonAddNewCard());
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(Cards);
