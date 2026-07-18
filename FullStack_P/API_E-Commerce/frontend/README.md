# **Redux App**

### ***[Learn Redux Toolkit in one video 🔥🔥🚀 | Hindi](https://youtu.be/XwGNhppX4as?si=nJmo45NClRbit0Rv)***
[![Learn Redux Toolkit in one video 🔥🔥🚀 | Hindi](https://img.youtube.com/vi/XwGNhppX4as/0.jpg)](https://youtu.be/XwGNhppX4as?si=nJmo45NClRbit0Rv)

Since the video page lacks a text transcript, I couldn't extract specific learning points. If you have notes on what you learned or can share a transcript, I'd be happy to help you create a detailed "What I Learned" section for this entry as well.

To start the frontend server run the following command in the terminal:
```bash
npm run start # as this project was bootstrapped with `npx create-react-app redux-app`
```

**This project was bootstrapped with:**

`npx create-react-app redux-app`

<details>
<summary><b>Redux notes:</b></summary>

### ***Redux Notes***
[Click here to view Redux Notes](../redux.md)
</details>

[redux-shopping-cart](https://github.com/codersgyan/redux-shopping-cart)
[docs-Web-Accessibility-ARIA](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA)

```
npm i express cors cookie-parser jsonwebtoken zod axios react-toastify @tanstack/react-query-devtools --registry=https://registry.npmjs.org --verbose --loglevel=verbose --progress=true --timing
```

#### ***[Web Accessibility Tutorial - Keyboard Navigation](https://youtu.be/VyWRmepESoQ?si=ArVZMIL-aYXsJKOU)***  
[![Web Accessibility Tutorial (A11y) - Keyboard Navigation, Aria Tags, Contrast, Semantics and more!](https://img.youtube.com/vi/VyWRmepESoQ/0.jpg)](https://youtu.be/VyWRmepESoQ?si=ArVZMIL-aYXsJKOU)


- KEYBOARD NAVIGATION
    * tabIndex = "0" (Focusable)
    * tabIndex = "-1" (Focusable with )
    * tabIndex ? "0" (higher priorities)

`Only these are focusable by default:`
```html
<button>
<a href>
<input>
<select>
<textarea>
```

## ***Visited links***
[react-toastify](https://fkhadra.github.io/react-toastify/introduction/)
[i18next](https://www.i18next.com/overview/getting-started)
[i18next-browser-languagedetector](https://www.npmjs.com/package/i18next-browser-languagedetector)
[tanstack-overview](https://tanstack.com/query/latest/docs/framework/react/overview)
[Default QueryClient](https://tanstack.com/query/v4/docs/reference/QueryClient)
[initial-query-data](https://tanstack.com/query/latest/docs/framework/react/guides/initial-query-data)
[tanstack-devtools](https://tanstack.com/query/latest/docs/framework/react/devtools)
[dummyjson#products-search](https://dummyjson.com/docs/products#products-search)
[dummyjson#products-categories](https://dummyjson.com/docs/products#products-categories)

### ***Note:*** 
- `fetch()` *only rejects/rethrows on network errors (like no internet, DNS failure).*
`HTTP error statuses (404, 500, etc.)`* *are NOT caught by catch—they're considered successful responses!*
- *In JavaScript, if a function doesn't explicitly return a value, it returns undefined.*
- *`Async/Await:`* *Syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks like synchronous code*
-  The word "`thunk`" *is a programming term that means "a piece of code that does some delayed work" Rather than excute some logic now, we can write a function body or code that can be used to perform the work later*.
- *`thunks`* *lets you write asasynchronous code before dispatching a plain action.*.
- *`createSlice`* is a function (not a class)
- *`JSX is a syntax extension`* *for JavaScript that allows you to write HTML-like code in your JavaScript files.*
- *`Redux`* *is for client-side state (e.g., shopping cart items, dark mode)*
- *`TanStack Query`* *is for server-state It’s designed to hold data fetched from an API (e.g., the list of products, a single product, user data from the backend like user profiles, comments).*
*`Server state`* *means local cache that means temporary storage. (When your frontend fetches it, it stores a temporary copy (cache) in the browser's memory.)*
- *`Redux`* *was created in 2015.*
- *`TanStack Query`* *(React Query) was first released in 2020.*
- *`TanStack Query`* *cache is temporary – if you refresh the page, it's gone. It's purely a local, ephemeral cache for server-data.*
- *`TanStack Query`* *reduces writing of more boilerplate*
- *`RTK Query`* *is built into @reduxjs/toolkit. *`RTK Query`* *is built on top of Redux Toolkit and does handle server state*
- *`RTK Query`* *stores its cache inside the Redux store that holds your client-state (cart, UI toggles). (which is client-side state). data that lives only on the client and is synchronous to read and update.*
- *`Cache invalidation` *is to invalidate the old cached data and cache the new updated data.*
- *We use lowercase for instances* 
- *hook functions must start with use (to comply with React's Rules of Hooks)*
- *When a function requires an argument we need to wrap it in a function ?*

**In short:**
- *You give createSlice an object of reducers.*
- *It gives you back a single .reducer function for the store.*
- *It also gives you back an .actions object for your components.*

```bash
npm i zod axios i18next react-i18next i18next-browser-languagedetector qrcode.react lodash --registry=https://registry.npmjs.org --verbose --loglevel=verbose --progress=true --timing 
```
<!-- react-i18next@12.3.1 i18next@22.5.1 i18next-browser-languagedetector@7.1.0 -->
```bash
PS C:\Users\SUDIP BHATTACHARYA\Desktop\FullStack_P\redux-prac\frontend> npm list react-scripts --depth=0
redux-app@0.1.0 C:\Users\SUDIP BHATTACHARYA\Desktop\FullStack_P\redux-prac\frontend
└── react-scripts@5.0
```

<!-- https://nextstep.tcsapps.com/indiacampus/#/registration
https://mail.google.com/mail/u/0/#search/tcs/FMfcgzQfBshlPLkxHnmGPpWVzsfgCMQb
https://g05.digialm.com/EForms/loginAction.do?subAction=ValidateUser&frameworkCall=1&extraParams=%26ERRORCODE%3DdlMP3QzIpG3brFxkusA0xAdgzDFHSJTZWkPU%252B%252FSw7QDoMa5K8zCQJe0fXuTo48DkVGgPh0hGYoq%252F%250Ax30YuNZ9NsGewxR%252F0duNrQ1KyIoQQylc0ObdNn%252FAvTgV6wViW%252BviGw5Tq%252BlDeLabC%252Bw0gyv1RLF7%250A%252B%252F3ccqWWuQpngLPwGko%253D&formId=98017&orgId=32386
file:///D:/Downloads/Admit%20Card-TCS.pdf -->

## [**M*****aster Asynchronous JavaScript: Callbacks, Promises & Async/Await Made Easy 🚀***](https://youtu.be/MG9tI5QCbtM?si=qj9O_Dit3Wh8Gn6n)

[![Master Asynchronous JavaScript: Callbacks, Promises & Async/Await Made Easy 🚀](https://img.youtube.com/vi/2pHQdjgSVUk/maxresdefault.jpg)](https://youtu.be/2pHQdjgSVUk)

```js
// synchronous execution and asynchronous execution

// asynchronous io
// database call - network call
function checkInventory() {// callback is passed as an argument

    const promise = new Promise((resolve, reject)=>{// pending, resolve(fulfilled), reject
        setTimeout(()=>{
        console.log("Checking the Inventory...");

        let inStock = 7;
        resolve(inStock);
        // reject(new Error("An Error has been occured during Checking the Inventory!"));
       }, 80000);
    })

    return promise;

    // here, we dont know the needing time to perfect a search operation
    // setTimeout(()=>{
    //     console.log("Checking the Inventory...");
    //     callback();
    // }, 10000);
}

function createOrder(){// callback

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
        console.log("Creating an Order...");

        resolve();
        }, 5000);
    })

    // In JavaScript, if a function doesn't explicitly return a value, it returns undefined.
    return promise;

    // setTimeout(()=>{
    // console.log("Creating an Order...");
    // const error = new Error("Out of Stock");
    // if(error){ With callbacks, you have to check if(error) inside every single nested function.
    //     callback(error);
    //     return;
    // }
    // }, 5000);
}

// api call
function chargePayment() {//callback
    
    const promises = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Charging the Payment...");

            resolve();
        }, 7000)
    })

    return promises;

    // setTimeout(()=>{
    //     console.log("Charging the Payment...");
    //     let error = null;
    //     let chargedAmount = 1000;
    //     callback(error, chargedAmount);// in callbacks first parameter is error
    // }, 7000);
}

function sendInvoice(callback) {

    const promise = new Promise((resolve, reject)=>{
        setTimeout(()=>{
            console.log("Sending the Invoice...");

            resolve();
        }, 2000);
    })

    return promise;

    // setTimeout(()=>{
    //     console.log("Sending the Invoice...");
    //     callback();
    // }, 2000);
}

async function main() {//synchronous execution
    // single threaded javascript
    // console.log('1st log');
    // console.log('2nd log');
    // console.log('3rd log');
    // console.log('4th log');
    // console.log("Check the Inventory"); any line of code will be executed first before the callback
    /*checkInventory(()=>{
        console.log("Inventory searching is done!");
        // createOrder();
        // chargePayment();
        // sendInvoice();

        // callback function where you pass values as arguments to it inside from your asynchronous function defined in that function to execute the callback function from where it was called
        createOrder((error)=>{// callback hell
            if (error) {
                console.log(error);
                // return only exits the current function scope.
                // return; // finishes immediately.
            }
            chargePayment((error, chargedAmount)=>{
                if (error) {
                    console.log("AN ERROR HAS BEEN OCCURED!");
                    return;
                }

                console.log("charged: ", chargedAmount);

                sendInvoice(()=>{
                    console.log("All processes has been done processing!"); 
                });
            });
        });
    });
    */
   
    // asynchronous calls
    // checkInventory()
    // createOrder();
    // chargePayment();
    // sendInvoice();

    /*checkInventory()
    .then(()=>{
        // console.log("Inventory checking is done!");
        createOrder
    })
    .then(()=>{
        chargePayment;
    })
    .then(()=>{
        sendInvoice;
    })
    .catch((error)=>{
        console.log(error);
    })*/


    try{// With Promises (and async/await), you can use a single try/catch block (or .catch()) to handle errors from any step in the chain.
        // Async/Await: Syntactic sugar built on top of Promises. It allows you to write asynchronous code that looks like synchronous code
        const inStock = await checkInventory(); // wait until resolve but does not block the main thread. while it waits till it execute Node.js is free to execute other events, handle other requests, or run other callbacks.
        console.log("In stock: ", inStock);
   
        await createOrder();
        await chargePayment();
        await sendInvoice();
    }catch(error){// if catch case is needed for every function call then add try and catch block for every function individually.
        console.log(error);
    }

   // with aysnc/await any statement inside the async function will go after the asynchronous function it behaves like synchronous code
    console.log("Other requests processing..."); // this will be executed first

}

main();
```

#### ***Functional Requirements***
* *`User Management:`* Account creation, authentication, profiles (buyer & seller),
and role management.
- *`Product Management:`* Create, edit, categorize listings, and manage inventory.
- *`Search and Browse:`* Full-text search, category filters (price, brand, ratings), and sorting. <!-- auto suggestion -->
- *`Shopping Cart & Checkout:`*  Add/remove items, update quantities, apply coupons/discounts.
- *`Orders & Payment:`*  Order creation, payments (credit card, wallet, 3rd-party),refunds/returns
- *`Reviews & Ratings:`*  Buyers can rate products and provide feedback.
- *`Seller Analytics:`* Dashboard with sales reports, order status, and inventory tracking.
- *`Notification:`*  Order updates, promotions, and shipping tracking. <!-- sms, mail, in-app -->

- *`Real-time Suggestions`*
- *`Dynamic and Static data support`*
- *`Debouncing`*
- *`Keyboard Navigation`*
- *`Highlighted Match`*
- *`Customizable`*
- *`Loading Indicator`*

#### ***Non - Functional Requirements***
* *`Scalability:`* Support high traffic and large user base and Catalogs.
* *`Reliability:`* Ensure 99.99% uptime and handle traffic gracefully.
* *`Performance:`* Fast page load times, optimized database queries, efficient APIs, and smooth checkout experience.
* *`Security & Compliance:`* Protect sensitive data, comply with PCI-DSS, GSPR, etc.
* *`Observability:`* Implement logging, minitoring, and alerting for system health.
* *`Cost Efficiency:`* Optimize resouce usage while balancing cost and performance.
- *`Responsiveness`*
- *`Caching`*
- *`Accessibility`*
- *`Compatibility`*

<!-- ![HLD](\img\HLD.png) -->

<!-- ![User Management](User_Management.png) -->
<!-- ![UsersProduct_DB](UsersProduct_DB.png) -->

### ***[React JS Interview Questions ( Breadcrumbs ) - Frontend Machine Coding Interview Experience](https://youtu.be/yeNgh2gw104?si=tTbFwcLDiySbCWnR)***
[![React JS Interview Questions ( Breadcrumbs ) - Frontend Machine Coding Interview Experience](https://img.youtube.com/vi/yeNgh2gw104/0.jpg)](https://youtu.be/yeNgh2gw104?si=tTbFwcLDiySbCWnR)

### ***[Frontend System Design Questions ( Autosuggestion / Typeahead ) - HLD, LLD, Interview Experience](https://youtu.be/6YrkXWFgiV8?si=Ubjz-pkh-CcTNXHe)***
[![Frontend System Design Questions ( Autosuggestion / Typeahead ) - HLD, LLD, Interview Experience 🔥🔥](https://img.youtube.com/vi/6YrkXWFgiV8/0.jpg)](https://youtu.be/6YrkXWFgiV8?si=Ubjz-pkh-CcTNXHe)

`Product information available in English only. The platform supports i18n for UI elements. User-generated content (reviews/comments) is preserved in its original language to maintain authenticity.`

Utilities
- https://fkhadra.github.io/react-toastify/introduction/
- https://react-icons.github.io/react-icons/

Terminal
```bash
npm pack @tanstack/react-query --dry-run 
--registry=https://registry.npmjs.org                            
```

- `Paginated Queries`
- `Parallel Queries`
- `Dependent Queries`
- `Optimistic Queries`

http://localhost:3000
