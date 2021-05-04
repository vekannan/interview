import React from 'react'
import useFormInput from './useFormInput'

function App() {
  const [firstName, bindFirstName, resetFirstName] = useFormInput('');
  const [lastName, bindLastName, resetLastName] = useFormInput('');
  const submitFormHandler = e => {
    console.log('submit form')
    e.preventDefault();
    alert(`FirstName: ${firstName} \n LastName: ${lastName}`);
    resetFirstName();
    resetLastName();
  }
  
  return (
    <div >
     <form onSubmit={submitFormHandler}>
       <div>
        <label> First Name : </label>
        <input type="tex" {...bindFirstName}/ >
       </div>
       <div>
        <label> Last Name : </label>
        <input type="text"  {...bindLastName}/>
       </div>
       <div>
         <button> Submit </button>
       </div>
     </form>
    </div>
  );
}

export default App;
