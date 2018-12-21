import React, { Component } from 'react';
import { connect } from 'react-redux';
import Item from './Item';



class ItemsViewer extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    const displayItems = (targetEdf, edfList) => {
      const edf = edfList.find((edf) => edf.id === targetEdf.id)

      let questionTitles = []
      if (edf){
        if (edf.items){
           questionTitles = edf.items.map((item) => {
             const title = item.proposedChange ? item.proposedChange.title : item.itemTitle.value
             let questionTitle = ""
             const status = item.proposedChange ? "provisional" : "SCTA"
             if (item.proposedChange) {
               questionTitle = item.proposedChange.questionTitle
             }
             else if (item.questionTitle)
             {
              questionTitle = item.questionTitle.value
             }

             const id = item.itemShortId.value;
             return (
              <Item title={title} questionTitle={questionTitle} edfId={targetEdf.id} id={id} key={id} status={status} />
            )
          });
        }
      }
      return questionTitles
    }

    return (
      <div>
        <h3>Items</h3>
        {displayItems(this.props.edfInfo, this.props.edfListInfo)}
      </div>
    )
  }
}

/**
 * mapStateToProps - to hook up connect
 * @memberof ItemsViewer
 * @private
 */
const mapStateToProps = state => (
  {
    edfInfo: state.edfInfo,
    edfListInfo: state.edfListInfo,
    personsInfo: state.personsInfo,
    personInfo: state.personInfo,
    witnessInfo: state.witnessInfo,
    witnessesInfo: state.witnessesInfo,
    view: state.view
  }
);

/**
 * mapDispatchToProps - used to hook up connect to action creators
 * @memberof ItemsViewer
 * @private
 */
const mapDispatchToProps = dispatch => ({

});
export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(ItemsViewer);
