import PropTypes from 'prop-types';
import './field.scss';

const Field = ({
  value,
  type,
  name,
  placeholder,
  onChange,
  className,
}) => {
  const handleChange = (event) => {
    onChange(event.target.value, name);
  };

  const inputId = `field-${name}`;
  const style = `inputs-field ${className}`;

  return (
    <div>
      <input
        required
        className={style}
        value={value}
        onChange={handleChange}
        id={inputId}
        type={type}
        placeholder={placeholder}
        name={name}
      />
    </div>
  );
};

Field.propTypes = {
  value: PropTypes.string,
  type: PropTypes.string,
  name: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired,
  className: PropTypes.string.isRequired,
};

Field.defaultProps = {
  value: '',
  type: '',
};

export default Field;
