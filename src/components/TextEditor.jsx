import { useEditor, EditorContent, BubbleMenu } from '@tiptap/react';
import StarterKit from '@tiptap/starter-kit';
import Document from "@tiptap/extension-document"
import Paragraph from "@tiptap/extension-paragraph"
import Text from "@tiptap/extension-text"
import Image from "@tiptap/extension-image"
import Dropcursor from "@tiptap/extension-dropcursor"
import Underline from "@tiptap/extension-underline"
import "../styles.css"
import Link from '@tiptap/extension-link';
import { AddingTextStyles } from './AddingTextStyles';
import { AddingLinks } from './AddingLinks';
import { AddingImages } from './AddingImages';
import { AddingMemes } from './AddingMemes';
import Placeholder from '@tiptap/extension-placeholder';
import { AddInline } from './InlineEmbeds';

export const TextEditor = () => {
    //Adding extensions that our text editor will need
	const editor = useEditor({
		extensions: [StarterKit, 
            Document,
            Paragraph,
            Text,
            Image,
            Dropcursor,
            Underline,
            Link,
            BubbleMenu,
            Placeholder,
        ],
		autofocus: 'end'
	});

	return (
		<>
            <div className="menuEditorContainer">
                <div className='menuContainer'>
                    <AddingTextStyles editor={editor} />
                    <AddingLinks editor={editor} />
                    <AddingImages editor={editor} />
                    <AddingMemes editor={editor} />  
                    <AddInline editor={editor} />         
                </div>
                <EditorContent editor={editor} />
            </div>				
		</>
	);
};