import react from "react";

let ico = (icon) =>{
    console.log(icon)
    if(icon == "01d"){
        return "☀️";
    }else if(icon == "02d"){
        return "⛅";
    }else if(icon == "03d" || icon == "03n"){
        return "☁️";
    }else if(icon == "04d" || icon == "04n"){
        return "☁️☁️";
    }else if(icon == "09d" || icon == "019n"){
        return "🌧️";
    }else if(icon == "010d"){
        return "🌦️";
    }else if(icon == "011d" || icon == "011n"){
        return "🌩️";
    }else if(icon == "013d" || icon == "013n"){
        return "❄️";
    }else if(icon == "050d" || icon == "050n"){
        return "🌫️";
    }else if(icon == "01n"){
        return "🌑";
    }else if(icon == "02n"){
        return "🌑☁️";
    }else if(icon == "010n"){
        return "🌑🌧️";
    }
}
const WeatherInfo = (props) => {
    console.log(props)
    return(
        <div>
            {
                props.error &&
                <div className="alert alert-danger">
                    <p>{props.error}</p>
                </div>
            }
            {
                props.temperature ? 
                <div className="card card-body">
                    <table class="table table-hover">
                        <tr>
                            <td style={{border: "0"}}>
                            <h1>{props.city}, {props.country}</h1>
                            <h2>{props.temperature} ºC {ico(props.icon)}</h2>
                            {/* {<h2>{props.temperature} ºC<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} /></h2>} */}
                            
                            </td>
                            <td style={{border: "0"}}>
                                <h3><small class="text-muted">{props.description}</small></h3>
                                <p>Humidity: {props.humidity}</p>
                                <p>Wind Speed: {props.wind_speed}</p>
                            </td>
                        </tr>
                    </table>
                </div>
                :
                <div className="card card-body">
                    No Request yet
                </div>
            }
        </div>
        
    )
}

export default WeatherInfo;

