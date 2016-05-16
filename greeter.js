module.exports = {
  check: (firstName, lastName) => {
    // console.log() omitted for production
    console.log('File `greeter.js` loaded...')
    let result
    if (firstName !== 'alex' || lastName !== 'egorov') {
      result = 'You\'re not Alex Egorov.'
    } else {
      result = 'You\'re Alex Egorov.'
    }
    console.log(result)
    return result
  }
}
