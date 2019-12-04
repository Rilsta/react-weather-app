import React from 'react';


class Hourly extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            value: null
        }
    }
    render() {
        return (
            <div className="hourly_container">
                <ul>
                    <div className="list_hours">{this.props.hourlyTemp}</div>
                </ul>
            </div>
        )
    }
}

export default Hourly;