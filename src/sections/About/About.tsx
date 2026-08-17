import profilePic from '../../assets/images/profilePic/MIKE.jpeg'
import Reveal from '../../components/animations/Reveal'

export default function About() {
  return (
    <section id="about" className="about-section">
      <div className="about-container">
        <div className="about-grid">

          {/* Photo and details */}
          <Reveal
            distance={80}
            duration={0.9}
          >
            <div className="aboutImage-container">

              <div className="about-photo">
                <img
                  src={profilePic}
                  alt="Portrait of Addo Michael Obiri"
                />
              </div>

              <div className="about-photo">
                {[
                  ['Currently', 'Freelancing / Open to roles'],
                  ['Based in', 'Accra, Ghana'],
                  ['Experience', '4 years'],
                  [
                    'Education',
                    'BSc Computer Science, University of Ghana',
                  ],
                ].map(([label, value]) => (
                  <div
                    key={label}
                    className="about-detail"
                  >
                    <span className="about-detail-label">
                      {label}
                    </span>

                    <span className="about-detail-value">
                      {value}
                    </span>
                  </div>
                ))}
              </div>

            </div>
          </Reveal>

          {/* Bio */}
          <div className="about-content">

            <Reveal distance={60}>
              <p className="about-eyebrow">
                About
              </p>
            </Reveal>

            <Reveal
              distance={70}
              delay={0.1}
            >
              <h2 className="about-title">
                Building with purpose,
                <br />
                <em>learning by doing.</em>
              </h2>
            </Reveal>

            <div className="about-text">

              <Reveal
                distance={50}
                delay={0.15}
              >
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.5,
                    color: 'var(--muted-foreground)',
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  I'm a Computer Science student at the
                  University of Ghana and a software developer
                  passionate about turning ideas into practical,
                  reliable digital products. I enjoy solving
                  problems with code, learning new technologies,
                  and building systems that are useful beyond the
                  classroom.
                </p>
              </Reveal>

              <Reveal
                distance={50}
                delay={0.25}
              >
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.5,
                    color: 'var(--muted-foreground)',
                    margin: 0,
                    fontWeight: 300,
                  }}
                >
                  My experience spans full-stack web and mobile
                  development, with hands-on work in React,
                  React Native, Node.js, ASP.NET Core, Java,
                   PostgreSQL, MongoDB, and REST APIs.
                  From university projects and collaborative
                  software teams to personal products, I focus
                  on writing clean, maintainable code and
                  understanding the systems behind what I build.
                </p>
              </Reveal>

              <Reveal
                distance={50}
                delay={0.35}
              >
                <p
                  style={{
                    fontSize: '16px',
                    lineHeight: 1.5,
                    color: 'var(--muted-foreground)',
                    margin: 0,
                    marginBottom: 20,
                    fontWeight: 300,
                  }}
                >
                  I'm constantly improving as a developer through
                  real projects, teamwork, and continuous learning.
                  My long-term goal is to become a highly skilled
                  software engineer and computer scientist,
                  contributing to products and technologies that
                  create meaningful impact, especially within
                  emerging markets.
                </p>
              </Reveal>

            </div>

            {/* Actions */}
            <Reveal
              distance={40}
              delay={0.45}
            >
              <div className="about-text">

                <a
                  href="mailto:michaelobiri@gmail.com"
                  className="primary-button"
                >
                  Get in touch
                </a>

                <a
                  href="/cv/Addo_Michael_Obiri_CV.pdf"
                  className="secondary-button"
                >
                  Download CV
                </a>

              </div>
            </Reveal>

          </div>

        </div>
      </div>
    </section>
  )
}