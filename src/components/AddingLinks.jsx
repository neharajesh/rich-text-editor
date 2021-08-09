export const AddingLinks = ({ editor }) => {
    const setLink = () => {
        const url = window.prompt("URL")
        if(url) {
            editor.chain().focus().extendMarkRange('link').setLink({ href: url }).run()
        }
    }
    return(<>
        <div>
            <button onClick={() => setLink()}> Add Link </button>
        </div>        
    </>)
}