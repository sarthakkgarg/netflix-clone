import React from 'react'
import './Header.css'
const Header = (props) => {
    console.log(props.black)
    return (
        <header className={ props.black ? 'black' : ''}>

            <div className="logo">
                <a href="/">
                    <img src="https://www.freepnglogos.com/uploads/netflix-logo-0.png" alt="" /></a></div>            
 
  <img style={{width: "30px", cursor:"pointer"}}src="https://pbs.twimg.com/profile_images/1398399796667244549/oZeQQEzC_400x400.png" alt="" />
 
  </header>
    )
}
export default Header;