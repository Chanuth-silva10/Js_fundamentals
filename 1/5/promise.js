// -------------------------------------
// ------------Promises(ES6)------------
// -------------------------------------

// Promise is an Object. Use to deal with asynchronous operations. When we define a promise in JavaScript, it will be resolved when the time comes, or it will get rejected.

// For example, when we request data from the server by using a Promise, it will be in pending mode until we receive our data.

// -----Callbacks-----

const products = [
  {
    name: "Product 1",
    desc: "This is my sample product 1",
    price: 200,
  },
  {
    name: "Product 2",
    desc: "This is my sample product 2",
    price: 300,
  },
];

// Display products
function getProducts() {
  setTimeout(() => {
    let output = "";
    products.forEach((product) => {
      output += `<div>
                    <h2>${product.name}</h2>
                    <p>${product.desc}</p>
                    <h4>${product.price}</h4></div>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

// Add products
function addProducts(product, callback) {
  setTimeout(() => {
    products.push(product);
    callback();
  }, 2000);
}

addProducts(
  { name: "Product 3", desc: "This is my sample product 3", price: 500 },
  getProducts
);

// -----------------------------------

// -----Promises-----

let pr = new Promise((resolve, reject) => {
  let ans = 2 + 5;
  setTimeout(() => {
    if (ans == 7) {
      resolve("completed"); // promise results kiyala kiyno
    } else {
      reject("not completed");
    }
  }, 3000);
});

pr.then((msg) => {
  console.log(`Promise has ${msg}`);
}).catch((msg) => {
  console.log(`Promise has ${msg}`);
});

// -----------------------------------

const products = [
  {
    name: "Product 1",
    desc: "This is my sample product 1",
    price: 200,
  },
  {
    name: "Product 2",
    desc: "This is my sample product 2",
    price: 300,
  },
];

function getProducts() {
  setTimeout(() => {
    let output = "";
    products.forEach((product) => {
      output += `<div>
                    <h2>${product.name}</h2>
                    <p>${product.desc}</p>
                    <h4>${product.price}</h4></div>`;
    });
    document.body.innerHTML = output;
  }, 1000);
}

function addProducts(product) {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      let ln = products.length;
      products.push(product);

      if (products.length > ln) {
        resolve("Product added");
      } else {
        reject("Product not added"); //err ekta yai me msg eka
      }
    }, 2000);
  });
}

addProducts({
  name: "Product 3",
  desc: "This is my sample product 3",
  price: 500,
})
  .then((res) => {
    getProducts();
    console.log(res);
  })
  .catch((err) => {
    console.error(err);
  });

// -----------------------------------

function getUserCountry(url) {
  return new Promise((resolve, reject) => {
    const xmlreq = new XMLHttpRequest();
    xmlreq.open("GET", url);

    xmlreq.onload = () => {
      if (xmlreq.status == 200) {
        resolve(xmlreq.response);
      } else {
        reject(Error(xmlreq.response));
      }
    };

    xmlreq.onerror = () => {
      reject(Error("Network Error"));
    };

    xmlreq.send();
  });
}

getUserCountry("https://api.nationalize.io/?name=kasun")
  .then((response) => {
    console.log("Success", response);
  })
  .catch((error) => {
    console.error("Failed", error);
  });

// -----------------------------------

const pr1 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 1 Success");
  }, 1000);
});

const pr2 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 2 Success");
  }, 1000);
});

const pr3 = new Promise((resolve) => {
  setTimeout(() => {
    resolve("Promise 3 Success");
  }, 3000);
});

// All
Promise.all([pr1, pr2, pr3]).then((values) => {
  console.log(values);
});

// ----------------------------------------
// ------------Async/Await(ES8)------------
// ----------------------------------------

// Async and Await make promises easier to write. Async makes a function return a Promise. Await makes a function wait for a Promise.

// -----Normal Promise-----

function dialEmergency(number) {
  return new Promise((resolve, reject) => {
    console.log(`Dialing ${number}`);
    if (number === 119) {
      resolve("What is your emergency");
    } else {
      reject("This is not the emergency number");
    }
  });
}

function processCall(response) {
  return new Promise((resolve, reject) => {
    console.log("Calling emergency service");
    resolve(`Agent : ${response}`);
  });
}

dialEmergency(119)
  .then((response) => {
    console.log("Response Received");
    return processCall(response);
  })
  .then((processedResponse) => {
    console.log(processedResponse);
  })
  .catch((error) => {
    console.error(error);
  });

// -----------------------------------

// -----Async/Await-----

function dialEmergency(number) {
  return new Promise((resolve, reject) => {
    console.log(`Dialing ${number}`);
    if (number === 119) {
      resolve("What is your emergency");
    } else {
      reject("This is not the emergency number");
    }
  });
}

function processCall(response) {
  return new Promise((resolve, reject) => {
    console.log("Calling emergency service");
    resolve(`Agent : ${response}`);
  });
}

async function handleOperation() {
  try {
    const response = await dialEmergency(119); // Wait until it finishes
    console.log("Response Received");
    const processedResponse = await processCall(response);
    console.log(processedResponse);
  } catch (error) {
    console.error(error);
  }
}

handleOperation();

// -----------------------------------

// -----Fetch API-----
// Provides a JavaScript interface for accessing and manipulating parts of the HTTP pipeline, such as requests and responses

console.log(fetch("https://jsonplaceholder.typicode.com/posts"));

fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Error("Something went wrong!");
    }
  })
  .then((data) => {
    console.log(data);
  });

// -----------------------------------

// Create a new post
fetch("https://jsonplaceholder.typicode.com/posts", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
  },
  body: JSON.stringify({
    title: "Sample post 1",
    body: "This is a sample post",
    userId: 11,
  }),
})
  .then((res) => {
    if (res.ok) {
      return res.json();
    } else {
      return Error("Something went wrong!");
    }
  })
  .then((data) => {
    console.log(data);
  });

// --------------------------------------------------------
// ------------PadStart & PadEnd Functions(ES8)------------
// --------------------------------------------------------

// Pads the current string with another string until the resulting string reaches the given length.

// -----PadStart-----

let name = "Dasun";
console.log(name.padStart(10, "e"));

// -----------------------------------

// -----PadEnd-----

let subject = "Science";
console.log(subject.padEnd(10, "."));

// -------------------------------------------
// ------------Object Entries(ES8)------------
// -------------------------------------------

// Returns an array of a given object's own key value pairs

const data = {
  name: "Dasun Perera",
  email: "dasun@gmail.com",
  phone: 123446,
};

console.log(Object.entries(data));

for (let [key, val] of Object.entries(data)) {
  console.log(`${key} : ${val}`);
}

// ------------------------------------------
// ------------Object Values(ES8)------------
// ------------------------------------------

// Returns an array of a given object's own property values

const data = {
  name: "Dasun Perera",
  email: "dasun@gmail.com",
  phone: 123446,
};

console.log(Object.values(data));

for (let val of Object.values(data)) {
  console.log(val);
}

// ------------------------------------------------
// ------------Trailing Commas(ES5,ES8)------------
// ------------------------------------------------

//  Can be useful when adding new elements, parameters, or properties to JavaScript code.

const arr = [1, 2, 3, 4];
console.log(arr);

// -----------------------------------

const data = {
  name: "Chamara",
  age: 25,
};
console.log(data);

// -----------------------------------

function add(x, y) {
  return x + y;
}
console.log(add(3, 5));
