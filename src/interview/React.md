<h1>React</h1></br>

<h2>React Life cycle of components </h2>
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
  <h3>Initialisation</h3>
  This is the place where the component defines the props and initialize the state (state of the component and not reduxt state)
  <br><code>
  class ClassCpomponent extends React.Component { 
    constructor(props) {    
        // Calling the constructor of  
        // Parent Class React.Component 
        super(props);  
          
        // Setting the initial state 
        this.state = { date : new Date() };  
    } 
  } 
  </code>
</section>
