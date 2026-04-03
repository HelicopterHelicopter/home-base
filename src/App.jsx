import './App.css'
import { Analytics } from '@vercel/analytics/react'
import {
  CrayonDivider,
  CraftBadge,
  CraftCard,
  CraftList,
  CraftListItem,
  CraftSketchUnderline,
  RopeFrame,
  StickyNote,
  WashiStrip,
} from '@kuboxx/craft-ui'

function App() {
  return (
    <>
      <div className="site stack">
        <header>
          <WashiStrip pattern="stripes" tint="mint" className="hero-washi" />
          <p className="hero-badges">
            <CraftBadge>Studio</CraftBadge>
            <span className="hero-tagline">Homepage built with</span>
            <CraftBadge>@kuboxx/craft-ui</CraftBadge>
          </p>
          <h1 className="hero-title hero-center">
            <CraftSketchUnderline variant="accent">Welcome to Omnia Inc.</CraftSketchUnderline>
          </h1>
          <p className="hero-tagline hero-center">Pioneering the Future of Technology</p>
        </header>

        <RopeFrame contentClassName="rope-inner">
          <main className="stack main-inner">
            <CraftCard tint="yellow" lift="paste" elevation="lg" deckled={1} className="craft-block">
              <h2 className="section-title">About Us</h2>
              <p className="section-copy">
                Omnia Inc. is a forward-thinking technology company dedicated to creating innovative
                solutions that shape the future. Our team of experts works tirelessly to develop
                cutting-edge products and services across various sectors, driving progress and
                efficiency for our clients worldwide.
              </p>
            </CraftCard>

            <CrayonDivider crayon="pink" />

            <CraftCard
              tint="green"
              lift="paste-lg"
              elevation="sm"
              deckled={2}
              variant="parchment"
              className="craft-block"
            >
              <h2 className="section-title">Our Mission</h2>
              <p className="section-copy">
                Our mission is to leverage the power of technology to solve complex problems and create
                lasting value. We strive for excellence in everything we do, pushing the boundaries of
                what&apos;s possible and empowering businesses and individuals through technological
                advancement.
              </p>
            </CraftCard>

            <CrayonDivider crayon="orange" />

            <CraftCard tint="blue" lift="paste" elevation="lg" deckled={3} className="craft-block">
              <h2 className="section-title">Featured Projects</h2>
              <CraftList marker="pushpin" className="project-list">
                <CraftListItem>
                  <a
                    className="project-title"
                    href="https://convert.jheels.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    YouTube Music to Spotify Playlist Converter
                  </a>
                  <span className="section-copy"> — Convert your YouTube Music playlists to Spotify.</span>
                </CraftListItem>
                <CraftListItem>
                  <a
                    className="project-title"
                    href="https://craft-ui.jheels.in"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Craft UI
                  </a>
                  <span className="section-copy">
                    {' '}
                    (
                    <a
                      className="inline-link"
                      href="https://www.npmjs.com/package/@kuboxx/craft-ui"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      @kuboxx/craft-ui
                    </a>
                    ) — React components with a handmade desk look: paper surfaces, rope frames, and a
                    crayon palette. Docs and examples in Storybook; ships ready-to-use CSS, no Tailwind
                    required in consuming apps.
                  </span>
                </CraftListItem>
                <CraftListItem>
                  <a
                    className="project-title"
                    href="https://linkfolio-beta.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Linkfolio
                  </a>
                  <span className="section-copy"> — A bio link page builder with multiple themes, similar to Linktree.</span>
                </CraftListItem>
                <CraftListItem>
                  <a
                    className="project-title"
                    href="https://flames-calculator-rho.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Flames Calculator
                  </a>
                  <span className="section-copy"> — A fun FLAMES relationship calculator web app.</span>
                </CraftListItem>
                <CraftListItem>
                  <a
                    className="project-title"
                    href="https://music-player-frontend-six.vercel.app"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Music Player
                  </a>
                  <span className="section-copy"> — A custom music player frontend built with React and Tailwind CSS.</span>
                </CraftListItem>
              </CraftList>
            </CraftCard>

            <CrayonDivider crayon="ink" />

            <div className="contact-wrap">
              <StickyNote color="pink" rotate={-2} className="contact-note">
                <h2 className="section-title">Contact Us</h2>
                <p className="section-copy">
                  For inquiries, please reach out to us at{' '}
                  <a className="contact-email" href="mailto:jhljheel@gmail.com">
                    jhljheel@gmail.com
                  </a>
                  .
                </p>
              </StickyNote>
            </div>
          </main>
        </RopeFrame>

        <footer className="site-footer">
          <p className="footer-copy">&copy; 2026 Omnia Inc. All rights reserved.</p>
        </footer>
      </div>
      <Analytics />
    </>
  )
}

export default App
