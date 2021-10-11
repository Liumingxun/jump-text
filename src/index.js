import charming from "charming";
import './public.css'

export default function jump_text(elem, opt = {}) {
    charming(elem)
    let letters = elem.querySelectorAll('span')
    for (let i = 0; i < letters.length; i++) {
        let span = letters[i]
        span.className = 'jump'
        span.style.animationDelay = `${Math.log(i) * 500}ms`
    }
}
