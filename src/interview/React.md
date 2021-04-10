<h1>React</h1></br>

<h2>Life cycle of a React component</h2>
  <section>
	  <article>
		  <figure>
        <img src="/src/img/lifecycle_reactjs.jpg" />
      </figure>
    </article>
  </section>
  <section> 
  The life cycle phases of React invloves below steps
  <ol>
  <li>Initialization</li>
  <li>Mounting</li>
  <li>Updating</li>
  <li>Unmounting</li>
  </ol>
  </section>
  <section>
	Detailed scope of each life cycle method is depicted in below given picture
	<figure>
		<img src="/src/img/DetailedLifecycle.png" />
	</figure>
  </section>
  <section><article>
  <h3>Initialisation</h3>
  This is the place where the component defines the props and initialize the state (state of the component and not reduxt state)
  <br/>
<code>
	
	class ClassCpomponent extends React.Component {		
          constructor(props) {   
		// Calling the constructor of  
		// Parent Class which is React.Component 
		super(props);  
          
        	// Setting the initial state 
        	this.state = { date : new Date() };  
    		} } 
  
  </code>
  </article>
  </section>
  
<section>
<h3>mounting phase</h3>
<article>
Mounting phase has three methods.Constructor,getDerivedStateFromProps, render, ComponentDidMount. Reneder method actually holds the HTML to display. The other two methods executes before and after render method. getDerivedStateFromProps share both mounting phase and update phase but the props may be different in each phase. Similary render method share the mounting and update phase and resultant dom may vary based on change in props and state values.
</article>

</section>
<section>
<h3>React Hooks</h3>
<h4>useState</h4>
	
```
 import React, {useState} from 'react'
 Function App() {
	const [age, setAge] = useState(1);
	return(<div>{age}</div>)
 }
```

</section>
<section>
<h4>useSelector</h4>
	
```
import React, {useState,useEffect} from 'react'
import {useSelector} from react-redux
	
Function App() {
 const [age, setAge] = useState(1);
 useEffect(() => {
 	//api call
 }, []);
 const ageProps = useSelector(state => state.ageProps);
 return(<div>{age}</div>)
}
```

</section>
<section>
<h4>useDispatch</h4>
	
```
import React, {useState} from 'react'
import {useDispatch} from 'reat-redux'

Function App() {
 const dispatch = useDispatch()
 const [age, setAge] = useState(1);
 useEffect(() => {
	dispatch(actionFetch)
 }, []);
 return(<div>{age}</div>)
}
```

</section>
