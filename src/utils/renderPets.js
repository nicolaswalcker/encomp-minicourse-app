import getOne from '../api/getOne'
import showModal from './infosModal'

const formatDate = (date) => {
  if (!date) return null
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}

const card = (pet) => {
  return `
   <div class="card bg-base-100 w-full h-auto shadow-xl">
          <figure class="h-64">
            <img
              src="${pet.foto}"
              alt="Foto do animal ${pet.nome}"
              class="h-full w-full object-cover"
            />
          </figure>
          <div class="card-body flex-1">
            <h2 class="card-title">
              ${pet.nome}
              <div class="badge badge-secondary">cachorro</div>
            </h2>
            <div class="py-1">
              <p>Nascimento: <span class="badge">${formatDate(pet.data_de_aniversario) ?? 'Desconhecido'}</span></p>
              <p>Sexo: <span class="badge">${pet.sexo}</span></p>
              <p>Peso: <span class="badge">${pet.peso}kg</span></p>
            </div>
            <div class="card-actions">
              <button data-id="${pet.id}" class="btn btn-outline w-full btn-sm">Ver mais</button>
            </div>
          </div>
        </div>
  `
}
export const renderPets = (pets) => {
  const petsContainer = document.getElementById('pets-container')
  petsContainer.innerHTML = ''
  pets.forEach((element) => {
    const cardHTML = card(element)
    petsContainer.insertAdjacentHTML('beforeend', cardHTML)
  })
  petsContainer.querySelectorAll('.btn').forEach((button) => {
    button.addEventListener('click', () => {
      const id = button.getAttribute('data-id')
      getOne(id).then((pet) => {
        showModal(pet)
      })
    })
  })
}
