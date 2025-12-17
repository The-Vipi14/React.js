import { useState, useEffect } from "react";

import './style.css'
const Concept = () => {
  // const [count, setcount] = useState(0);
  // useEffect(()=>{
  // console.log("Every time")
  // });

  // useEffect(()=>{
  // console.log("One time")
  // },[]);

  // useEffect(()=>{
  // console.log("Conditional rendering");
  // },[]);

  //   const [theme, settheme] = useState(false);

  //   const changeTheme = () => {
  //     settheme(!theme);
  //   };

  // API calling-------

  const [data, setData] = useState([]);
  useEffect(() => {
    // fetch("https://jsonplaceholder.typicode.com/users")
    fetch("demo.txt")
      .then((response) => response.text)
      .then((res) => setData(res))
      .catch((error) => {
        console.log("error", error);
      });
  }, []);
  console.log(data);


useEffect(()=>{
    fetch("/demo.txt")
    .then(response=>response.json())
    .then(result=>console.log(result))
    .catch(error=>console.log(error))
},[])
  return (
    <>
    <h1>USER DETAILS</h1>
    <div className="user-card-container">
      
      {data.map((user , index) => {
        return (
          <div className="user-card" key={index}>
            <h1>name: {user.name}</h1>
            <h2>username: {user.username}</h2>
            <h3>email: {user.email}</h3>
            <div>
                <h2>Address: </h2>
                <h3>{user.address.street}</h3>
            </div>
          </div>
        );
      })}
    </div>
    </>
  );
};

export default Concept;
