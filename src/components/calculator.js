// Imports.
import React from 'react';
import CalculatorTitle from './calculatorTitle.js';
import OutputScreen from './outputScreen.js';
import Button from './button.js';

class Calculator extends React.Component {

  constructor() {
  super();
  // définir notre état par défaut
  this.state = {
    question: '',
    answer: ''
  }

// Lie notre méthode handleClick (définit 'this' explicitement
// pour faire référence à ce composant) Nous l'avons fait parce que 'ceci'
// ferait référence à la source des événements de clic
  this.handleClick = this.handleClick.bind(this);
}


    render()
    {
    return (
    <div className="frame">
    <CalculatorTitle value="Calculator 9000"/>
    <div class="mainCalc">
    <OutputScreen answer = {this.state.answer} question = {this.state.question}/>
    <div className="button-row">
      <Button label={'Clear'} handleClick = {this.handleClick}/>
      <Button label={'Delete'} handleClick = {this.handleClick}/>
      <Button label={'.'}  handleClick = {this.handleClick}/>
      <Button label={'/'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'7'} handleClick = {this.handleClick}/>
      <Button label={'8'} handleClick = {this.handleClick}/>
      <Button label={'9'} handleClick = {this.handleClick}/>
      <Button label={'*'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'4'} handleClick = {this.handleClick}/>
      <Button label={'5'} handleClick = {this.handleClick}/>
      <Button label={'6'} handleClick = {this.handleClick}/>
      <Button label={'-'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'1'} handleClick = {this.handleClick}/>
      <Button label={'2'} handleClick = {this.handleClick}/>
      <Button label={'3'} handleClick = {this.handleClick}/>
      <Button label={'+'} handleClick = {this.handleClick}/>
    </div>
    <div className="button-row">
      <Button label={'0'} handleClick = {this.handleClick} />
      <Button label={'='} handleClick = {this.handleClick}/>
    </div>
    </div>
    </div>
    );
  }

  // la méthode pour gérer tous les événements de clic de nos boutons
  handleClick(event){

    // obtenir la valeur de l'élément cible (bouton)
    const value = event.target.value;

    switch (value) {
      case '=': {
       // si c'est un signe égal, utilisez le module eval
       // pour évaluer la question, convertir la réponse
       // (en nombre) en chaîne
    		if(this.state.question!=='')
        {
    			var ans='';
    		  try
    			{
    				ans = eval(this.state.question);
    			}
    			catch(err)
    			{
    				this.setState({answer: "Math Error"});
    			}
    			if(ans===undefined)
    				this.setState({answer: "Math Error"});
    			// update answer in our state.
    			else
    				this.setState({ answer: ans , question: ''});
    			break;
    		}
      }
      case 'Clear': {
        // si c'est (Clears), nettoyez simplement notre
         // question et réponse en l'état
        this.setState({ question: '', answer: '' });
        break;
      }

	  case 'Delete': {
	    var str = this.state.question;
  		str = str.substr(0,str.length-1);
  		this.setState({question: str});
  		break;
	  }

    default: {
        // pour chaque autre commande, mettez à jour la réponse dans l'état
        this.setState({ question: this.state.question += value})
        break;
      }
    }
  }

}

// Export Calculator Component.
export default Calculator;
