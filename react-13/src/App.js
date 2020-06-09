import React from 'react';
import './App.css';
import Contato from './components/02-Organisms/Contato';
import { TableHeaders } from './components/02-Organisms/TableHeaders'
import api from './Api';

class App extends React.Component {

  state = {
    contatos: [],
    input: '',
    isSorted: false,
  }

  async componentDidMount() {
    const response = await api.get();
    this.setState({
      contatos: response.data,
      contatosFiltrados: response.data
    });
  }

  onChangeHandler(e) {
    this.setState({
      input: e.target.value,
    })
  }

  sortByName = () => {
    let contatosOrdenados = this.state.contatos;
    let isOrdenado = !this.state.isSorted;

    if (!this.state.isSorted) {
      contatosOrdenados = this.state.contatos.sort( (a, b) => (a.name > b.name ? 1 : -1) )
    } else {
      contatosOrdenados = this.state.contatos.sort( (a, b) => (a.name > b.name ? -1 : 1) )
    }

    this.setState({
      contatos: contatosOrdenados,
      isSorted: isOrdenado
    });
  }

  sortByPhone = () => {

    let contatosOrdenados = this.state.contatos;
    let isOrdenado = !this.state.isSorted;

    if (!this.state.isSorted) {
      contatosOrdenados = this.state.contatos.sort((a, b) => (a.phone > b.phone ? 1 : -1) );
    } else {
      contatosOrdenados = this.state.contatos.sort((a, b) => (a.phone > b.phone ? -1 : 1) );
    }

    this.setState({
      contatos: contatosOrdenados,
      isSorted: isOrdenado,
    })
  }

  sortByCountry = () => {
    
    let contatosOrdenados = this.state.contatos;
    let isOrdenado = !this.state.isSorted;

    if (!this.state.isSorted) {
      contatosOrdenados = this.state.contatos.sort((a, b) => (a.country > b.country ? 1 : -1) )
    } else {
      contatosOrdenados = this.state.contatos.sort((a, b) => (a.country > b.country ? 1 : -1) )
    }
    
    this.setState({
      contatos: contatosOrdenados,
      isSorted: isOrdenado,
    })
  }

  sortByDate = () => {

    let contatosOrdenados = this.state.contatos;
    let isOrdenado = !this.state.isSorted;

    if (!this.state.isSorted) {
      contatosOrdenados = this.state.contatos.sort((a, b) => (a.admissionDate > b.admissionDate ? 1 : -1) )
    } else {
      contatosOrdenados = this.state.contatos.sort((a, b) => (a.admissionDate > b.admissionDate ? 1 : -1) )
    }

    this.setState({
      contatos: contatosOrdenados,
      isSorted: isOrdenado
    })
  }

  sortByCompany = () => {

    let contatosOrdenados = this.state.contatos;
    let isOrdenado = !this.state.isSorted;

    if (!this.state.isSorted) {
      this.state.contatos.sort((a, b) => (a.company > b.company ? 1 : -1) )
    } else {
      this.state.contatos.sort((a, b) => (a.company > b.company ? 1 : -1) )
    }

    this.setState({
      contatos: contatosOrdenados,
      isSorted: isOrdenado,
    })
  }

  sortByDepartment = () => {

    let contatosOrdenados = this.state.contatos;
    let isOrdenado = !this.state.isSorted;

    if (!this.state.isSorted) {
      this.state.contatos.sort((a, b) => (a.department > b.department ? 1 : -1) ) 
    } else {
      this.state.contatos.sort((a, b) => (a.department > b.department ? 1 : -1) ) 
    }

    this.setState({
      contatos: contatosOrdenados,
      isSorted: isOrdenado,
    })
  }

  render() {

    const list = this.state.contatos
                 .filter(contato => this.state.input === '' || contato.name.includes(this.state.input))
                 .map((contato) => <Contato key={contato.id}
                              contatoName={contato.name} 
                              contatoFone={contato.phone}
                              contatoImage={contato.avatar}
                              contatoPais={contato.country}
                              contatoDataAdmissao={contato.admissionDate}
                              contatoEmpresa={contato.company}
                              contatoDepartamento={contato.department}/> );

    return (
      <div>
        <div className="center-elements">
          <div className="search-bar">
            <input type="text" className="filterByName" placeholder="Filter by name..." onChange={this.onChangeHandler.bind(this)}/>
            <button onClick={this.sortByName}       className="sortButton">Nome</button>
            <button onClick={this.sortByPhone}      className="sortButton">Telefone</button>
            <button onClick={this.sortByCountry}    className="sortButton">Pais</button>
            <button onClick={this.sortByDate}       className="sortButton">Data</button>
            <button onClick={this.sortByCompany}    className="sortButton">Empresa</button>
            <button onClick={this.sortByDepartment} className="sortButton">Departamento</button>
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
          {list}  
        </div>
      </div>
    );
  }
  
}

export default App;
