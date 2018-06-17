import React from 'react';
import { connect } from 'react-redux';
// actions
import { siteSetTerm } from '../../redux/actions/set-term';

class SearchBar extends React.Component {

  constructor(props){
    super(props);

    this.state = { term: '' };
  }

  onInputChange(e) {
    this.setState({
      term: e.target.value
    })
  }

  onFormSubmit =  (e) => {
    e.preventDefault();
    this.props.siteSetTerm(this.state.term);
  }
  
  render(){

    return (
      <form action="" className="input-group" onSubmit={(e) => this.onFormSubmit(e)}>
        <input
          placeholder="Search for a city"
          className="form-control"
          value={this.state.term}
          onChange={(e) => this.onInputChange(e)}
          type="text" />
        <span className="input-group-btn">
          <button type="submit" className="btn btn-secondary">
            Search
            </button>
        </span>
      </form>
    )
  }

}

const mapDispatchToProps = (dispatch) => {
  return {
    siteSetTerm: (term) => dispatch(siteSetTerm(term)),
  }
}

export default connect(null, mapDispatchToProps)(SearchBar);

