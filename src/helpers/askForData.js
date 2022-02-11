const data = require('../data/stock.json');

export const askForData =() =>{
  return new Promise ((res, rej)=>{
    setTimeout(() => {
      res(data)
    }, 500);
  })
}