import React from 'react';
import { connect } from 'react-redux';
// style
import './App.css';
// components
import SearchBar from '../SearchBar/SearchBar';
// actions
import { getDefaulWeatherData } from '../../redux/actions/get-weather-data';

class App extends React.Component {

  constructor(props){
    super(props);

    const { default_weather_data } = this.props.site;

    this.state = {
      default_weather_data: default_weather_data,
    }
    console.log(this.props);
  }

  componentDidMount(){
    const { getDefaulWeatherData } = this.props;
    getDefaulWeatherData('New York');
    getDefaulWeatherData('Tel Aviv Yafo');
  }

  
  render(){

    return (
      <div>
        <SearchBar/>
      </div>
    )
  }

}


function mapStateToProps(state){
  return { site: state.site }
}


const mapDispatchToProps = (dispatch) => {
  return {
    getDefaulWeatherData: (city) => dispatch(getDefaulWeatherData(city)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App);

