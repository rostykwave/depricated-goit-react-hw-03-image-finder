import { Component } from 'react';
import s from './Searchbar.module.css';
import PropTypes from 'prop-types';
import { MdOutlineSearch } from 'react-icons/md';
import { toast } from 'react-toastify';

class Searchbar extends Component {
  state = {
    searchQuery: '',
  };

  handleChange = e => {
    this.setState({ searchQuery: e.currentTarget.value.toLowerCase() });
    // const { name, value } = e.currentTarget;
    // this.setState({ [name]: value.toLowerCase() });
  };

  handleSubmit = e => {
    e.preventDefault();

    if (this.state.searchQuery.trim() === '') {
      // alert('enter your query in searchfield');
      toast.error('Enter your query in searchfield');
      return;
    }

    this.props.onSubmit(this.state.searchQuery);

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
            <MdOutlineSearch size={22} />
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
