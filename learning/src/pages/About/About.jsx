import React from 'react'

const About = () => {
  return (
    <div style={styles.container}><h1>About page</h1></div>
  )
}

export default About

const styles = {
   container :{
      height: "500px",
      width:"100%",
      display:"flex",
      alignItems : "center",
      justifyContent : "center",
      backgroundColor :"#dadada"
   }
}