const modal = document.getElementById('modal')
const formatDate = (date) => {
  if (!date) return null
  const [year, month, day] = date.split('-')
  return `${day}/${month}/${year}`
}
const showModal = (pet) => {
  modal.showModal()

  modal.innerHTML = ''

  modal.insertAdjacentHTML(
    'beforeend',
    `
      <div class="modal-box flex flex-col items-start gap-3">
        <h3 class="text-xl font-bold">Ficha do animal</h3>
        <div class="p-2 rounded-lg flex flex-col items-start gap-2 border-2 border-primary">
         <div class="flex items-center justify-start gap-3 flex-wrap">
            <img class="size-24 rounded-full object-cover" src="${pet.foto}" alt="">
              <div class="flex flex-col items-start gap-1">
                <h4 class="text-lg font-semibold">${pet.nome}</h4>
                <div><span class="badge badge-primary">${pet.especie}</span> <span class="badge badge-primary">${pet.sexo}</span> <span class="badge badge-secondary">${pet.raca}</span> <span class="badge badge-neutral">${pet.peso}kg</span></div>
                <p class="text-md font-medium">Nascimento: ${formatDate(pet.data_de_aniversario) ?? '<span class="text-red-400">Desconhecido</span>'}</p>
                <p class="text-md font-medium text-red-400">${pet.vacinas ?? 'Sem registro de vacinas'}</p>
              </div>
              <p>
                ${pet.observacoes ?? 'Nenhuma observação'}
              </p>
            </div>
          </div>
          <form method="dialog">
            <button class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">✕</button>
          </form>
        </div>
    `
  )
}

export default showModal
