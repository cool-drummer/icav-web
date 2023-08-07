import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_35",
    animationDealy: "",
  },
  {
    img: "media_36",
    animationDealy: "100",
  },
  {
    img: "media_37",
    animationDealy: "200",
  },
  {
    img: "media_35",
    animationDealy: "",
  },
  {
    img: "media_36",
    animationDealy: "100",
  },
  {
    img: "media_37",
    animationDealy: "200",
  },
];

const Blog = () => {
  return (
    <>
      {BlogContent.map((val, i) => (
        <div
          className="col-lg-4 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDealy}
          key={i}
        >
          <article className="post-meta mt-30">
            <figure className="post-img m0">
              <Link to="/blog-details" className="w-100 d-block">
                <img
                  src={`images/blog/${val.img}.jpg`}
                  alt="blog"
                  className="w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data">
            </div>
            {/* <!-- /.post-data --> */}
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
