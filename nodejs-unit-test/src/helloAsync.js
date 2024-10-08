export const helloAsync = (name) =>
    new Promise((resolve, reject) =>
        setTimeout(() => resolve(`hello ${name}`), 2000)
    );

// helloAsync("world").then(console.log);
