import React from "react";
import Contact from './Contact';

class Contacts extends React.Component {

	render() {

    const list = this.props.contactList;

		return (
		    <div data-testid="contacts" className="container">
          <section className="contacts">
            <article className="contact">
              <span data-testid="contact-name" className="contact__avatar" />
              <span className="contact__data">Nome</span>
              <span className="contact__data">Telefone</span>
              <span className="contact__data">País</span>
              <span className="contact__data">Admissão</span>
              <span className="contact__data">Empresa</span>
              <span className="contact__data">Departamento</span>
            </article>

            {
              (list != null && list ? list.map((contato) => <Contact    key={contato.id}
                                               name={contato.name} 
                                               phone={contato.phone}
                                               contatoImage={contato.avatar}
                                               country={contato.country}
                                               admissionDate={contato.admissionDate}
                                               company={contato.company}
                                               department={contato.department}/> ) : [])
            }

          </section>
        </div>
		);
	}
}

export default Contacts;
