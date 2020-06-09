import React from "react";
import {Card, CardImage, CardText, CardBody} from '../00-Atoms/Card'; 
import { FormGroup } from '../00-Atoms/FormGroup'
import './Contato.css';


class Contato extends React.Component {
    constructor(props) {
        super(props);
        this.props = props;
    }

    render() {
        return(
            <FormGroup>
                <Card key={this.props.id}>
                    <CardImage image={this.props.contatoImage} alt={this.props.contatoAltImage}/>
                    <CardBody>
                        <CardText contatoInfo={this.props.contatoName}/>
                        <CardText contatoInfo={this.props.contatoFone}/>
                        <CardText contatoInfo={this.props.contatoPais}/>
                        <CardText contatoInfo={this.props.contatoDataAdmissao}/>
                        <CardText contatoInfo={this.props.contatoEmpresa}/>
                        <CardText contatoInfo={this.props.contatoDepartamento}/>
                    </CardBody>
                </Card>
            </FormGroup>
        );
    }
}

export default Contato;