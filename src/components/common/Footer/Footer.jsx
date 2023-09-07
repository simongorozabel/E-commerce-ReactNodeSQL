import "./Footer.css";

const Footer = () => {
  return (
    <div className="footerContainer">
      <footer>
        <em className="brand__footer">&copy; BRAND No rights reserved.</em>
        <p>
          Do you want an e-commerce like this? Get in contact with me via
          LinkedIn, my friend:
        </p>
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
