export const AddingTextStyles = ({ editor }) => {
    if (!editor) {
      return null
    }
  
    return (
      <>
      <div>
        <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'buttonDefault isActive' : 'buttonDefault'}
            >
                <b> B </b>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'buttonDefault isActive' : 'buttonDefault'}
            >
                <em> I </em>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'buttonDefault isActive' : 'buttonDefault'}
            >
                <s> abc </s>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'buttonDefault isActive' : 'buttonDefault'}
            >
                <u> U </u>
            </button>
        
        </div>
      </>
    )
}