// Import React (Mandatory Step).
import React from 'react';

// Créez notre composant Button en tant que composant fonctionnel.
const Button = (props) => {
  return (
    <input
      type="button"
      value={props.label}
      onClick = {props.handleClick}
    />
  );
}

// Export our button component.
export default Button;
