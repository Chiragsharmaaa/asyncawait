// promises are asynchronous.
// promises may be fulfilled and there is a chance of getting rejected.

async function dadmakespromise() {
    try {
        const DadsPromise = await new Promise((resolve, reject) => {
            //after 10 days...
            new setTimeout(() => {
                var salaryCredited = true;
                var salary = 45000;
                var costofps4 = 40000;
                var costofps5 = 50000;
                if (salaryCredited === true && salary > costofps5) {
                    resolve('Buy him a ps5');
                } else if (salaryCredited === true && salary > costofps4) {
                    reject({success: false, message:'Should I buy you a ps4..?'});
                } else {
                    reject('Sorry son, next month!');
                };
            }, 1000);
        });
        console.log(DadsPromise);
    } catch(err) {
        console.log(err)
    }

};

dadmakespromise() //whenever we want a reject to work we need to catch the error using catch()