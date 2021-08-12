import React from 'react';

const CreateNote = ({ state, ...actions }) => {
    return (
        <div>
            {
                state.visible === false
                    ?
                    <div className="take-notes1">
                        <input type="text" placeholder="Create a note..." className="initial"
                            onClick={actions.handleClick}
                            value={state.notes.title}
                            onChange={() => null}
                        />
                    </div>
                    :

                    <form onSubmit={actions.addToNotes}>
                        <div className="take-notes2">
                            <input type="text" placeholder="Title" className="title"
                                value={state.notes.title}
                                onChange={(e) => actions.handleChangeNote(e.target.value, "title")}
                            />
                            <input type="text" placeholder="Create a note..." className="take-note" autoFocus="autofocus"
                                value={state.notes.input}
                                onChange={(e) => actions.handleChangeNote(e.target.value, "input")}
                            />
                            <button
                                // onClick={actions.addToNotes}
                                type="submit"
                                className="submit"
                            >
                                Close
                            </button>
                        </div>

                    </form>
            }
        </div>
    );
}

export default CreateNote;