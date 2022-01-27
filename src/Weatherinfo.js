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
                            <h2>{props.temperature} ºC<img src={`http://openweathermap.org/img/wn/${props.icon}@2x.png`} /></h2>
                            
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

