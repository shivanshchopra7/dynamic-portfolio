import { useContext } from "react";
import { DoraContext } from "../Context";

const Blog = () => {
  const { blogDetails, blogs } = useContext(DoraContext);
  return (
    <section className="blog-section fill-section" id="blog">
      <div className="container">
        {/* Blog Titel */}
        <div className="section_title wow fadeInUp center">
          <p>From My Blog</p>
          <h2>Our Recent Updates, Blog, Tips, Tricks &amp; More</h2>
        </div>
        <div className="blog-items">
          {blogs.map((blog) => (
            <div className="blog-item" key={blog.id}>
              <div className="wow fadeInUp item__">
                <div className="blog-date-cont">
                  <p>{blog.date}</p>
                </div>
                <a
                  href="#"
                  className="blog-item-img"
                  onClick={() => blogDetails(blog)}
                >
                  <img src={blog.img} alt="dora_img" />
                </a>
                <div className="blog-info">
                  <a
                    href="#"
                    onClick={() => blogDetails(blog)}
                    className="category"
                  >
                    {blog.catagory}
                  </a>
                  <h4>
                    <a href="#" onClick={() => blogDetails(blog)}>
                      {blog.title}
                    </a>
                  </h4>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
export default Blog;
