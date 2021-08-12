import axios from "axios"

const API_KEY = "AzseJ8Py2nvgwf5RHEri1hlHzwQ1rP1i"

const API_URL = "https://api.giphy.com/v1/stickers/search"

export const getMyMeme = async(text) => {
    try {
        const response = await axios.get(`${API_URL}?q=${text}&api_key=${API_KEY}`)
        return response.data.data[4].images.fixed_height.url
    } catch (err) {
        console.log("Error occurred while fetching meme", err.message)
    }    
}