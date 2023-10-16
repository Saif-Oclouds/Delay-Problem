// Helper function for delay purpose
function delayFunction(time) {
    return new Promise(resolve => {
        setTimeout(() => resolve(), time);
    });
}

async function delayedPromiseChain(promiseFunctions, delay) {
    let response;
    for (const promise of promiseFunctions) {
        response = promise();
        await delayFunction(delay);
    }

    return response;
}

const promise1 = () => new Promise(resolve => setTimeout(() => resolve(1), 1000));
const promise2 = () => new Promise(resolve => setTimeout(() => resolve(2), 500));
const promise3 = () => new Promise(resolve => setTimeout(() => resolve(3), 800));
const promise4 = () => new Promise(resolve => setTimeout(() => resolve(4), 300));

const promiseFunctions = [promise1, promise2, promise3, promise4];
const delay = 1000;

delayedPromiseChain(promiseFunctions, delay)
  .then(result => {
    console.log("All promises have completed and result is: ", result);
  })
  .catch(error => {
    console.error("An error occurred:", error);
  });
