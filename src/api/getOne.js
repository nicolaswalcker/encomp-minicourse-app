import client from './client'

const getOne = async (id) => {
  try {
    const response = await client.get(`/api/pet/${id}`)
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getOne
