const socialLinks = [
  {
    name: 'GitHub',
    href: 'https://github.com/obirimike',
  },
  {
    name: 'LinkedIn',
    href: 'https://www.linkedin.com/in/michael-addo-k23',
  },
  {
    name: 'Twitter',
    href: 'https://twitter.com/kweku_mk',
  },
  {
    name: 'Email',
    href: 'mailto:michaelobiri022@gmail.com',
  },
]

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

        <span
          style={{
            fontSize: '12px',
            color: 'var(--muted-foreground)',
            letterSpacing: '0.02em',
          }}
        >
          © 2026
        </span>

      </div>
    </footer>
  )
}