import React  , {useEffect , useState} from 'react';
import axios from 'axios';
import cloudImg from '../assets/media/cloud_curve.png';
import loading from '../assets/media/loading.gif';

const DataScreen = (props) => {
    const [city , setCity] = useState(props.city);
    const [LatLong , setLatLong] = useState();
    const [data , setData] = useState()

    const getLatLong = async(city) => {
        await axios.get(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=4d18368559f2f1e2aa379630dd5dc135`).then((response) => {
          console.log(response.data[0] , " ===> lat long api data response");
          setLatLong({
            lat: response.data[0].lat,
            lon: response.data[0].lon, 
          })
        }).catch((err) => {
          console.log(err , "  ===> err in weather data fetch api");
        })
    }

    const getWeather = async(LatLong) => {
        await axios.get(`https://api.openweathermap.org/data/2.5/weather?lat=${LatLong.lat}&lon=${LatLong.lon}&limit=1&appid=4d18368559f2f1e2aa379630dd5dc135`).then((response) => {
          console.log(response.data , " ===> weather api data response");
          setData(response.data)
        }).catch((err) => {
          console.log(err , "  ===> err in weather data fetch api");
        })
    }
    
    useEffect(() => {
        getLatLong(city);
    } , [])
    
    useEffect(() => {
        getWeather(LatLong)
    } , [LatLong])

    return (
        <>
            {data ? 
                <div className='weather-data-block'>
                    <h3>{city} <span onClick={() => props.setCity("")}><i class="fa fa-pencil" aria-hidden="true"></i></span></h3>
                    <div className='temperature-data'>
                        <p className='cloud-img'><img src={cloudImg} alt="cloud" /></p>
                        <p className='temperature'>
                            <span className='temp-value'>{data.main.temp}</span>
                            <span className='temp-condition'>{data.weather[0].main}</span>
                        </p>
                    </div>
                    <div className="temperature-minmax">
                        <div className="temp">
                            <span className='icon green'><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                            <p className='value'>{data.main.temp_min}</p>
                            <span className='text green'>Min</span>
                        </div>
                        <div className="temp">
                            <span className='icon red'><i class="fa fa-caret-down" aria-hidden="true"></i></span>
                            <p className='value'>{data.main.temp_max}</p>
                            <span className='text red'>Max</span>
                        </div>
                    </div>
                </div>
                :
                <div className='loading-img'>
                    <img src={loading} alt="loading"/>
                </div>
            }
        </>
    )
}

export default DataScreen;