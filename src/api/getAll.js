import client from './client'

const getAll = async () => {
  try {
    const response = await client.get('/api/pets')
    return response.data
  } catch (error) {
    console.error(error)
    throw error
  }
}

export default getAll
