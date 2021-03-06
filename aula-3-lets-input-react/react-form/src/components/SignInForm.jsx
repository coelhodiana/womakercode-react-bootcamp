import React from 'react'
import FormInput from './FormInput'

export class SignInForm extends React.Component {
    constructor(props) {
        super();
        this.state = {
            nome: "",
            cidade: "",
            mail: "",
            cpf: "",
            telefone: ""
        };
    }

	handleInputChange = (name, value) => this.setState({ [name]: value });

	validateEmail = mail => mail.includes("@") && mail.includes(".");

	handleFormSubmit = event => { 
	event.preventDefault();
	const { nome, cidade, mail, cpf, telefone } = this.state;
    if (!this.validateEmail(mail)) { 
    	return alert("Por favor insira um e-mail válido.");
    }

    if (!nome  || !cidade || !mail || !cpf || !telefone) {
      return alert("por favor, preencha todos os campos");
    }
  };

    render() {
    console.log(this.state)
        return (
            <form className="form-alunas" onSubmit={this.handleFormSubmit}>
                <h1>Cadastro de alunas</h1>

                <FormInput
                    name='nome'
                    label="Nome completo"
                    type="text"
                    value={this.state.nome}
                    onChange={this.handleChange}
                    />

                <FormInput
                    name='cidade'
                    label="Cidade"
                    type="text"
                    value={this.state.cidade}
                    onChange={this.handleChange}
                />

                <FormInput
                    name='mail'
                    label="Email"
                    // type="email"
                    value={this.state.mail}
                    onChange={this.handleChange}
                />

                <FormInput
                    name='cpf'
                    label="CPF"
                    placeholder="000.000.000-00"
                    value={this.state.cpf}
                    onChange={this.handleChange}
                />

                <FormInput
                    name='telefone'
                    label="Telefone"
                    placeholder="(XX) X XXXX-XXXX"
                    value={this.state.tefone}
                    onChange={this.handleChange}
                />

                <button type="submit" className="form-button">Inscrever</button>
            </form>

        )
    }
}

export default SignInForm;

