// Import React (Mandatory Step).
import React from 'react';

// Créer un composant fonctionnel.
// Prend le titre comme props.value.
const CalculatorTitle = (props) => {
  return (
    <div className="calculator-title">
      { props.value }
    </div>
  )
}

// Export Calculator Title.
export default CalculatorTitle;
