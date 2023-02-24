// FIRST ATTEMPT AT CRUD. LEFT TO SHOW PREVIOUS WORK
// import React, { useState } from "react";
// import axios from 'axios'
// import { useNavigate } from "react-router-dom";


// const AddBeer = () => {
// //   let history = useHistory();
// let history = useNavigate();
//   const [beer, setBeer] = useState({
//     name: "",
//     quantity: "",
//   });

//   const { name, quantity } = beer;
//   const onInputChange = e => {
//     setBeer({ ...beer, [e.target.name]: e.target.value });
//   };

//   const onSubmit = async e => {
//     e.preventDefault();
//     await axios.post("https://63f557143f99f5855dc03197.mockapi.io/Beer", beer);
//     history.push("/");
//   };
//   return (
//     <div className="container">
//       <div className="w-75 mx-auto shadow p-5">
//         <h2 className="text-center mb-4">Add More Beer</h2>
//         <form onSubmit={e => onSubmit(e)}>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="Enter the Name of The Beer You Want"
//               name="name"
//               value={name}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <div className="form-group">
//             <input
//               type="text"
//               className="form-control form-control-lg"
//               placeholder="How Many Do You Want?"
//               name="quantity"
//               value={quantity}
//               onChange={e => onInputChange(e)}
//             />
//           </div>
//           <button className="btn btn-primary btn-block">Beer Me!</button>
//         </form>
//       </div>
//     </div>
//   );
// };

// export default AddBeer;