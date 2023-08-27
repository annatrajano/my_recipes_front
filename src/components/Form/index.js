// FormInput = Component to render form input

// #  Main Imports
import React, { useState } from "react";

// # Import Component Style
import styles from "./FormInput.module.css"


export default function FormInput(props) {
  const [focused, setFocused] = useState(false);
  const {
    label,
    errorMessage,
    onChange,
    onKeyDown,
    id,
    placeholder,
    disabled,
    rows,
    cols,
    pattern,
    maxlength,
    ...inputProps
  } = props;

  const handleFocus = (e) => {
    setFocused(true);
  };

  if (inputProps.type === "select") {
    return (
        <div className={styles.formInput__container}>
        <label className="label-input-component">{placeholder}</label>
        <select
          {...inputProps}
          onChange={(e) => onChange(e)}
          className="select-input-component"
        >
          {inputProps.options.map((option, index) => (
            <option
              key={option.index}
              value={option.value}
              disabled={option.disabled}
              selected={option.selected}
            >
              {option.label}
            </option>
          ))}
        </select>
      </div>
    );
  } else if (inputProps.type === "textarea" ) {
    return (
      <div className={styles.formInput__container}>
        <label className="label-input-component">{label}</label>
        <textarea
          {...inputProps}
          onChange={onChange}
          placeholder={placeholder}
          disabled={disabled}
          rows={rows}
          cols={cols}
          maxlength={maxlength}
          required
          className="input-component textarea"
        />
      </div>
    );
  } else {
    return (
        <div className={styles.formInput__container}>
        <label className="label-input-component">{label}</label>
        <input
          {...inputProps}
          onChange={onChange}
          onBlur={handleFocus}
          focused={focused.toString()}
          placeholder={placeholder}
          disabled={disabled}
          pattern={pattern}
          onKeyDown={ onKeyDown? onKeyDown: ""}
          required
          className="input-component"
        />
        <p className="p-input-component">{errorMessage}</p>
      </div>
    );
  }
}

