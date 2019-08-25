import React, { Component } from 'react';
// import { connect } from 'react-redux';
import { handleGetCountries, handleLoader } from '../actions/index';

class HomePage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filter: '',
      listCountries: [],
    };

    this.submitForm = this.submitForm.bind(this);
    this.filterList = this.filterList.bind(this);
    this.setList = this.setList.bind(this);
  }

  submitForm(e) { return e.preventDefault() }

  setList() {}

  filterList(e) {}

  async componentWillMount() {}

  componentWillReceiveProps() {}

  render() {
    return(
      <div className="page--home">
      </div>
    );
  }
}

const mapStateToProps = store => ({
  countries: store.countries.countries,
  categories: store.countries.categories,
  defaultTheme: store.themes.defaultTheme,
});

const mapDispatchToProps = (dispatch) => ({
  getCountries: () => dispatch(handleGetCountries()),
  openLoader: (obj) => dispatch(handleLoader(obj))
});

// export default connect(mapStateToProps, mapDispatchToProps)(HomePage);
export default HomePage;
