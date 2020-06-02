import React from 'react';
import { connect } from 'react-redux';
import { fetchSmurf } from '../actions/smurfAction';

const Smurfy = props => {
  return(
    <div key="top">
      
      <button 
        onClick={() => props.fetchSmurf()}>Get Smurfs</button>

        <div key="middle"> 
          {props.smurfs.map(smurf => {
            return (
              <div key={`bottom-${smurf.id}`}>
                <h2 key={`name-${smurf.id}`}>{`Name: ${smurf.name}`}</h2>
                <h2 key={`height-${smurf.id}`}>{`Height: ${smurf.height}`}</h2>
                <h2 key={`age-${smurf.id}`}>{`Age: ${smurf.age}`}</h2>                
              </div>
            )
          })}
        </div>

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