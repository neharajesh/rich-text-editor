import { useState } from "react"
import Modal from 'react-modal';

//Adding images
export const AddingImages = ({ editor }) => { 
    const [ imageUrl, setImageUrl ] = useState("")
    const [ modalOpen, setModalOpen ] = useState(false) 
    const addImage = () => {
        setModalOpen(false)
        editor.chain().focus().setImage({src: imageUrl}).run()
    }
    
    return (
        <div>
            <button className="buttonDefault" onClick={() => setModalOpen(true)}>
                Add Image
            </button>
            <div className="modalContainer">
                <Modal className="modal" isOpen={modalOpen} ariaHideApp={false} >
                    <div className="inputContainer">
                        <p> URL </p>
                        <input type="text" onChange={e => setImageUrl(e.target.value)} />
                    </div>
                    <div className="inputButtons">
                        <button className="buttonPrimary" onClick={() => addImage()}> Add Image </button>
                        <button className="buttonSecondary" onClick={() => setModalOpen(false)}> Cancel </button>
                    </div>
                </Modal>
            </div>
        </div>
    )
}