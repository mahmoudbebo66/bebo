
// import React, { useEffect, useState } from 'react';
// import { useParams } from 'react-router-dom';
// const Singel = () => {
//     const parmas = useParams()
//     const [post, setPost] = useState([])

//     useEffect(()=>{
//         fetch(`https://xbellstore.com/itsharks24/blog/api/singlepost.php?id=${parmas.id}`)
//         .then(res=>res.json())
//         .then((data)=>{
//             setPost(data)
//             console.log(data)
//         })
//     },[])
//     return(
//         <>
        
//         </>
//     )
// }

// export default Singel;




import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Single() {
  const [recentPosts, setResPost] = useState([]);
  const [singlePost, setSingle] = useState([]);
  // const [relatedPosts, setRelated] = useState([]);
  const { id } = useParams();
  const baseUrl = "https://xbellstore.com/itsharks24/blog/admin/";

  useEffect(() => {
    fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php")
      .then((response) => response.json())
      .then((json) => {
        setResPost(json);
      });
  }, []);

  useEffect(() => {
    fetch(`https://xbellstore.com/itsharks24/blog/api/singlepost.php?id=${id}`)
      .then((response) => response.json())
      .then((json) => {
        setSingle(json)
      });
  }, [id]);

  // useEffect(() => {
  //   console.log("Fetching related posts for category:", cat, "and id:", id);
  //   fetch(
  //     `https://xbellstore.com/itsharks24/blog/api/getrelated.php?category=${cat}&id=${id}`
  //   )
  //     .then((response) => {
  //       if (!response.ok) {
  //         throw new Error(`HTTP error! status: ${response.status}`);
  //       }
  //       return response.json();
  //     })
  //     .then((json) => {
  //       console.log("Related posts fetched:", json);
  //       setRelated(json);
  //     })
  //     .catch((error) => {
  //       console.error("Error fetching related posts:", error);
  //     });
  // }, [cat, id]);


  return (
    <>
    <section className="container mt-5">
      <div className="wrapper clear">
        <div className="contentLeft">
          {singlePost.map((single) => (
            <div key={single.id}>
              <div className="singlePostMeta">
                <div className="singlePostTime">{single.date}</div>
                <h1>{single.title}</h1>
                <a href="#" className="singlePostCategory">
                  {single.category}
                </a>
              </div>
              <div className="singlePostWrap">
                <div className="singlePostImg">
                  <img src={baseUrl + single.image} alt="Francoise img" />
                </div>
                <p>
                  Lorem ipsum dolor sit amet,{" "}
                  <a href="#">big group of colleagues</a> consectetur
                  adipisicing elit, sed do eiusmod tempor incididunt ut labore
                  et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud
                  exercitation ullamco laboris nisi ut aliquip ex ea commodo
                  consequat. Duis aute irure dolor in reprehenderit in voluptate
                  velit esse cillum dolore eu fugiat nulla pariatur. Excepteur
                  sint occaecat cupidatat non proident.
                </p>
              </div>
              <div className="pageSocial">
                <div className="pageSocialWrapper">
                  <a href="#">
                    <i className="fa fa-facebook"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-twitter"></i>
                  </a>
                  <a href="#">
                    <i className="fa fa-pinterest"></i>
                  </a>
                </div>
              </div>
            </div>
          ))}

          <div className="relatedPostsBox">
            <h3>related posts</h3>
            {/* <div className="relatedPostsWrap clear">
              {relatedPosts.map((related) => (
                <Link
                  to={`/Single/${related.category}/${related.id}`}
                  className="relatedPostItem"
                  key={related.id}
                >
                  <img src={`${baseUrl}${related.image}`} alt="Francoise img" />
                  <div className="overlayBox">
                    <div className="relatedPostDesc">
                      <div className="postTime">{related.date}</div>
                      <h4>{related.title}</h4>
                    </div>
                  </div>
                </Link>
              ))}
            </div> */}
          </div>
        </div>
        <div className="sidebarRight">
          <div className="sidebar-widget">
            <h3>About us</h3>
            <div className="aboutMeWidget">
              <img
                src={`${process.env.PUBLIC_URL}/images/ourlogo.png`}
                alt="Francoise img"
              />
              <p>
                A training company specialized in teaching programming
                languages, networking and computer science to ensure that you
                get practical experience in the field of software.
              </p>
            </div>
          </div>
          <div className="sidebar-widget">
            <h3>follow me</h3>
            <div className="followMeSocialLinks">
              <a href="#">
                <i className="fa fa-instagram"></i>
              </a>
              <span></span>
              <a href="#">
                <i className="fa fa-facebook"></i>
              </a>
              <span></span>
              <a href="#">
                <i className="fa fa-twitter"></i>
              </a>
              <span></span>
              <a href="#">
                <i className="fa fa-heart"></i>
              </a>
              <span></span>
              <a href="#">
                <i className="fa fa-pinterest"></i>
              </a>
              <span></span>
              <a href="#">
                <i className="fa fa-google-plus"></i>
              </a>
            </div>
          </div>

          <div className="sidebar-widget">
            <h3>Recent post</h3>
            <div className="popularPostsWidget">
              {recentPosts.map((recentPost) => (
                <div className="popularPostsWidgetItem" key={recentPost.id}>
                  <a href="#" className="popularPostsItemImg">
                    <img src={baseUrl + recentPost.image} alt="Francoise img" />
                  </a>
                  <time dateTime="2015-05-15">{recentPost.date}</time>
                  <h4>
                    <a href="#">{recentPost.title}</a>
                  </h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div className="clear"></div>

      <div className="ourInstagram">
        <div id="sb_instagram">
          <div className="sb_instagram_header">
            <a href="#" className="sbi_header_link">
              Follow on Instagram
            </a>
          </div>
          <div id="sbi_images">
            <div className="sbi_item sbi_type_image">
              <div className="sbi_photo_wrap">
                <a href="#" className="sbi_photo">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/content/inst.jpg`}
                    alt="Francoise img"
                  />
                </a>
              </div>
            </div>
            <div className="sbi_item sbi_type_image">
              <div className="sbi_photo_wrap">
                <a href="#" className="sbi_photo">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/content/inst2.jpg`}
                    alt="Francoise img"
                  />
                </a>
              </div>
            </div>
            <div className="sbi_item sbi_type_image">
              <div className="sbi_photo_wrap">
                <a href="#" className="sbi_photo">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/content/inst3.jpg`}
                    alt="Francoise img"
                  />
                </a>
              </div>
            </div>
            <div className="sbi_item sbi_type_image">
              <div className="sbi_photo_wrap">
                <a href="#" className="sbi_photo">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/content/inst4.jpg`}
                    alt="Francoise img"
                  />
                </a>
              </div>
            </div>
            <div className="sbi_item sbi_type_image">
              <div className="sbi_photo_wrap">
                <a href="#" className="sbi_photo">
                  <img
                    src={`${process.env.PUBLIC_URL}/images/content/inst5.jpg`}
                    alt="Francoise img"
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    </>
  );
}

export default Single;