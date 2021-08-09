import { BubbleMenu } from "@tiptap/react"

export const AddingTextStyles = ({ editor }) => {
    if (!editor) {
      return null
    }
  
    return (
      <>
      <div>
          {editor && <BubbleMenu className="bubbleMenu" editor={editor}>
            <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active bubbleButton' : 'bubbleButton'}
            >
                <b> B </b>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active bubbleButton' : 'bubbleButton'}
            >
                <em> I </em>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active bubbleButton' : 'bubbleButton'}
            >
                strike
            </button>
            <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active bubbleButton' : 'bubbleButton'}
            >
                <u> U </u>
            </button>
        </BubbleMenu>}

        <button
            onClick={() => editor.chain().focus().toggleBold().run()}
            className={editor.isActive('bold') ? 'is-active' : ''}
            >
                <b> B </b>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleItalic().run()}
            className={editor.isActive('italic') ? 'is-active' : ''}
            >
                <em> I </em>
            </button>
            <button
            onClick={() => editor.chain().focus().toggleStrike().run()}
            className={editor.isActive('strike') ? 'is-active' : ''}
            >
                strike
            </button>
            <button
            onClick={() => editor.chain().focus().toggleUnderline().run()}
            className={editor.isActive('underline') ? 'is-active' : ''}
            >
                <u> U </u>
            </button>
        
        </div>
      </>
    )
}