const changeHandler = (state, setter) => {
  return event => {
    const { name, value } = event.target
    setter({...state, [name]: value})
  }
}

export default changeHandler
