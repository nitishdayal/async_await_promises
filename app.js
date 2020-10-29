// Timing exercise 1
// Uncomment these lines and run them, observing the order that the logs happen
// How can you change it to log in the correct order?

// console.log('I should log before the data!');
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .finally(() => console.log('I should log after the data!'))


// ========================================

// Timing exercise 2: slightly more complicated

// console.log('I should be before the cats data')
// fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
//   .then((res) => res.json())
//   .then((json) => console.log(json))
//   .then(() => console.log('I should be between the cats and dogs'))
//   .then(() => {
//     fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
//       .then((res) => res.json())
//       .then((json) => console.log(json))
//       .then(() => console.log('I should be last'))
//   })

/* async function exercise2() {
  console.log('I should be before the cats data')

  const catsReq = await fetch('http://www.reddit.com/search.json?q=cats+nsfw:no')
  const catsRes = await catsReq.json()
  console.log(catsRes)

  console.log('I should be between the cats and dogs')

  const dogsReq = await fetch('http://www.reddit.com/search.json?q=dogs+nsfw:no')
  const dogsRes = await dogsReq.json()
  console.log(dogsRes)

  console.log('I should be last')
}

exercise2()
*/

/* const myPromise = new Promise((res, _) => setTimeout(() => res('potato'), 3000))
const myBadPromise = new Promise((_, rej) => setTimeout(() => rej('tomato'), 5000))

console.log(myPromise)
console.log(myBadPromise)

myBadPromise.catch(e => console.error('Error: ', e))
myPromise.then(val => console.log(val))
 */
const conditionalPromise = (cond) => new Promise((res, rej) => setTimeout(() => {
  if (cond) res('WOOO GOT A CONDITION')
  rej('No condition wtf bro')
}, 3000))

conditionalPromise('ahhh').then(console.log).catch(console.error)
conditionalPromise().then(console.log).catch(console.error)
