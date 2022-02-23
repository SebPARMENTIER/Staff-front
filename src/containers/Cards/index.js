import { connect } from "react-redux";

import Cards from "../../components/Cards/cards";

const mapStateToProps = (state) => ({
  cardsName: state.cards.cardsName
});

export default connect(mapStateToProps)(Cards);
