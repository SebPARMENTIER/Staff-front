import PropTypes from 'prop-types';

import Field from '../Field/field';
import FieldTextarea from '../FieldTextarea/fieldTextarea';

import './updateCardModal.scss';

const UpdateCardModal = ({
  newTitle,
  newDescription,
  changeField,
  handleUpdateCardModal,
  onClickEscapeUpdateCardModal,
  isUpdateCardModalError
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleUpdateCardModal();
  };
  const handleOnClickEscapeUpdateCardModal = () => {
    onClickEscapeUpdateCardModal();
  };
  return (
    <div className="updateCardModal">
      <div className="updateCardModal-container">
        <div className="updateCardModal-container-header">
          Modifiez une carte
        </div>
        <form
          className="updateCardModal-container-form"
          onSubmit={handleSubmit}
        >
          {!isUpdateCardModalError && (
            <div className="updateCardModal-container-form-field">
              <Field
                className="updateCardModal-container-form-field-title"
                name="newTitle"
                placeholder="Nom de la carte..."
                value={newTitle}
                onChange={changeField}
              />
              <FieldTextarea
                className="updateCardModal-container-form-field-description"
                name="newDescription"
                placeholder="Description de la carte..."
                value={newDescription}
                onChange={changeField}
              />
            </div>
          )}
          {isUpdateCardModalError && (
            <>
              <div className="updateCardModal-container-form-error">
                Une erreur s'est produite, veuillez réessayer.
              </div>
              <div className="updateCardModal-container-form-buttons">
                <button
                  className="updateCardModal-container-form-buttons-escape"
                  onClick={handleOnClickEscapeUpdateCardModal}>
                  Annuler
                </button>
              </div>
            </>
          )}
          {!isUpdateCardModalError && (
            <div className="updateCardModal-container-form-buttons">
              <button
                className="updateCardModal-container-form-buttons-validate"
                type="submit"
              >
                Valider
              </button>
              <button
                className="updateCardModal-container-form-buttons-escape"
                onClick={handleOnClickEscapeUpdateCardModal}
              >
                Annuler
              </button>
            </div>
          )}
        </form>
      </div>
    </div>
  );
};

UpdateCardModal.propTypes = {
  newTitle: PropTypes.string.isRequired,
  newDescription: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleUpdateCardModal: PropTypes.func.isRequired,
  onClickEscapeUpdateCardModal: PropTypes.func.isRequired,
  isUpdateCardModalError: PropTypes.bool.isRequired
};

UpdateCardModal.defaultProps = {
  title: '',
  description: ''
};

export default UpdateCardModal;
