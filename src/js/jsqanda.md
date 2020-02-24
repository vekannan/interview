
   <html>
   <head>
      <link rel="stylesheet" type="text/css" media="all" href="src/js/jsq.css" />
   </head>
   <body> 
      <div>
         <div class="es2020">
        ES2020
      </div>
      <h1>ES2020</h2>
      <div></br>
<h2>allSettled</h2>
<div>
<code>
const p1 = new Promise((res, rej) => setTimeout(res, 1000));

const p2 = new Promise((res, rej) => setTimeout(rej, 1000));

Promise.allSettled([p1, p2]).then(data => console.log(data));
</code>
</div>
<div>
   <br/>
   <h2>Nullish Coalescing Operator</h2>
   <div>
      This opperator checks only for null or undefined. Previously in this case y = x||500 y will be 500 if x is 0 or ''. Now it checks only for null or undefined. If there is other value it just assign the value
      <code>
         const y = x ?? 500;
      </code>
   </div>
</div>
<div>
   <br/>
   <h2>BigInt</h2>
   <div>
      <code>
         const bigInt = BigInt('2222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222222');
console.log(bigInt);
      </code>
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
      <h1>ES2019</h2>
      <div>
        <b>New Feature</b>
      </div>
      <h2> Flat Map </h2>
      <div>
        Regular Map: <br/>
        <code>
        const arr3 = [[1,3],[3,4],[4,6]]
        console.log(JSON.stringify(
          arr3.map(group1 => 
            group1.map(group2 => 
              group2 *2))))
        </code>
       <br/>
         The above code results in <code>[[2,6],[6,8],[8,12]]</code>
        <br/>
        FlatMap: 
        <br/>
        <code>
          const arr1 = [[1,3],[3,4],[4,6]]
          console.log(JSON.stringify(
            arr1.flatMap(group1 => 
              group1.map(group2 => 
                group2 *2))))
        </code>
         <br/>
        The above flatMap code results in <code>[2,6,6,8,8,12]</code>
      </div>
      <div>
      <h2> flat </h2>
      <br/>
      <code> 
       let  arr = [1, 2, [3, 4, [5, 6]]]; 
        arr.flat();
      </code>
      Is result in [1,2,3,4,5,6]
      <br/>
      But if we pass arr.flat(1); the output will be [1, 2, 3, 4, Array(2)]. We can pass how deep we need to flat the map
      <h2> Object.formEntries </h2>
      <code>const map = new Map([ ['foo', 'bar'], ['baz', 42] ]); <br/>
      const obj = Object.fromEntries(map); <br/>
      console.log(obj); // { foo: "bar", baz: 42 } <br/></code>
      </div>
      <div>
         <h2> Optional Chaining </h2>
         <code>const users = [
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
         
 </code>
      </div>
      <div>
   <h2>String.trimStart and String.trimEnd</h2>
   <code>let message = "     Welcome to LogRocket      ";
message.trimStart(); // "Welcome to LogRocket      "
      message.trimEnd(); // "Welcome to LogRocket";</code>
   </div>
    </div></body></html>
