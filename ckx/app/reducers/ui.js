import React from 'react'

export default (state, action) => {
  switch (action.type) {
    case 'OPENINFO':
      return {...state, infoOpen: action.id}
    case 'CLOSEINFO':
      return {...state, infoOpen: false}
    case 'OPENADD':
      if (!state.infoOpen) {
        return {...state, addOpen: true}
      } else {
        return state
      }
    case 'CLOSEADD':
      return {...state, addOpen: false}
    case 'CHANGEROUTE':
      return {...state, route: action.route}
    case 'SETGROUP':
      return {...state, group: action.group, fields: action.fields}
    case 'SETNAME':
      return {...state, user: action.name}
    case 'LOGGEDIN':
      return {...state, loggedIn: true}
    default:
      return state
  }
}

// sort this out at some point

// const P = React.PropTypes
// export const uiDefinition = P.shape({
//       infoOpen: P.boolean, //oneOfType([P.number, P.boolean]), // which info box is currently open, or false if none are open
//       addOpen: P.boolean,
//       route: P.boolean,
//       name: P.string,
//       loggedIn: P.boolean
// })
// console.log(uiDefinition)