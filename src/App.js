import { TextEditor } from "./components/TextEditor";

const App = () => {
  return (<>
  
      <div className="editorContainer">
        <h1 className="title"> RICH TEXT EDITOR </h1>
        <div className="featureList">
            <ul>
                <li> <b> Text Utilities </b> : Bold, Italics, Strikethrough and Underline </li>
                <li> <b> Add Links </b> : Select word you want to embed hyperlink to. Click on "Add Link" to add your link. </li>
                <li> <b> Add Images </b> : Upload images by adding URL using "Add Image" or paste images directly into the editor. You can also paste image URLs directly into the editor and click on "Embed" to add them! </li>
                <li> <b> Add Memes </b> : Add memes by typing {"{{cat_meme}}"} in "Add Meme" or paste directly into the editor. You can also type {"{{cat_meme}}"} in the editor and click on "Embed" to add it directly! </li>
            </ul>
        </div>
        <TextEditor />

        <div className="badge">
            <a href="https://github.com/neharajesh/rich-text-editor"> GitHub </a>
        </div>
      </div>    
  </>);
}

export default App;
