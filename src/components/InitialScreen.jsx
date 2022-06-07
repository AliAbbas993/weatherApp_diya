import React from 'react'
import cityImg from '../assets/media/city_Image.png';

const InitialScreen = (props) => {
    return (
        <div className='add-city-block'>
            <h3>{props.city ? props.city : "Add City"}</h3>
            <div className='add-city-field'>
                {props.showSelect ? 
                <div className='form-group'>
                    <label className='form-label w-100'>Select City</label>
                    <select className='form-control' onChange={(e) => props.handleCityChange(e)}>
                        <option>Select City</option>
                        <option value="karachi">Karachi</option>
                        <option value="lahore">Lahore</option>
                        <option value="islamabad">Islamabad</option>
                    </select>
                </div>
                : 
                    <button type="button" className='btn btn-light' onClick={() => {props.setShowSelect(true)}}><i className="fa fa-plus" aria-hidden="true"></i></button>
                }
            </div>
            <div className="city-img">
                <img src={cityImg} className="w-100" alt="city"/>
            </div>
        </div>
    )
}

export default InitialScreen;