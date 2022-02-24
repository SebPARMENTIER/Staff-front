import { connect } from 'react-redux';

import DeleteCardModal from '../../components/DeleteCardModal/deleteCardModal';

import {
  createDeleteCardAction,
  clickOnButtonEscapeDeleteCard
} from '../../actions/cards';

const mapStateToProps = (state) => ({
  isDeleteCardModalError: state.card.isDeleteCardModalError,
});

const mapDispatchToProps = (dispatch) => ({
  onClickValidateDeleteCardModal: () => {
    dispatch(createDeleteCardAction());
  },
  onClickEscapeDeleteCardModal: () => {
    dispatch(clickOnButtonEscapeDeleteCard());
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(DeleteCardModal);
