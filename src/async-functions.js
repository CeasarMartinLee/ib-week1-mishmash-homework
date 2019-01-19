function giveItBackLater (value, callback)  {
    setTimeout(() => callback(value), 1000)
  }
  
function promiseToGiveItBackLater (value) {
    return new Promise((resolve, reject) => {
        giveItBackLater(value, resolve)
    })
}

function addSomePromises (somePromise){
    return somePromise
    .then(done => done + done)
    .catch(err => err + err + err)
}

module.exports = {giveItBackLater, addSomePromises, promiseToGiveItBackLater}
