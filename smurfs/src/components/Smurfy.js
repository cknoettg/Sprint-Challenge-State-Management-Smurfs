import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/smurfAction';

const Smurfy = props => {
  return(
    <div>
      {!props.name && props.fetchingSmurfs && (
        <h2>Find a Smurf</h2>
      )}

      <button 
        onClick={() => props.fetchSmurf()}>Get a Smurf</button>

        {props.smurfs
          &&
        !props.fetchingSmurfs
          &&
        <div>
          {props.smurfs.map(smurf => {
            return (
              <div key={smurf}>
                <h2 key={smurf.name}>{`Name: ${smurf.name}`}</h2>
                <h2 key={smurf.age}>{`Age: ${smurf.age}`}</h2>
                <h2 key={smurf.height}>{`Height: ${smurf.height}`}</h2>
              </div>
            )
          })}
        </div>
      }

    </div>
  )
}

const mapStateToProps = state => {
  return{
    smurfs: state.smurfs,
    fetchingSmurfs: state.fetchingSmurfs    
  }
}

export default connect(mapStateToProps,{ fetchSmurf })(Smurfy);