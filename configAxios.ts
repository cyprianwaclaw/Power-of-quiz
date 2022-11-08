import axios from 'axios'

const access_token ='71|VfqwT2hId4gmZXjag0SOuwA23AwMiZwvMV8WfinQ'
const API_URL = 'https://quiz.bojarm.pl/api'

export const axiosInstance = axios.create({
    baseURL: API_URL,
    headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
        Authorization: `Bearer ${access_token}`,
    },
})

