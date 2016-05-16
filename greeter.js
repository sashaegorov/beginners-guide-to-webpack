module.exports = {
  check: (firstName, lastName) => {
    // console.log() omited for production
    console.log('File `greeter.js` loaded...')
    let result
    if (firstName !== 'alex' || lastName !== 'egorov') {
      result = 'You are not Alex Egorov.'
    } else {
      result = 'You are Alex Egorov.'
    }
    console.log(result)
    return result
  }
}
