import React from 'react';

const Hourly = (props) => (
    <div className="hourly_container">
        <ul>
            {props.hourlyTemp}
        </ul>
    </div>
)

export default Hourly;