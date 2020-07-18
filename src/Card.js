import React from 'react';

let cardTitle;

const makePurchase = () => (

  alert('works')
)

const Card = (prop) => {
    return (
        <div className="card" style={{width: "18rem"}}>
          <img 
            src={prop.image} 
            className="card-img-top" 
            alt={prop.title} 
          />
          <div className="card-body">
            
            <h5 
            
            className="card-title">{prop.title}
            
            </h5>

            
            <p className="card-text">{prop.description}
            </p>
            <a 
                onClick={makePurchase}
                href={prop.buttonLink} 
        
                className="btn btn-primary"
            >{prop.buttonLabel}</a>

          </div>
        </div>
    )
}

export default Card;

// --------------

// const registerEmail = () => {
//   //console.log(inputField.value)
//   fetch('http://localhost:8080/emails/register', 
//       {
//           method: 'POST',
//           body: JSON.stringify({email: inputField.value}),
//           headers: {"Content-Type": "application/json"}
//       }
//   )
//   .then(
//       (result) => result.json()
//   )
//   .then (
//       (json) => console.log('response from backend', json)
//   )
// }

// return (
//   <div className="input-group mb-3">
//       <input type="text" 
//           id="the-field"
//           className="form-control" 
//           placeholder="Recipient's email" 
//           aria-label="Recipient's email" 
//           aria-describedby="button-addon2" 
          
//           ref={ 
//               (comp) => inputField = comp
//           }
//       />
//       <div className="input-group-append">
//           <button 
//               className="btn btn-outline-secondary" 
//               type="button" 
//               id="button-addon2"
//               onClick={registerEmail}
//           >Button</button>
//       </div>
//   </div>
// )
// };