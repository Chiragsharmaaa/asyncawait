/*
when there's a async we need to wait.
since js is non blocking it by default doesn't waits for async.
*/

/*
b4 async await: 
 output: 1,2,4,5,3  (Queue not in line)
 reason1: doesnt wait for anythg thats async.(promiseWifeBringingTicks here.)
reson2: flow ==> getButter.then() => getButter = getPopcorn.then() => getPopcorn = promiseWifeBringingTicks.then() => promiseWifeBringingTicks = new Promise()
*/
console.log('person1: show ticket')
console.log('person2: show ticket')

const promiseWifeBringingTicks = new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('ticket')
    }, 3000);
})

const getPopcorn = promiseWifeBringingTicks.then((t) => {
    console.log('wife: I have the tics')
    console.log('husband: we should go in!')
    console.log('wife: no Im hungry')
    return new Promise((resolve, reject) => resolve(`${t} popcorn`))
});

const getButter = getPopcorn.then((t) => {
    console.log('husband: i got some popcorn')
    console.log('husband: we should go in!')
    console.log('wife: no Im need butter on my Popcorn')
    return new Promise((resolve, reject) => resolve(`${t} butter`))
})

getButter.then((t) => console.log(t))
console.log('person4: show ticket')
console.log('person5: show ticket')

//1. 1,2,4,5,3
//2. person1: show ticket
//   person2: show ticket
//   person4: show ticket
//   person5: show ticket
//   wife: I have the tics
//   husband: we should go in!
//   wife: no Im hungry
//   husband: i got some popcorn
//   husband: we should go in!
//   wife: no Im need butter on my Popcorn
//   ticket popcorn butter