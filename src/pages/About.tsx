import { KOFI_URL } from '../data/consts'
import './About.css'

function About() {
  return (
    <section id="about">
      <p className="eyebrow">Part No. 02</p>
      <h1>About</h1>
      <p>33ghosts is a game-development studio based in Bristol, UK.
        We strive to create simple yet satisfying puzzle games with one goal in mind: good honest puzzling.
      </p>
      <p>
        Every game is free to play, in full, for everyone without distraction; no ads, no paywalls, no sign-ins, no
        in-app purchases, no guilt tripping streak counters or notifications. We believe that good 
        games speak for themselves.
        </p>
        <p>If you enjoy one of our games, you can <a href={KOFI_URL} target="_blank" rel="noopener noreferrer" className='link'>leave us a tip</a>{" "} 
        at Ko-fi.com. Otherwise, spreading the word and sharing our games is more than plenty.
      </p>
      <p>Happy puzzling,
      </p>
      <p><strong>Simon (Ghost 01/33)</strong></p>
    </section>
  )
}

export default About
