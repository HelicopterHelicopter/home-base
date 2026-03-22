import './App.css'
import { Analytics } from '@vercel/analytics/react'

function App() {
  return (
    <>
      <header>
        <h1>Welcome to Omnia Inc.</h1>
        <p>Pioneering the Future of Technology</p>
      </header>
      <main>
        <section>
          <h2>About Us</h2>
          <p>Omnia Inc. is a forward-thinking technology company dedicated to creating innovative solutions that shape the future. Our team of experts works tirelessly to develop cutting-edge products and services across various sectors, driving progress and efficiency for our clients worldwide.</p>
        </section>
        <section>
          <h2>Our Mission</h2>
          <p>Our mission is to leverage the power of technology to solve complex problems and create lasting value. We strive for excellence in everything we do, pushing the boundaries of what's possible and empowering businesses and individuals through technological advancement.</p>
        </section>
        <section>
          <h2>Featured Projects</h2>
          <ul>
            <li>
              <a href="https://convert.jheels.in" target="_blank" rel="noopener noreferrer">
                YouTube Music to Spotify Playlist Converter
              </a>
              — Convert your YouTube Music playlists to Spotify.
            </li>
            <li>
              <a href="https://linkfolio-beta.vercel.app" target="_blank" rel="noopener noreferrer">
                Linkfolio
              </a>
              — A bio link page builder with multiple themes, similar to Linktree.
            </li>
            <li>
              <a href="https://flames-calculator-rho.vercel.app" target="_blank" rel="noopener noreferrer">
                Flames Calculator
              </a>
              — A fun FLAMES relationship calculator web app.
            </li>
            <li>
              <a href="https://music-player-frontend-six.vercel.app" target="_blank" rel="noopener noreferrer">
                Music Player
              </a>
              — A custom music player frontend built with React and Tailwind CSS.
            </li>
          </ul>
        </section>
        <section>
          <h2>Contact Us</h2>
          <p>For inquiries, please reach out to us at jhljheel@gmail.com.</p>
        </section>
      </main>
      <footer>
        <p>&copy; 2024 Omnia Inc. All rights reserved.</p>
      </footer>
      <Analytics />
    </>
  )
}

export default App
