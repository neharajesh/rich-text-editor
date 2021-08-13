import axios from "axios"

const API_KEY = process.env.REACT_APP_API_KEY

const API_URL = "https://api.giphy.com/v1/stickers/search"

export const getMyMeme = async(text) => {
    try {
        const response = await axios.get(`${API_URL}?q=${text}&api_key=${API_KEY}`)
        return response.data.data[4].images.fixed_height.url
    } catch (err) {
        console.log("Error occurred while fetching meme", err.message)
    }    
}