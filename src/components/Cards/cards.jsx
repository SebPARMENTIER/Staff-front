import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';

import AddNewCardModal from '../../containers/AddNewCardModal';
import Loading from '../../components/Loading/loading';

import './cards.scss';

const Cards = ({
  cardsName,
  onClickAddNewCardModal,
  openAddNewCardModal,
  isLoading
}) => {
  // Open addNewCardModal
  const handleAddNewCardModal = () => {
    onClickAddNewCardModal();
  };
  return (
    <div className="cards">
      {isLoading && (
        <div className="cards-loading">
          <Loading />
        </div>
      )}
      {!isLoading && (
        <>
          <div className="cards-desc">Sélectionnez une carte pour voir le détail.</div>
          {cardsName.map((card) => (
            <div
              key={card.id}
              className='cards-list'
            >
              <Link
                className='cards-list-link'
                to={`/card/${card.id}`}
              >
                <div className="cards-list-link-title">
                  {card.title}
                </div>
                <div className="cards-list-link-desc">
                  {card.description}
                </div>
              </Link>
            </div>
          ))}
          <div className="cards-add">
            <button
              className="cards-add-button"
              onClick={handleAddNewCardModal}
            >
              Ajoutez une nouvelle carte
            </button>
          </div>
        </>
      )}
      {openAddNewCardModal && <AddNewCardModal />}
    </div>
  );
};

Cards.propTypes = {
  cardsName: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired
    }).isRequired,
  ).isRequired,
  onClickAddNewCardModal: PropTypes.func.isRequired,
  openAddNewCardModal: PropTypes.bool.isRequired,
  isLoading: PropTypes.bool.isRequired
};

export default Cards;
