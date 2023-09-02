import React, {Children} from 'react';
import "./Newcom.css";

function Newcom({name,email,children}) {
  return (

    <div className='DIV'>
<h1>
   {name} 
</h1>
<h5>
    {email}
</h5>
<hr/>
<p>
  {children}
</p>
</div>
   
  )
}

export default Newcom;