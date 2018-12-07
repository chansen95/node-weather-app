var somePromise = new Promise((resolve, reject) => {
    setTimeout(() => {
        // resolve('Hey. It worked!');
        reject('Unable to fulfill promise.');
    }, 2500);
});

somePromise.then((message) => {
    console.log('Successs: ', message);
}, (errorMessage) => {
    console.log('Error: ', errorMessage);
});