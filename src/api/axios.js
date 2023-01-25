import axios from 'axios'

export default axios.create({
    baseURL:'https://api.dribbble.com/v2/user/shots?access_token=',
    accessToken:"4d66290d1ae13706dab6b0b398ff3d5312f85e90d8e495566fc8675ac8027f2f"
})