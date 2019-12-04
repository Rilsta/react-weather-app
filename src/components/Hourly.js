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
                    {this.props.hourlyTemp}
                </ul>
            </div>
        )
    }
}

export default Hourly;