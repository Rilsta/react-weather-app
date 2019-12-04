import React from 'react';
import Weekday from './WeekDay';
import Hourly from './Hourly';


class WeatherCard extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            opened: false,
        }
        this.toggleHourly = this.toggleHourly.bind(this);
        // what does bind do?
    }

    toggleHourly() {
        const { opened } = this.state;
        this.setState({
            opened: !opened,
            //what does the ! do?
        })
    }

    render() {

        var { title, children } = this.props;
		const { opened } = this.state;

		if (opened){
			title ='Hide Hourly';
		}else{
			title ='Show Hourly';
		}

        return (
            <div className="weather_card_container" onClick={this.toggleHourly}>
                <Weekday
                    weekday={this.props.weekday}
                    picture={this.props.picture}
                    highTemp={this.props.highTemp}
                    lowTemp={this.props.lowTemp}
                />
                
                {title}

                {opened && (					
					<div class="boxContent">
						{children}
					</div>
				)}
            </div>
        )
    }
}

export default WeatherCard