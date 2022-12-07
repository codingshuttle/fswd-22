import React from "react";

function SingleNote(props) {

    const noteStyle = {
        padding: '20px',
        borderRadius: '10px',
        border: '2px solid green',
        backgroundColor: '#eff2e4'
    }

    return <div style={noteStyle} className="singleNote">
        <p className="noteText">{props.note}</p>
    </div>;
}

export default SingleNote;
