import PropTypes from 'prop-types';

import './deleteCardModal.scss';

const DeleteCardModal = ({
  onClickEscapeDeleteCardModal,
  onClickValidateDeleteCardModal,
  isDeleteCardModalError
}) => {
  const handleOnClickEscapeUpdateCardModal = () => {
    onClickEscapeDeleteCardModal();
  };
  const handleOnClickValidateDeleteCardModal = () => {
    onClickValidateDeleteCardModal();
  };
  return (
    <div className="deleteCardModal">
      <div className="deleteCardModal-container">
        <div className="deleteCardModal-container-header">
          Supprimez une carte
        </div>
        {!isDeleteCardModalError && (
          <div className="deleteCardModal-container-desc">
            Voulez-vous supprimer cette carte ?
          </div>
        )}
        {isDeleteCardModalError && (
          <>
            <div className="deleteCardModal-container-error">
              Une erreur s'est produite, veuillez réessayer.
            </div>
            <div className="deleteCardModal-container-buttons">
              <button
                className="deleteCardModal-container-buttons-escape"
                onClick={handleOnClickEscapeUpdateCardModal}>
                Annuler
              </button>
            </div>
          </>
        )}
        {!isDeleteCardModalError && (
          <div className="deleteCardModal-container-buttons">
            <button
              className="deleteCardModal-container-buttons-validate"
              onClick={handleOnClickValidateDeleteCardModal}
            >
              Valider
            </button>
            <button
              className="deleteCardModal-container-buttons-escape"
              onClick={handleOnClickEscapeUpdateCardModal}
            >
              Annuler
            </button>
          </div>
        )}
      </div>
    </div>
  );
};

DeleteCardModal.propTypes = {
  onClickEscapeDeleteCardModal: PropTypes.func.isRequired,
  onClickValidateDeleteCardModal: PropTypes.func.isRequired,
  isDeleteCardModalError: PropTypes.bool.isRequired
};

export default DeleteCardModal;
