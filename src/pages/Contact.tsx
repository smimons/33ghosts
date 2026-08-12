import { CONTACT_FORM_URL } from '../data/consts'
import './Contact.css'

function Contact() {

  return (
    <section id="contact">
      <p className="eyebrow">Part No. 03</p>
      <h1>Contact</h1>
      <p className="lede">
        Bugs, ideas, kind words &mdash; all welcome. Pick a game if it's about
        one in particular, otherwise "general" is fine.
      </p>

      <div className="form-frame">
        <iframe src={CONTACT_FORM_URL} title="Contact 33ghosts">
          Loading&hellip;
        </iframe>
      </div>
    </section>
  )
}

export default Contact
