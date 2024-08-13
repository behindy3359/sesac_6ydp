import React from 'react'
import '../styles/TrafficSign.scss'


const TrafficSign = () => {
  return (
    <div>
      <div className='styled-container'>
        <div className='styled-ball red-ball'></div>
        <div className='styled-ball yellow-ball'></div>
        <div className='styled-ball green-ball'></div>
      </div>
    </div>
  )
}

export default TrafficSign;
