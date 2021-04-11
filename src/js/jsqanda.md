<html>
   <head>
      <link rel="stylesheet" type="text/css" media="all" href="src/js/jsq.css" />
   </head>
   <body> 
      <div>
      <span class="es2020">
         ES2020
      </span>
      <h1>ES2020</h2>
      <div></br>
<h2>allSettled</h2>
<div>
   
```javascript
const p1 = new Promise((res, rej) => setTimeout(res, 1000));

const p2 = new Promise((res, rej) => setTimeout(rej, 1000));

Promise.allSettled([p1, p2]).then(data => console.log(data));
```

</div>
<div>
   <h2>Nullish Coalescing Operator</h2>
   <div>
      This opperator checks only for null or undefined. Previously in this case y = x||500 y will be 500 if x is 0 or ''. Now it checks only for null or undefined. If there is other value it just assign the value
         > const y = x ?? 500;
   </div>
</div>
<div>
   <h2>BigInt</h2>
   <div>

```javascript
const bigInt = BigInt('2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
console.log(bigInt);
```
     
   </div>
</div>
</div>
      </div>
      </div>
      </div>
      <div style="position:relative;">
      <div class="es2019">
        ES2019
      </div>
      <h1>ES2019</h1>
      <div>
        <b>New Feature</b>
      </div>
      <h2> Flat Map </h2>
      <div>
        Regular Map: <br/>

```javascript
const arr3 = [[1,3],[3,4],[4,6]]
console.log(JSON.stringify(
 arr3.map(group1 => 
   group1.map(group2 => 
     group2 *2))))
```
The above code results in 
         > [[2,6],[6,8],[8,12]]
        <br/>
        FlatMap: 

```javascript
 const arr1 = [[1,3],[3,4],[4,6]]
 console.log(JSON.stringify(
   arr1.flatMap(group1 => 
     group1.map(group2 => 
       group2 *2))))
```
  
The above flatMap code results in  
        > [2,6,6,8,8,12]
      </div>
      <div>
      <h2> flat </h2>
      <br/>

```javascript
let  arr = [1, 2, [3, 4, [5, 6]]]; 
arr.flat();
```
Is result in 
      > [1,2,3,4,5,6]
<br/>
But if we pass arr.flat(1); the output will be [1, 2, 3, 4, Array(2)]. We can pass how deep we need to flat the map
<h2> Object.formEntries </h2>
      
      ```javascript

      const map = new Map([ ['foo', 'bar'], ['baz', 42] ]); 
      const obj = Object.fromEntries(map); 
      console.log(obj); // { foo: "bar", baz: 42 } 
      ```
      
      
      </div>
      <div>
         <h2> Optional Chaining </h2>

         ```javascript
         const users = [
  {
   name: "Olagunju Gbolahan",
   occupation: "Software Developer",
   sayName(){
    console.log(`my name is ${this.name}`);
   },
   address: { office: "New York" }
  },
  { name: "Olawaseyi Moses" },
  { name: "Tunde Ednut" }
];
         users[0]?.sayName?.() 
            instead of users[0] && users[0].sayName()
         
 ```

      </div>
      <div>
   <h2>String.trimStart and String.trimEnd</h2>
   ```javascript 
   let message = "     Welcome to LogRocket      ";
message.trimStart(); // "Welcome to LogRocket      "
      message.trimEnd(); // "Welcome to LogRocket";
  ```

   </div>
   <div>
      <br/>
   <h1>2018</h1>
   <br/>
   <h2>Rest/Spread Properties for objects</h2>
   <div>
      In ES6 Rest properties introduced for array . Now the same is been introduced for objects
      For Array it is 

      ```javascript
         const numbers = [1, 2, 3, 4, 5]
         const [first, second, ...others] = numbers
           console.log(second)
            console.log(others)

         const numbers = [1, 2, 3, 4, 5]
         const sum = (a, b, c, d, e) => a + b + c + d + e
         const sumOfNumbers = sum(...numbers)
      ```

      The same introced in ES2018 for objects

     ```javascript
         const { first, second, ...others } = { first: 1, second: 2, third: 3, fourth: 4, fifth: 5 }
         first // 1
         second // 2
         others // { third: 3, fourth: 4, fifth: 5 }
      ```

   </div>
   <div>
      <br/>
      <h2>Async iteration </h2>
      <div>
        
         ```javascript
            for await (const line of readLines(filePath)) {
  console.log(line)
}
         ```

      </div>
   </div>
   <div>
      <br/>
      <h2>Promise.prototype.finally()</h2>
      <div>
         When a promise is fulfilled, successfully it calls the then() methods, one after another.

If something fails during this, the then() methods are jumped and the catch() method is executed.

finally() allow you to run some code regardless of the successful or not successful execution of the promise
         ```javascript
           fetch('file.json')
  .then(data => data.json())
  .catch(error => console.error(error))
  .finally(() => console.log('finished'))
         ```

      </div>
   </div>
   </div>
    </div></body></html>
