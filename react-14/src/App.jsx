import React from 'react';
import { ReactComponent as LogoSvg } from "./assets/img/logo.svg";
import Contacts from './components/Contacts';
import api from './Api';
import Filters from './components/Filters';
import Topbar from './components/Topbar';
import './App.scss';

class App extends React.Component {

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

  onChangeHandler(e) {
    this.setState({
      input: e.target.value
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

    const list = this.state.contatos.filter(contato => this.state.input === '' || contato.name.includes(this.state.input)); 

    return (
      <div data-testid="app" className="app">
        <Topbar />

        <Filters >
          
              <div className="filters__search">
                <input type="text" className="filters__search__input" placeholder="Pesquisar" onChange={this.onChangeHandler.bind(this)} />

                <button className="filters__search__icon">
                  <i className="fa fa-search"/>
                </button>
              </div>

              <button className="filters__item is-selected" onClick={this.sortByName}>
                Nome <i className="fas fa-sort-down" />
              </button>

              <button className="filters__item" onClick={this.sortByCountry}>
                País <i className="fas fa-sort-down" />
              </button>

              <button className="filters__item" onClick={this.sortByCompany}>
                Empresa <i className="fas fa-sort-down" />
              </button>

              <button className="filters__item" onClick={this.sortByDepartment}>
                Departamento <i className="fas fa-sort-down" />
              </button>

              <button className="filters__item" onClick={this.sortByDate}>
                Data de admissão <i className="fas fa-sort-down" />
              </button>
        </Filters>

        <Contacts contactList={list} />
        
      </div>
    )
  }
}

export default App;
