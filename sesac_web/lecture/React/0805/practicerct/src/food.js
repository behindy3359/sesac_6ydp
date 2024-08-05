import React from 'react';
import PropTypes from 'prop-types';

class foodComponent extends React.Component {

    render() {
        return(
          <>
            <p> 
              음식 이름은<span className='food-props'>{this.props.name}</span>
            </p>
            <span> 맛있어요 </span>
          </>
        )
    }

    static defaultProps = {
        name: 'food(default)',
    }

    static propTypes = {
        name: PropTypes.string,
    }

}


export default foodComponent;