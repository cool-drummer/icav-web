import React from "react";
import { Link } from "react-router-dom";

const BlogContent = [
  {
    img: "media_35",
    animationDealy: "",
    editLink: "/worship",
  },
  {
    img: "media_36",
    animationDealy: "100",
    editLink: "/grupo-conexion",
  },
  {
    img: "media_37",
    animationDealy: "200",
    editLink: "/oracion-zoom",
  },
  {
    img: "media_35",
    animationDealy: "",
    editLink: "/discipulado",
  },
];

const Blog = () => {
  return (
    <>
      {BlogContent.map((val, i) => (
        <div
          className="col-lg-6 col-sm-6"
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay={val.animationDealy}
          key={i}
        >
          <article className="post-meta mt-30">
            <figure className="post-img">
              <Link
                to={val.editLink || "/home"} // Use editLink if available, otherwise use a default link
                className="w-100 d-block"
              >
                <img
                  src={`images/blog/${val.img}.jpg`} // Use the img property from BlogContent
                  alt="blog"
                  className="w-100 tran4s"
                />
              </Link>
            </figure>
            <div className="post-data">{/* Add relevant data here */}</div>
            {/* <!-- /.post-data --> */}
          </article>
        </div>
      ))}
    </>
  );
};

export default Blog;
