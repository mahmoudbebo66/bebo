import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";

function Category() {
  const [recentPosts, setResPost] = useState([]);
  const [categorys, setCategory] = useState([]);
  const { category: cat } = useParams();
  const baseUrl = "https://xbellstore.com/itsharks24/blog/admin/";

  useEffect(() => {
    console.log("Fetching recent posts");
    fetch("https://xbellstore.com/itsharks24/blog/api/getrecentpost.php")
      .then((response) => response.json())
      .then((json) => {
        console.log("Recent posts fetched:", json);
        setResPost(json);
      });
  }, []);

  useEffect(() => {
    console.log("Fetching posts for category:", cat);
    fetch(
      `https://xbellstore.com/itsharks24/blog/api/getpostsbycategory.php?category=${cat}`
    )
      .then((response) => response.json())
      .then((json) => {
        console.log("Posts for category fetched:", json);
        setCategory(json);
      });
  }, {});

  return (
    <section className="container mt-5">
      <div className="wrapper clear">
        <div className="contentLeft">
          <div className="archivePageTitle">
            <span>{cat}</span>
          </div>
          <div className="archivePostWrap">
            {categorys.map((category) => (
              <div className="archivePostItem" key={category.id}>
                <div className="archivePostTime">{category.date}</div>
                <h3 className="archivePostTitle">
                  <Link to="/">{category.title}</Link>
                </h3>
                <Link
                  to={`/Single/${category.id}`}
                  className="archivePostCategory"
                >
                  {cat}
                </Link>
                <Link
                  to={`/Single/${category.id}`}
                  className="archivePostImg"
                >
                  <img
                    src={`${baseUrl}${category.image}`}
                    alt="Francoise img"
                  />
                </Link>
                <p
                  dangerouslySetInnerHTML={{ __html: category.description }}
                ></p>
                <div className="archivePostItemMeta">
                  <a href="#" className="archivePostItemComments">
                    124 Comments
                  </a>
                  <div className="archivePostItemShareLinks">
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
                  <Link
                    to={`/Single/${category.id}`}
                    className="archivePostReadMore"
                  >
                    Read More
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="postPagination">
            <ul className="clear">
              <li className="newPosts">
                <a href="#">New posts</a>
              </li>
              <li className="olderPosts">
                <a href="#">Older posts</a>
              </li>
            </ul>
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
    </section>
  );
}

export default Category;
