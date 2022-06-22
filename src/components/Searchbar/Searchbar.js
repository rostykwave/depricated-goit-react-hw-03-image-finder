import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { ReactComponent as SearchIcon } from '../../icons/search.svg';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    const { name, value } = e.currentTarget;
    this.setState({ [name]: value });
  };

  handleSubmit = e => {
    e.preventDefault();

    this.props.onSubmit(this.state);

    // this.reset;
  };

  //       reset = () => {
  //     this.setState({
  //       searchQuery: '',
  //     });
  //   };

  render() {
    return (
      <header className={s.Searchbar}>
        <form onSubmit={this.handleSubmit} className={s.SearchForm}>
          <button type="submit" className={s['SearchForm-button']}>
            <span className={s['SearchForm-button-label']}>Search</span>
            <SearchIcon />
          </button>

          <input
            onChange={this.handleChange}
            name="searchQuery"
            className={s['SearchForm-input']}
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

Searchbar.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

export default Searchbar;
