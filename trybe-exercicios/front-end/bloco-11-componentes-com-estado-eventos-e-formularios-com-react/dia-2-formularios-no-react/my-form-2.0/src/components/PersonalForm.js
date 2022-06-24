import React from "react";
import State from "../data/State"

const initialState =  {
      name: '',
      email: '',
      cpf: '',
      address: '',
      city: '',
      countryState: '',
      addressType: '',
    }

class PersonalForm extends React.Component {
  constructor() {
    super();
    this.state = initialState;
  }


  validAddress = (address) => address.replace(/[^\w\s]/gi, '');

  hadleChange = ({ target }) => {
    const { name } = target;
    let { value } = target;

    if (name === 'name') value = value.toUpperCase();
    if (name === 'address') value = this.validAddress(value);
    this.setState({
      [name]: value,
    })
  }

  handleOnBlur = ({ target }) => {
    const { name } = target;
    let { value } = target;

    if (name === 'city') value = value.match(/^\d/) ? '' : value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    const { name, address, city } = this.state;
    return (
      <fieldset>
        <legend>Dados Pessoais</legend>
        <label>
          Nome:
          <input
            type="name"
            name="name"
            maxLength="40"
            value={ name }
            required
            onChange={ this.hadleChange }
          />
        </label>
        <label>
          Email:
          <input
            type="email"
            name="email"
            maxLength="50"
            required
            onChange={ this.hadleChange }
          />
        </label>
        <label>
          CPF:
          <input
            type="text"
            name="cpf"
            maxLength="11"
            required
            onChange={ this.hadleChange }
          />
        </label>
        <label>
          Endereço:
          <input
            type="text"
            name="address"
            maxLength="200"
            value={ address }
            required
            onChange={ this.hadleChange }
          />
        </label>
        <label>
          Cidade:
          <input
          type="text"
          name="city"
          maxLength="28"
          value={ city }
          required
          onBlur={ this.handleOnBlur }
          onChange={ this.hadleChange }
          />
        </label>
        <label>
          Estado:
          <select
            name="countryState"
            required
            onChange={ this.hadleChange }
          >
            <option value="">Selecione</option>
            {
              State.map((value, key) => (
                <option key={ key }>{ value }</option>
              ))
            }
          </select>
        </label>
        <label>
          <input
          type="radio"
          id="house"
          name="addressType"
          value="house"
          onChange={ this.hadleChange }
          />Casa
        </label>
        <label>
          <input
          type="radio"
          id="apt"
          name="addressType"
          value="apt"
          onChange={ this.hadleChange }
          />Apartamento
        </label>
      </fieldset>
    );
  }
}

export default PersonalForm;