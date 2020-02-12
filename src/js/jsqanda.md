<html>
  <head>
  </head>
  <body>
    <div style="">
      <div style="height:20px; width:20px; position: -webkit-sticky;
  position: sticky;
  top: 0;backgroundcolor:gray">
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
    <h2> flat </h2>
    <br/>
    <code> 
     let  arr = [1, 2, [3, 4, [5, 6]]]; 
      arr.fla();
    </code>
    Is result in [1,2,3,4,5,6]
    <br/>
    <h2> Object.formEntries </h2>
    <code>const map = new Map([ ['foo', 'bar'], ['baz', 42] ]); <br/>
    const obj = Object.fromEntries(map); <br/>
    console.log(obj); // { foo: "bar", baz: 42 } <br/></code>
    </div>
  </body>
</html>
