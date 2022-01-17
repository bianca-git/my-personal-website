// Rainbow background code

import { hsluvToHex } from "hsluv"

function rainbowBackground() {
  const viewportHeight = window.innerHeight
  const contentHeight = document.body.getBoundingClientRect().height
  const viewportsPerRotation = Math.min(
    3,
    contentHeight / viewportHeight
  )
  const from = 280
  const progress =
    window.scrollY / (viewportHeight * viewportsPerRotation)
  const h = (from + 360 * progress) % 360

  document.body.style.backgroundColor = hsluvToHex([h, 100, 5])
  document.getElementById('menu').style.backgroundColor = hsluvToHex([h, 100, 5])
  const sectionsCount = document.getElementsByTagName('section');
  let loop;
  for (loop = 0; loop < sectionsCount.length; loop++) {
    sectionsCount[loop].style.backgroundColor = hsluvToHex([h, 100, 15])
    sectionsCount[loop].style.borderColor = hsluvToHex([h, 100, 5])
  }
  return () => window.removeEventListener('scroll', rainbowBackground)
}
window.addEventListener('scroll', rainbowBackground, { passive: true })