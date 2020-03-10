<h1>Best Buy Project Setup</h1>
<div>
<ul>
<li>
We are using react 16.8 and react-router-redux 4 to utilize router and redux functinality in our application and 
use Node 8.12.0
Though we are using react 16.8 we are not using React hooks this time .It is in our pipeline
</li>
<li>
We developed our application with responsive web design using Bootstrap and LESS. 
  <ol>
    <li>
      what is LESS: Less is a dynamic preprocessor style sheet language that can be compiled into Cascading Style Sheets and 
      run on the client side or server side</br>
      why LESS : it allow variables, functions, mixins, Nested Rules, Operations, Importing other less files,
    </li>
  </ol>
</li>
<li>
To test our reducers and readers we use Jest . To test JSX files we use either Enzyme or react-test-renderer
</li>
<li>
We use Babel as Javascript compiler and webpack 4 to bundle the resource
</li>
<li>
We use .ftl file. a Java template engine used to auto-generate text output and with the help of place holders 
it auto-generats HTML Web pages
On page load the html files load with page data. On page load we bootstrap this data and load the application store.
With the help of routers we redirect the JSX page. 
</li>
<li>
Steps to take optimization :
dive the component as functional component so that the components are independent and can avoid re-render
CDN (Content directopry Network : Akamai server) used to upload resource server
</li>
<li>
CI/CD pipleline:
We use jenkins to deploy our applicaiton. We automate the deployment process to deploy the current sprint version every 4 hours
in the QA server. If necessary we do hard deploy with the specific git version for bug fix testing.
</li>
<li>
Prod Bug:
</li>
</ul>
</div>

