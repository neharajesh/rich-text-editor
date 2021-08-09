import Image from "@tiptap/extension-image";
import { markInputRule } from "@tiptap/core";

const urlExpression = /(https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|www\.[a-zA-Z0-9][a-zA-Z0-9-]+[a-zA-Z0-9]\.[^\s]{2,}|https?:\/\/(?:www\.|(?!www))[a-zA-Z0-9]+\.[^\s]{2,}|www\.[a-zA-Z0-9]+\.[^\s]{2,})$/gm;

const AddInlineImage = Image.extend({
    addInputRules() {
        return [
            markInputRule(urlExpression, this.type)
        ]
    }
})

const memeExpression = /^\{\{\*_meme\}\}$/gm;

const AddInlineMeme = Image.extend({
    addInputRules() {
        return[
            markInputRule(memeExpression, this.type)
        ]
    }
})

export const InlineEmbeds = ({ editor }) => {
    const urlRegex = new RegExp(urlExpression)

    const addEmbed = () => {
        const url = editor.getHTML()
        if (url.match(urlRegex)) {
            editor.chain().focus().setImage({ src: url }).run()
        }
    }

    return (<>
        <button onClick={() => addImage()}> Add image </button>
    </>)
    
}