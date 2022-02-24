import PropTypes from 'prop-types';

import Field from '../Field/field';
import FieldTextarea from '../FieldTextarea/fieldTextarea';

import './addNewCardModal.scss';

const AddNewCardModal = ({
  title,
  description,
  changeField,
  handleAddNewCardModal,
  onClickEscapeAddNewCardModal,
  isAddNewCardModalError
}) => {
  const handleSubmit = (event) => {
    event.preventDefault();
    handleAddNewCardModal();
  };
  const handleOnClickEscapeAddNewCardModal = () => {
    onClickEscapeAddNewCardModal();
  };
  return (
    <div className="addNewCardModal">
      <div className="addNewCardModal-container">
        <div className="addNewCardModal-container-header">
          Ajoutez une nouvelle carte
        </div>
        <form
          className="addNewCardModal-container-form"
          onSubmit={handleSubmit}
        >
          <div className="addNewCardModal-container-form-field">
            <Field
              className="addNewCardModal-container-form-field-title"
              name="title"
              placeholder="Nom de la carte..."
              value={title}
              onChange={changeField}
            />
            <FieldTextarea
              className="addNewCardModal-container-form-field-description"
              name="description"
              placeholder="Description de la carte..."
              value={description}
              onChange={changeField}
            />
          </div>
          {isAddNewCardModalError && (
            <div className="addNewCardModal-container-form-error">
              Une erreur s'est produite, veuillez réessayer.
            </div>
          )}
          <div className="addNewCardModal-container-form-buttons">
            <button
              className="addNewCardModal-container-form-buttons-validate"
              type="submit"
            >
              Valider
            </button>
            <button
              className="addNewCardModal-container-form-buttons-escape"
              onClick={handleOnClickEscapeAddNewCardModal}>
              Annuler
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

AddNewCardModal.propTypes = {
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  changeField: PropTypes.func.isRequired,
  handleAddNewCardModal: PropTypes.func.isRequired,
  onClickEscapeAddNewCardModal: PropTypes.func.isRequired,
  isAddNewCardModalError: PropTypes.bool.isRequired
};

AddNewCardModal.defaultProps = {
  title: '',
  description: ''
};

export default AddNewCardModal;
