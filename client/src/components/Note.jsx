import React, { useEffect, useState } from 'react'
import { ContentState, convertFromHTML, convertToRaw, EditorState } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import { draftToHtml } from 'draftjs-to-html';

export default function Note() {
    const note = {
        id: 1,
        content: '<p>This is a new note</p>'
    }

    const [editorState, setEditorState] = useState(() => {
        return EditorState.createEmpty();
    });

    const [rawHtml, setRawHtml] = useState(note.content);

    useEffect(() => {
        const blocksFromHtml = convertFromHTML(note.content);
        const state = ContentState.createFromBlockArray(
            blocksFromHtml.contentBlocks,
            blocksFromHtml.entityMap
        );
        setEditorState(EditorState.createWithContent(state));
    }, [note.id]);

    useEffect(() => {
        setRawHtml(note.content);
    }, [note.content]);

    const handleOnChange = (e) => {
        setEditorState(e);
        setRawHtml(draftToHtml(convertToRaw(e.getCurrentContent())));
    }

    return (
        <Editor
            editorState={editorState}
            onEditorStateChange={handleOnChange}
            placeholder='Write something...'
            toolbarClassName="toolbar-class"
        />
    )
}
