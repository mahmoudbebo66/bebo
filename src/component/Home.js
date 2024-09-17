import { useEffect, useState } from "react";
import { json,Link} from "react-router-dom"
function Home() {
	// const [posts , setPosts] = useState([]);
	// useEffect(()=>{
	// 	fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php")
	// 	.then(res=>res.json())
	// 	.then((data)=>{
			
	// 		setPosts(data)
	// 	})
	// },[])


	const [posts, setPost] = useState([]);

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getposts.php", json)
      .then((response) => response.json())
      .then((json) => {
        setPost(json);
      });
  }, []);
  const baseUrl = "https://xbellstore.com/itsharks24/blog/admin/";
    return (
     <>
     <section className="container mt-5">
		<div className="wrapper clear">
			
			<div className="clear"></div>
			<div className="contentLeft">
			<div className="blogPostListWrap">
			{posts.map((post) => (
           <>
		        <div className="blogPostListItem clear" key={post.id}>
                  <Link
                    to={`/Single/${post.id}`}
                    className="blogPostListImg otherPages"
                  >
                    <img src={baseUrl + post.image} alt="Francoise img" />
                  </Link>
                  <div className="blogPostListText">
                    <div className="blogPostListTime">{post.date}</div>
                    <h3 className="otherPages">
                      <Link to={`/Single/${post.id}`}>
                        {post.title}
                      </Link>
                    </h3>
                    <p
                      dangerouslySetInnerHTML={{ __html: post.description }}
                    ></p>
                  </div>
				  </div>
                
		   </>
              ))}
			  </div>
					
				
				<div className="postPagination">
					<ul className="clear">
						<li className="newPosts"><a href="#">New posts</a></li>
						<li className="olderPosts"><a href="#">Older posts</a></li>
					</ul>
				</div>
			</div>
			<div className="sidebarRight">
				<div className="sidebar-widget">
					<h3>About us</h3>
					<div className="aboutMeWidget">
						<img src="images/ourlogo.png" alt="Francoise img"/>
						<p>A training company specialized in teaching programming languages, networking and computer science to ensure that you get practical experience in the field of software.</p>
					</div>
				</div>
				<div className="sidebar-widget">
					<h3>follow me</h3>
					<div className="followMeSocialas">
						<Link to="/"><i className="fa-brands fa-instagram"></i></Link>
						<span>  </span>
						<Link to="/"><i className="fa-brands fa-facebook"></i></Link>
						<span></span>
						<Link to="/"><i className="fa-brands fa-twitter"></i></Link>
						<span></span>
						<Link to="/"><i className="fa fa-heart"></i></Link>
						<span></span>
						<Link to="/"><i className="fa-brands fa-pinterest"></i></Link>
						<span></span>
						<Link to="/"><i className="fa-brands fa-google-plus"></i></Link>
					</div>
				</div>
				
				<div className="sidebar-widget">
					<h3>Recent post</h3>
					<div className="popularPostsWidget">
						<div className="popularPostsWidgetItem">
							<a href="#" className="popularPostsItemImg"><img src="images/content/popularPostImg.jpg" alt="Francoise img"/></a>
							<time dateTime="2015-05-15">15.05.2015</time>
							<h4><a href="#">MY BEDSIDE TABLE: THE CURATOR</a></h4>
						</div>
						
					</div>
				</div>
				
				
			</div>
		</div>
		<div className="clear"></div>
		
	</section>
     </>
    );
  }
  
  export default Home;