import React from 'react';
import { connect } from 'react-redux';
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

    const { weather_data, isLoading, hasError } = this.props.site;

    if (isLoading) {
      return (
        <div className="custom-loader">
          isLoading 
        </div>
      )
    }

    if (hasError) {
      return (<div>error...</div>)
    }
    
    return (
      <div className='container' style={{marginTop: '50px'}}>
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

