const year = new Date().getFullYear()

const Footer = () => (
  <div className="footer">
    <div className="footer__sign">Nil Késede &copy; {year}</div>
    <div className="footer__social">
      <a href="https://linkedin.com/in/nilkesede" target="_blank" rel="noopener noreferrer" title="linkedin" className="footer__social__anchor">
        <i className="icon icon-linkedin">&#xf0e1;</i>
      </a>
      <a href="https://github.com/nilkesede" target="_blank" rel="noopener noreferrer" title="github" className="footer__social__anchor">
        <i className="icon icon-github-circled">&#xf09b;</i>
      </a>
      <a href="https://twitter.com/nilkesede" target="_blank" rel="noopener noreferrer" title="twitter" className="footer__social__anchor">
        <i className="icon icon-twitter">&#xf099;</i>
      </a>
      <a href="https://instagram.com/nilkesede" target="_blank" rel="noopener noreferrer" title="instagram" className="footer__social__anchor">
        <i className="icon icon-instagram">&#xf16d;</i>
      </a>
    </div>
  </div>
)

export default Footer
