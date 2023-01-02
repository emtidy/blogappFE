import React from "react";

export default function HeaderComponent() {
  return (
    <div className="tm-header" id="tm-header">
      <div className="tm-header-wrapper">
        <button
          className="navbar-toggler"
          type="button"
          aria-label="Toggle navigation"
        >
          <i className="fas fa-bars" />
        </button>
        <div className="tm-site-header">
          <div className="mb-3 mx-auto tm-site-logo">
            <i className="fas fa-times fa-2x" />
          </div>
          <h1 className="text-center">Xtra Blog</h1>
        </div>
        <nav className="tm-nav" id="tm-nav">
          <ul>
            <li className="tm-nav-item active">
              <a href="index.html" className="tm-nav-link">
                <i className="fas fa-home" />
                Blog Home
              </a>
            </li>
            <li className="tm-nav-item">
              <a href="post.html" className="tm-nav-link">
                <i className="fas fa-pen" />
                Single Post
              </a>
            </li>
            <li className="tm-nav-item">
              <a href="contact.html" className="tm-nav-link">
                <i className="far fa-comments" />
                Contact Us
              </a>
            </li>
           
          </ul>
        </nav>
        <div className="tm-mb-65">
          <a
            rel="nofollow"
            href="https://fb.com/templatemo"
            className="tm-social-link"
          >
            <i className="fab fa-facebook tm-social-icon" />
          </a>
          <a href="https://twitter.com" className="tm-social-link">
            <i className="fab fa-twitter tm-social-icon" />
          </a>
          <a href="https://instagram.com" className="tm-social-link">
            <i className="fab fa-instagram tm-social-icon" />
          </a>
          <a href="https://linkedin.com" className="tm-social-link">
            <i className="fab fa-linkedin tm-social-icon" />
          </a>
        </div>

      </div>
    </div>
  );
}
