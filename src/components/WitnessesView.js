import React, { Component } from 'react';
import { connect } from 'react-redux';
import WitnessView from './WitnessView';


class WitnessesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    console.log("Inside render: ", this.props.witnessInfo)
    const displayWitnesses = (witnesses) => {
      const witnessArray = witnesses.map(item => {
        return (
          <WitnessView title={item.title} description={item.description} id={item.id} key={item.id} />
        )
      })
      return witnessArray
    }
    return (
      <div>
        {displayWitnesses(this.props.witnessInfo)}
      </div>
    )
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof PersonCreation
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    witnessInfo: state.witnessInfo,
    witnessesInfo: state.witnessesInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof PersonCreation
 * @private
 */
const mapDispatchToProps = dispatch => ({

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(WitnessesView);
