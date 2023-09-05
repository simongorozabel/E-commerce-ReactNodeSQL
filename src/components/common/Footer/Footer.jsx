import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <em className="brand__footer">&copy; BRAND No rights reserved.</em>
        <p>To have an e-commerce like this, get in touch wih me, my friend:</p>
        <code>
          <a
            target="_blank"
            rel="noreferrer"
            href="https://linkedin.com/in/simongorozabel"
          >
            👉🏼Simon Gorozabel
          </a>
        </code>
      </footer>
    </div>
  );
};

export default Footer;
