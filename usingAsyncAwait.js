//after async await

console.log('person:1 show ticket')
console.log('person:2 show ticket')

//put all process in a seperate fxn
//1. async fxn executes after everythg else

//declared async fxn..
const preMovie = async () => {
    //1st fxn
    const promiseWifeBringingTicks = new Promise((resolve) => {
        setTimeout(() => resolve('ticket'), 3000);
    });

    const getPopcorn = new Promise((resolve) => resolve(`popcorn`))
    const getCandy = new Promise((resolve) => resolve(`candy`))
    const addButter = new Promise((resolve) => resolve(`butter`))
    const getColdDrinks = new Promise((resolve) => resolve(`Cold drink`))

    // execution starts here: assign 1st fxns return value to a variable ticket and return it.
    //when a await is called; the lines below it cannot execute b4 await's execution.
    let ticket = await promiseWifeBringingTicks;

    console.log(`wife: i have the ${ticket}`)
    console.log('husband: we should go in')
    console.log('wife: no i am hungry')

    // let popcorn = await getPopcorn;
    // let candy = await getCandy;
    
    //using Promise.all
    let [popcorn, candy] = await Promise.all([getPopcorn, getCandy]);

    console.log(`husband: i got some ${popcorn} and ${candy}`)
    console.log('husband: we should go in!')
    console.log('wife: no Im need butter on my Popcorn')

    let butter = await addButter

    console.log(`husband: i got some ${butter} on popcorn`)
    console.log(`husband: anything else darling?`)
    console.log(`wife: lets go we are getting late`)
    console.log(`husband: thank you for the reminder *grins*`)

    let coldDrink = await getColdDrinks;

    console.log(`wife: wait! i am feeling a bit thirsty`)
    console.log(`husband: lemme getchu a cold drink`)
    console.log('***after a min***')
    console.log(`husband: have a ${coldDrink}!`)
    console.log(`wife: thanks! lets go`)

    return ticket;
};

//called it.
preMovie().then((m) => console.log(`person3: shows ${m}`)) //get the ticket back here as m

console.log('person:4 show ticket')
console.log('person:5 show ticket')