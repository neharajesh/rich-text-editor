import { getMyMeme } from "../utilities/fetchMeme"

export const AddingMemes = ({ editor }) => {
    const addMeme = async() => {
        const memetext = window.prompt("meme")
        const memeUrl = await getMyMeme(memetext)

        if(memeUrl) {
            editor.chain().focus().setImage({src: memeUrl}).run()
        }
    }
    return (<>
        <button onClick={() => addMeme()}> Add Meme </button>
    </>)
}