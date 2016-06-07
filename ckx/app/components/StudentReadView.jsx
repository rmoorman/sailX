import React from 'react';
import { connect } from 'react-redux';
import ObservationList from './ObservationList'
import AddObservation from './AddObservation'
import _ from 'lodash'

const StudentReadViewEl = ({ ui, boxes, dispatch }) => {
  const openAddFn = () => { dispatch({type: 'OPENADD_UI'}) }
  const closeAddFn = () => { dispatch({type: 'CLOSEADD_UI'}) }
  const submitAdd = (e) => {
    closeAddFn()
    dispatch({type: 'ADD_BOX', doc: e})
  }
  const openEditFn = () => { console.log("TODO"); }

  return (
    <div>
      <h1>{ui.board}</h1>
      <h1>{ui.user}</h1>
      <ObservationList
        ui = {ui}
        boxes = {_.orderBy(boxes, ['created_at'], ['desc'])}
        dispatch = {dispatch}
        openEditFn = {openEditFn}
      />
      <AddObservation
        isOpen = {ui.addOpen}
        openFn = {openAddFn}
        closeFn = {closeAddFn}
        submitFn = {submitAdd}
        fields = {ui.fields}
      />
    </div>
  )
}

// connect is a curried component that maps the state from redux (first call) to a presentational component (second call, in this case List)
export const StudentReadView = connect(e => ({ui: e.ui, boxes: e.boxes}))(StudentReadViewEl)
// thinking about moving the orderBy to here? Need to understand/unpack this connect thing more...