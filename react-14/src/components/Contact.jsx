import React from 'react';

class Contact extends React.Component {
  render() {
    return (
      <article data-testid="contact" className="contact">
        <img className="contact__avatar" src={this.props.contatoImage} alt={this.props.contatoAltImage} />
        <h4 data-testid="contact-name" className="contact__data">{this.props.name}</h4>
        <h4 data-testid="contact-phone"className="contact__data">{this.props.phone}</h4>
        <h4 data-testid="contact-country" className="contact__data">{this.props.country}</h4>
        <h4 data-testid="contact-date" className="contact__data">{this.props.admissionDate}</h4>
        <h4 data-testid="contact-company" className="contact__data">{this.props.company}</h4>
        <h4 data-testid="contact-department" className="contact__data">{this.props.department}</h4>
      </article>
    );
  }
}

export default Contact;
