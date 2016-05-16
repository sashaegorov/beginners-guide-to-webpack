let checkName= (firstName, lastName) => {
 if(firstName !== 'alex' || lastName !== 'egorov') {
   return 'You are not Alex Egorov';
 } else {
    return 'You are Alex Egorov';
  }
}

console.log('File `logger.js` loaded...')
document.write('<br/>') // Small hacky <br/>
document.write('File `logger.js` loaded...')

let result = checkName('alex', 'egorov')
document.write('<br/>') // Small hacky <br/>
document.write(result)
console.log(result)
