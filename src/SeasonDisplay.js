import './SeasonDisplay.css';
import React from 'react';
const seasonConfig = {
  Summer: {
    text: 'Lets hit the Beach',
    iconName: 'sun'
  },
  Winter: {
    text: 'Burr it is chilly',
    iconName: 'snowflake'
  }
};

const getSeason = (lat, month) => {
  if (month > 3 && month < 9) {
    return lat > 0 ? 'Summer' : 'Winter';
  } else {
    return lat > 0 ? 'Winter' : 'Summer';
  }
};

const SeasonDisplay = props => {
  console.log('uday location : ', props.latitude);
  const season = getSeason(props.latitude, new Date().getMonth());
  const { text, iconName } = seasonConfig[season];

  return (
    <div className={`season-display ${season}`}>
      <i className={`icon-left massive ${iconName} icon`} />
      <h1>{text}</h1>
      <i className={`icon-right massive ${iconName} icon`} />
    </div>
  );
};

export default SeasonDisplay;
