const hsluv = require("hsluv")

export const rainbowBackground = () => {
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

  document.body.style.backgroundColor = hsluv.hsluvToHex([h, 100, 5])
  document.getElementById('menu').style.backgroundColor = hsluv.hsluvToHex([h, 100, 5])
  const sectionsCount = document.getElementsByTagName('section');
  var loop;
  for (loop = 0; loop < sectionsCount.length; loop++) {
    sectionsCount[loop].style.backgroundColor = hsluv.hsluvToHex([h, 100, 15])
    sectionsCount[loop].style.borderColor = hsluv.hsluvToHex([h, 100, 5])
  }
  
}
window.addEventListener('scroll', rainbowBackground, { passive: true })
return () => window.removeEventListener('scroll', rainbowBackground)

