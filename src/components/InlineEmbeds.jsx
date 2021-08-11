import { getMyMeme } from '../utilities/fetchMeme';

const imageExpression = /(http(s?):)([/|.|\w|\s|-])*\.(?:jpg|gif|png)/g
const memeExpression = /\{\{(.+?)_meme\}\}/

export const AddMemeInline = ({ editor }) => {  
    
    const embedLink = async() => {
        let content = editor.getHTML()
        if(content.match(memeExpression)) {
            let [meme, memeWord] = content.match(memeExpression)
            let memeUrl = await getMyMeme(memeWord)

            //removes {{cat_meme}}
            content = content.replace(meme, "")
            //sets editor with updated content
            editor.commands.setContent(content)
            //adds the image 
            editor.chain().focus().setImage({src: memeUrl}).run()

        } else if(content.match(imageExpression)){
            let imageUrl = content.match(imageExpression)
            
            //removes image url
            content = content.replace(imageExpression, `<img src=${imageUrl[0]}`)            
            editor.commands.setContent(content)
            //adds image
            editor.chain().focus().setImage({src: imageUrl[0]}).run()
        } else {
            return;
        } 
    }

    return (<>
        <div>
            <button className="buttonDefault" onClick={() => embedLink()}> Embed </button>
        </div>
    </>)
}