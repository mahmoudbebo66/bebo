import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom"
 
const Header = () => {
    let [categorys,setCategory ] = useState([]);

    useEffect(()=>{
            fetch("https://xbellstore.com/itsharks24/blog/api/getcategory.php")
            .then((response) => response.text())
            .then((result) => {
                setCategory(JSON.parse(result))
                console.log(JSON.parse(result));
            })
           
    },[])
    return ( <>
    <header id="header">
		<div className="siteHeader">
			<div className="wrapper clear">
				<a href="index.html" className="mobile-logo">
				</a>
				<ul className="mainMenu clear">
					<li>
						<Link to="/	">Home</Link>
					</li>
					<li>
						<a href="#">Category</a>
						<ul>
						{categorys.map((category) => {
                    return (
                      <li>
                        <Link
                          to={"/Category/" + category.name}
                          className="otherPages"
                        >
                          {category.name}
                        </Link>
                      </li>
                    );
                  })}
						</ul>
					</li>
                   
					
				</ul>
				<div className="pull-right clear">
					<div className="headerSocialLinks clear">
						<a href="#"><i className="fa-brands fa-instagram"></i></a>
						<a href="#"><i className="fa-brands fa-facebook"></i></a>
						<a href="#"><i className="fa-brands fa-twitter"></i></a>
						<a href="#"><i className="fa fa-heart"></i></a>
						<a href="#"><i className="fa-brands fa-pinterest"></i></a>
						<a href="#"><i className="fa-brands fa-google-plus"></i></a>
					</div>
					<div className="searchIcon"></div>
				</div>
				<span className="showMobileMenu">
					<span></span>
					<span></span>
					<span></span>
					<span></span>
				</span>
			</div>	
		</div>
		<a href="#" className="logo">IT SHARKS 33</a>
	</header>
    </> );
}
 
export default Header;