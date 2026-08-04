import { KOFI_URL } from '../data/consts'
import './About.css'

function About() {
  return (
    <section id="about">
      <p className="eyebrow">Catalogue &mdash; No. 002</p>
      <h1>About</h1>
      <p>33ghosts is a solo game-development studio based in Bristol, UK.
        We create simple and satisfying puzzle games with one goal in mind: good honest puzzling.
      </p>
      <p>
        Every game is free to play, in full, for everyone without distraction; no ads, no paywalls, no sign-ins, no
        in-app purchases, no guilt tripping streak counters or notifications. We believe that good 
        games speak for themselves.
        </p>
        <p>If you enjoy one of our games, you can <a href={KOFI_URL} target="_blank" rel="noopener noreferrer" className='link'>leave us a tip</a> 
        at Ko-fi.com. Otherwise, spreading the word and sharing our games is more than plenty.
      </p>
      <p>Cheers,
      </p>
      <p><strong>Simon (Ghost 01/33)</strong></p>
    </section>
  )
}

export default About
