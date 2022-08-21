import React,{useState} from 'react'
import { Editor } from "react-draft-wysiwyg";
import "react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import { EditorState, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
// import htmlToDraft from 'html-to-draftjs';

export default function NewsEditor(props) {
    const [editorState, setEditorState] = useState('')
    function onEditorStateChange(state) {
        setEditorState(state)
    }
    return (
        <div>
            <Editor
                editorState={editorState}
                toolbarClassName="toolbarClassName"
                wrapperClassName="wrapperClassName"
                editorClassName="editorClassName"
                onEditorStateChange={state=>onEditorStateChange(state)}
                onBlur={()=>{
                    //失去焦点
                    let value = draftToHtml(convertToRaw(editorState.getCurrentContent()))
                    console.log(value)
                    props.getContent(value)
                }}
            />
        </div>
    )
}
