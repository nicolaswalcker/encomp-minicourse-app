const modal = document.getElementById('modal')
const formatDate = (date) => {
  if (!date) return null
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}
const showModal = (pet) => {
  modal.showModal()

  const modalContent = modal.querySelector('#modal-content')
  modalContent.innerHTML = ''

  modalContent.insertAdjacentHTML(
    'beforeend',
    `
    <div class="card lg:card-side bg-base-100 w-screen lg:w-auto">
     <form method="dialog">
      <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
    </form>
       <figure class="w-1/3 max-sm:p-2">
          <img
            src="${pet.foto}"
            class="rounded-2xl lg:rounded-none h-full"
            alt="Movie" />
      </figure>
      <div class="card-body">
        <h2 class="card-title">${pet.nome} <span class="badge">${pet.especie}</span><span class="badge badge-neutral">${pet.cor}</span></h2>
        <p class="">${pet.observacoes ?? 'Nenhuma observação'}</p>
        <div class="py-1">
          <p>Nascimento: <span class="badge">${formatDate(pet.data_de_aniversario) ?? 'Desconhecido'}</span></p>
          <p>Sexo: <span class="badge">${pet.sexo}</span></p>
          <p>Peso: <span class="badge">${pet.peso}kg</span></p>
          <p>Raça: <span class="badge">${pet.raca}</span></p>
          <p>Vacinas: <span class="badge">${pet.vacinas ?? 'Desconhecido'}</span></p>
        </div>
      </div>
    </div>
    `
  )
}

export default showModal
