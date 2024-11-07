import getAll from './src/api/getAll'
import { renderPets } from './src/utils/renderPets'
import './styles.css'

const startObserver = () => {
  const observerElement = document.getElementById('pets')
  const observer = new IntersectionObserver(async (entries, obs) => {
    if (entries[0].isIntersecting) {
      await getAll().then((pets) => {
        console.log(pets)
        renderPets(pets)
      })
      obs.disconnect()
    }
  })

  observer.observe(observerElement)
}

window.onload = () => {
  startObserver()
}
