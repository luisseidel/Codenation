import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article className="contact">
        <img className="contact__avatar" src={this.props.contatoImage} alt={this.props.contatoAltImage} />
        <h4 className="contact__data">{this.props.contatoName}</h4>
        <h4 className="contact__data">{this.props.contatoFone}</h4>
        <h4 className="contact__data">{this.props.contatoPais}</h4>
        <h4 className="contact__data">{this.props.contatoDataAdmissao}</h4>
        <h4 className="contact__data">{this.props.contatoEmpresa}</h4>
        <h4 className="contact__data">{this.props.contatoDepartamento}</h4>
      </article>
    );
  }
}

export default Contact;
