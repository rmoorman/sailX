export const uuid = () =>
  ([1e7]+-1e3+-4e3+-8e3+-1e11).replace(/[018]/g,a=>(a^Math.random()*16>>a/4).toString(16))

export const currentDate = () => {
  let d = new Date()
  return d.toString()
}

export const shorten = (text, length) => {
  let t = text || ''
  if (t.length < length) {
    return t
  } else {
    return t.slice(0, length-3)+'...'
  }
}

export const identity = (e) => e

// for classState and studentState, we are getting an array from Horizon, but
// we will only have one element of each type with a given class/student ID
// this let's us easily pick that element out and switch on it
// for example getKey('tablet_locked', classState) will return the value if
// the element exists, and undefined if it does not
export const getKey = (key, array) => {
  return false
}
