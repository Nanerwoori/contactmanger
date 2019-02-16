import React from "react";
import PropTypes from "prop-types";

function TextInputGroup({
  label,
  name,
  value,
  placeholder,
  type,
  onChange,
  error
}) {
  return (
    <div className="input-field ">
      <input
        placeholder={placeholder}
        type={type}
        value={value}
        name={name}
        onChange={onChange}
        className="validate"
      />
      <label>{label}</label>
      {error && (
        <span className="helper-text" data-error={error} data-success="right">
          {error}
        </span>
      )}
    </div>
  );
}

TextInputGroup.propTypes = {
  label: PropTypes.string,
  name: PropTypes.string.isRequired,
  value: PropTypes.string.isRequired,
  placeholder: PropTypes.string.isRequired,
  type: PropTypes.string.isRequired,
  onChange: PropTypes.func.isRequired
};

TextInputGroup.defaultProps = {
  type: "text"
};

export default TextInputGroup;
