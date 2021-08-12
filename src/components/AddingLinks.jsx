import { useState } from "react"
import Modal from 'react-modal';

export const AddingLinks = ({ editor }) => {
    let [ newLink, setNewLink ] = useState("")
    const [ modalOpen, setModalOpen ] = useState(false)

    const setLink = () => {
        if(newLink.substring(0,3) !== "http"){
            newLink = "https://" + newLink
        } else if(newLink.substring(0, 2) !== "www") {
            newLink = "https://www." + newLink
        }

        editor.chain().focus().extendMarkRange('link').setLink({ href: newLink }).run()
        setModalOpen(false)
    }

    return(<>
        <div>
            <button className="buttonDefault" onClick={() => setModalOpen(true)}> Add Link </button>
            <div className="modalContainer">
                <Modal className="modal" isOpen={modalOpen} ariaHideApp={false} >
                    <div className="inputContainer">
                        <p> Link </p>
                        <input type="text" onChange={e => setNewLink(e.target.value)} />
                    </div>
                    <div className="inputButtons">
                        <button className="buttonPrimary" onClick={() => setLink()}> Add Link </button>
                        <button className="buttonSecondary" onClick={() => setModalOpen(false)}> Cancel </button>
                    </div>
                </Modal>
            </div>
        </div>        
    </>)
}