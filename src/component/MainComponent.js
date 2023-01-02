import React from "react";

export default function MainComponent() {
  return (
    <div className="container-fluid">
      <main className="tm-main">
        {/* Search form */}
        <div className="row tm-row">
          <div className="col-12">
            <form method="GET" className="form-inline tm-mb-80 tm-search-form">
              <input
                className="form-control tm-search-input"
                name="query"
                type="text"
                placeholder="Search..."
                aria-label="Search"
              />
              <button className="tm-search-button" type="submit">
                <i
                  className="fas fa-search tm-search-icon"
                  aria-hidden="true"
                />
              </button>
            </form>
          </div>
        </div>
        <div className="row tm-row">
          <article className="tm-post">
            <hr className="tm-hr-primary" />
            <a href="post.html" className="effect-lily tm-post-link tm-pt-60">
              <div className="tm-post-link-inner">
                <img src="img/img-02.jpg" alt="Image" className="" />
              </div>

              <p className="tm-pd-30 tm-w-70">
                <h2 className="tm-pt-30 tm-color-primary tm-post-title">
                  Multi-purpose blog template
                </h2>
                
                <p>There is a clickable image with beautiful hover effect and active title link for each post item. Left side is a sticky menu bar. Right side is a blog content that will scroll up and down.</p>
              </p>
            </a>
          </article>
        </div>
      </main>
    </div>
  );
}
