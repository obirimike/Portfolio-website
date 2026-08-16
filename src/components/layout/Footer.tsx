import { socialLinks } from '../../data/socialLinks'

export default function Footer() {
  return (
    <footer id="contact" className="footer">
      <div className="footer-container">

        <span className="footer-logo">
          Addo Michael Obiri
        </span>

        <div className="footer-links">
          {socialLinks.map((link) => {
            const isEmail = link.href.startsWith('mailto:')

            return (
              <a
                key={link.name}
                href={link.href}
                target={isEmail ? undefined : '_blank'}
                rel={
                  isEmail
                    ? undefined
                    : 'noopener noreferrer'
                }
                className="footer-link"
              >
                {link.name}
              </a>
            )
          })}
        </div>

        <span className="footer-copyright">
          © {new Date().getFullYear()}
        </span>

      </div>
    </footer>
  )
}