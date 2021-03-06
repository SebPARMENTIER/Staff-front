import PropTypes from 'prop-types';
import { useParams, useNavigate } from 'react-router-dom';
import { useEffect } from 'react';
import { ImPencil2, ImBin } from 'react-icons/im';

import UpdateCardModal from '../../containers/UpdateCardModal';
import DeleteCardModal from '../../containers/DeleteCardModal';

import './card.scss';

const Card = ({
  cardsName,
  onClickUpdateCardModal,
  openUpdateCardModal,
  onClickDeleteCardModal,
  openDeleteCardModal,
  cardDeleteSuccess,
  setCardDeleteSuccessToFalse
}) => {
  // Find current id from url
  const { id } = useParams();

  // Keep the card with id from url
  const cardInfos = cardsName.find(element => element.id == id);

  // Open updateCardModal and send informations to card container to put them into state to have them when updateCardModal is open
  const handleUpdateCardModal = () => {
    onClickUpdateCardModal(cardInfos.id, cardInfos.title, cardInfos.description);
  };

  // Open deleteCardModal and send informations to card container to put them into state to have them when deleteCard Modal is open
  const handleDeleteCardModal = () => {
    onClickDeleteCardModal(cardInfos.id);
  };

  // Use navigate to go back to /cards once a card is deleted and put cardDeleteSuccess to false
  let navigate = useNavigate();
  useEffect(() => {
    if (cardDeleteSuccess) {
      navigate('/cards');
      setCardDeleteSuccessToFalse();
    }
  }, [cardDeleteSuccess]);
  
  return (
    <div className="card">
      <div className="card-header">
        <div className="card-header-title">
          {cardInfos.title}
        </div>
        <div className="card-header-options">
          <div className="card-header-options-update">
            <ImPencil2 onClick={handleUpdateCardModal} />
          </div>
          <div className="card-header-options-delete">
            <ImBin onClick={handleDeleteCardModal} />
          </div>
        </div>
      </div>
      <div className="card-description">
        {cardInfos.description}
      </div>
      <div className="card-drinks">
        <div className="card-drinks-header">
          <div className="card-drinks-header-desc">Nos boissons</div>
          <div className="card-drinks-header-add">+</div>
        </div>
        {cardInfos.drinks_card.map((drink) => (
          <div
            key={drink.id}
            className="card-drinks-drink"
          >
            <div className="card-drinks-drink-header">
              <div className="card-drinks-drink-header-elements">
                <div className="card-drinks-drink-header-elements-title">
                  {drink.title}
                </div>
                <div className="card-drinks-drink-header-elements-price">
                  {drink.price}
                </div>
              </div>
              <div className="card-drinks-drink-header-options">
                <div className="card-drinks-drink-header-options-update">
                  <ImPencil2 />
                </div>
                <div className="card-drinks-drink-header-options-delete">
                  <ImBin />
                </div>
              </div>
            </div>
            <div className="card-drinks-drink-description">
              {drink.description}
            </div>
          </div>
        ))}
      </div>
      <div className="card-foods">
        <div className="card-foods-header">
          <div className="card-foods-header-desc">Nos plats</div>
          <div className="card-foods-header-add">+</div>
        </div>
        {cardInfos.foods_card.map((food) => (
          <div
            key={food.id}
            className="card-foods-food"
          >
            <div className="card-foods-food-header">
              <div className="card-foods-food-header-elements">
                <div className="card-foods-food-header-elements-title">
                  {food.title}
                </div>
                <div className="card-foods-food-header-elements-price">
                  {food.price}
                </div>
              </div>
              <div className="card-foods-food-header-options">
                <div className="card-foods-food-header-options-update">
                  <ImPencil2 />
                </div>
                <div className="card-foods-food-header-options-delete">
                  <ImBin />
                </div>
              </div>
            </div>
            <div className="card-foods-food-description">
              {food.description}
            </div>
          </div>
        ))}
      </div>
      {openUpdateCardModal && <UpdateCardModal />}
      {openDeleteCardModal && <DeleteCardModal />}
    </div>
  );
};

Card.propTypes = {
  cardsName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onClickUpdateCardModal: PropTypes.func.isRequired,
  onClickDeleteCardModal: PropTypes.func.isRequired,
  setCardDeleteSuccessToFalse: PropTypes.func.isRequired,
  openUpdateCardModal: PropTypes.bool.isRequired,
  openDeleteCardModal: PropTypes.bool.isRequired,
  cardDeleteSuccess: PropTypes.bool.isRequired
};

export default Card;
