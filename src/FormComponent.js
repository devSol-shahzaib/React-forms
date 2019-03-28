import React from 'react';


function FormComponent(props){
return(
    <div>
     <form className="form">
       <h1>React Forms</h1>
       <input
       className="input"
        type="text" 
       placeholder="First Name" 
       value={props.data.firsName}
       name="firstName" 
       onChange={props.onChange}/>
       <br/>
       <input
       className="input"
       type="text"
       placeholder="Last Name"
       name="lastName"
       value={props.data.lastName}
       onChange={props.onChange}/>
       <br/>
       <label>know react:
       <input 
       type="checkbox"
       checked={props.data.isKnow}
       name="isKnow"
       onChange={props.onChange}/>
       </label>
       <br/>
       <br/>
       <label>Gender:</label>
       <br/>
       <label>
         Male:
       <input 
       type="radio"
       name="Gender"
       value="Male"
       checked={props.data.Gender==="Male"}
       onChange={props.onChange}
       />
       </label>
       <label>
         Female:
       <input 
       type="radio"
       name="Gender"
       value="Female"
       checked={props.data.Gender==="Female"}
       onChange={props.onChange}/>
       </label>
       <br/>
       <label>Experienced in:</label>
       <select value={props.data.favTech} name="favTech" onChange={props.onChange}>
         <option value="ReactJs">ReactJs</option>
         <option value="Angular">Angular</option>
         <option value="VueJs">VueJs</option>
       </select>
       
       </form>
      
    </div>
)
}

export default FormComponent