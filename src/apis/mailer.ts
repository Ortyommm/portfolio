import axios from 'axios'

const url =
  'https://ortyommm-portfolio-backend.herokuapp.com/mail' /*'http://127.0.0.1:3001/mail'*/

export default axios.create({
  baseURL: url,
})
