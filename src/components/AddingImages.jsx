export const AddingImages = ({ editor }) => {  
    const addImage = () => {
       const url = window.prompt("URL")
        if(url) {
            editor.chain().focus().setImage({src: url}).run()
        }
    }
    
    return (
        <div>
            <button onClick={() => addImage()}>
                Add Image
            </button>
        </div>
    )
}