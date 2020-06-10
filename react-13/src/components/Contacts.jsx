import React from "react";
import api from '../Api';
import Contact from './Contact';

class Contacts extends React.Component {

  state = {
    contatos: [],
    input: '',
    isSorted: false
  }

  async componentDidMount() {
    const response = await api.get();
    this.setState({
      contatos: response.data,
      contatosFiltrados: response.data
    })
  } 
  
	render() {

    const list = this.state.contatos;

		return (
		    <div className="container">
          <section className="contacts">
            <article className="contact">
              <span className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>

            {list.map((contato) => <Contact key={contato.id}
                                               contatoName={contato.name} 
                                               contatoFone={contato.phone}
                                               contatoImage={contato.avatar}
                                               contatoPais={contato.country}
                                               contatoDataAdmissao={contato.admissionDate}
                                               contatoEmpresa={contato.company}
                                               contatoDepartamento={contato.department}/> )
            }
          </section>
        </div>
		);
	}
}

export default Contacts;
