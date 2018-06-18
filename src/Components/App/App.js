import React from 'react';
import { connect } from 'react-redux';
// style
import './App.css';
// components
import SearchBar from '../SearchBar/SearchBar';
import Weather from '../Data/Weather';
// actions
import { getDefaulWeatherData } from '../../redux/actions/get-weather-data';

class App extends React.Component {

  constructor(props){
    super(props);

  }

  componentDidMount(){
    const { getDefaulWeatherData } = this.props;
    getDefaulWeatherData('New York');
    getDefaulWeatherData('Tel Aviv Yafo');
  }

  
  render(){

    const { weather_data } = this.props.site;

    return (
      <div>
        <SearchBar/>
        <Weather data={weather_data}/>
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

