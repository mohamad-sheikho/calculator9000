
import React from 'react';

// Composant fonctionnel.
// Utilisé pour afficher Question/Réponse.
const OutputScreenRow = (props) => {
  return (
    <div className="screen-row">
      <input type="text" readOnly value = {props.value}/>
    </div>
  )
}

// Export Output Screen Row.
export default OutputScreenRow;
