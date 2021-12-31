import axios from "axios"
const baseUrl = '/api/proyectos'

const getProyects = async () => {
    const res = await axios.get(baseUrl)
    return res.data
}

export default { getProyects }