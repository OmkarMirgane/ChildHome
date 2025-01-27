import React from 'react'
import {Link, useNavigate} from 'react-router-dom'
import './Navbar.css'


const Navbar = () => {
    const nevigate=useNavigate()
  return (
   <>
       <div className="container_nav">
            <div className="logo_nav">
            {/* <img src='../../../public/Logo/logo.jpg' id='log_img'/> */}
            <Link href=''> <img id='home_logo'src='/logo.jpg' allt='logo'></img></Link>
            {/* <Link href=''>HomeForHeart</Link> */}
            </div>
            <div className="dropdown">
                <lable >Resourses</lable>
                <div className="dropdown_container">
                    <div id='drop_content_item'> <Link to='/Applicantreg'>Schems & Guidlines</Link><br/>
                    </div>
                    <div id='drop_content_item'><Link  to='/Childhomereg'>Important Court Orders</Link></div>
                    <div id='drop_content_item'><Link  to='/Childhomereg'> Annual Reports</Link></div> 
                    
                </div>

            </div>
            <div>
            <Link href=''>Contact Us</Link>
            </div>
            <div>
            <Link href=''>Child Homes</Link>
            </div>
            <div>
            <Link href=''>Legal Consult</Link>
            </div>
            <div>
                <Link href=''>Donation</Link>
            </div>
            <div>
                <Link href=''>Acts & Regulations</Link>
            </div>
            <div className="dropdown">
                <lable >Registration</lable>
                <div className="dropdown_container">
                    <div id='drop_content_item'> <Link to='/Applicantreg'>Resident Indian Parents</Link><br/>
                    </div>
                    <div id='drop_content_item'><Link  to='/Childhomereg'>Register Child Home</Link></div> 
                    
                </div>

            </div>
            <div>
                <button onClick={()=>{
                   nevigate('/login')
                }} id='login_btn'>Login</button>
            </div>
        </div>
   </>
  )
}

export default Navbar