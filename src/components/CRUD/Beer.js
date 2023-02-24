// FIRST ATTEMPT AT CRUD. LEFT TO SHOW PREVIOUS WORK

// import React, { useState, useEffect } from "react";
// import { Link, useParams } from "react-router-dom";
// import axios from "axios";

// const Beer = () => {
//   const [beer, setBeer] = useState([
//     {
//       name: "",
//       quantity: "",
//     },
//   ]);
//   const { id } = useParams();
//   useEffect(() => {
//     loadBeer();
//   }, []);
//   const loadBeer = async () => {
//     const res = await axios.get(
//       `https://63f557143f99f5855dc03197.mockapi.io/Beer`
//     );
//     setBeer(res.data);
//   };
//   return (
//     console.log(beer),
//     (
//       <div className="container py-4">
//         <Link className="btn btn-primary" to="/">
//           Back to Ordering Home Page
//         </Link>
//         <h1 className="display-4">Your Order{id}</h1>
//         <hr />
//         <ul className="list-group w-50">
//           <li className="list-group-item">name: {beer.name}</li>
//           <li className="list-group-item">quantity: {beer.quantity}</li>
//         </ul>
//         {beer.map((beerType, index) => (
//           <p key={index}>{beerType.name}</p>
//         ))}
//       </div>
//     )
//   );
// };

// export default Beer;
