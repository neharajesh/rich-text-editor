import { getMyMeme } from "../utilities/fetchMeme"
import Modal from 'react-modal';
import { useState } from "react";
import { formatString } from "../utilities/stringUtilities";

export const AddingMemes = ({ editor }) => {
    let [ meme, setMeme ] = useState("")
    const [ modalOpen, setModalOpen ] = useState(false)

    const addMeme = async() => {
        meme = formatString(meme)
        const memeUrl = await getMyMeme(meme)

        if(memeUrl) {
            editor.chain().focus().setImage({src: memeUrl}).run()
        }

        setModalOpen(false)
    }
    return (<>
        <button className="buttonDefault" onClick={() => setModalOpen(true)}> Add Meme </button>
        <div className="modalContainer">
            <Modal className="modal" isOpen={modalOpen} ariaHideApp={false} >
                <div className="inputContainer">
                    <p> Meme </p>
                    <input type="text" onChange={e => setMeme(e.target.value)} />
                </div>
                <div className="inputButtons">
                    <button className="buttonPrimary" onClick={() => addMeme()}> Add Meme </button>
                    <button className="buttonSecondary" onClick={() => setModalOpen(false)}> Cancel </button>
                </div>
            </Modal>
        </div>
    </>)
}