import React from 'react';
import './App.css';
import Contato from './components/02-Organisms/Contato';
import { TableHeaders } from './components/02-Organisms/TableHeaders'
import api from './Api';
import SearchBar from './components/01-Molecules/SearchBar';
import SortButton from "./components/01-Molecules/SortButton";

class App extends React.Component {

  state = {
    contatos: [],
  }

  async componentDidMount() {
    const response = await api.get();
    this.setState({
      contatos: response.data,
    });
  }

  componentDidUpdate() {
  }

  render() {

    const {contatos} = this.state;

    return (
      <div>
        <div className="center-elements">
          <div className="search-bar">
            <SearchBar iconName="fa fa-search fa-2x" placeholder="name..."/>
            <SortButton textAction="Nome" />
            <SortButton textAction="Telefone"/>
            <SortButton textAction="País" />
            <SortButton textAction="Data Admissão"/>
            <SortButton textAction="Empresa" />
            <SortButton textAction="Departamento" />
          </div>
        </div> 
        <div>
          <TableHeaders tituloNome="Nome"
                        tituloTelefone="Telefone"
                        tituloPais="País"
                        tituloDataAdmissao="Data Admissão"
                        tituloEmpresa="Empresa"
                        tituloDepartamento="Departamento"
                        />
        </div>
        <div>
          {contatos.map( contato => (
            <Contato contatoName={contato.name} 
                     contatoFone={contato.phone}
                     contatoImage={contato.avatar}
                     contatoPais={contato.country}
                     contatoDataAdmissao={contato.admissionDate}
                     contatoEmpresa={contato.company}
                     contatoDepartamento={contato.department}/>
          ))}
          </div>
      </div>
    );
  }
  
}

export default App;
