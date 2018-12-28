import React, { Component } from 'react';
import { connect } from 'react-redux';
import WitnessView from './WitnessView';
import WitnessCreation from "./WitnessCreation";


class WitnessesView extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const displayWitnesses = (witnesses) => {
      const witnessArray = witnesses.map(item => {
        const wit = this.props.witnessesInfo.find((wit) => wit.id === item.id)
        const manifest = item.proposedChange ? item.proposedChange.manifest : item.manifest;
        if (wit){
          const title = wit.proposedChange ? wit.proposedChange.title : wit.title;
          const description = wit.proposedChange ? wit.proposedChange.description : wit.description;

          return (
            <WitnessView title={title} description={description} id={item.id} key={item.id} manifest={manifest}/>
          )
        }
        else{
          return (
            <WitnessView title={item.title} description={item.description} id={item.id} key={item.id} manifest={manifest} />
          )
        }
      })
      return witnessArray
    }
    return (
      <div>
        <h3>Witness Info</h3>
        {displayWitnesses(this.props.witnessInfo)}
        <WitnessCreation/>

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
