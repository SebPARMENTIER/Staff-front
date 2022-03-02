import { Link } from "react-router-dom";

import './error.scss'

const Error = () => {
  return (
    <div className="error">
      <div className="error-404">
        404
      </div>
      <div className="error-desc">
        Page non trouvée
      </div>
      <div className="error-link">
        <Link
          to='/'
          className="error-link-home">
          Retour à l'acceuil
        </Link>
      </div>
    </div>
  );
};

export default Error;
