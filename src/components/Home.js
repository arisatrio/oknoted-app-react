import React from 'react';
import Masonry from 'react-masonry-css';
import CreateNote from './CreateNote';

const Home = ({ state, styles, ...actions }) => {
    return (
        <div>
            <CreateNote state={state} {...actions} />
            <div className="popup"
                style={state.showPopUp ? styles.inputStyle : styles.inputStyle1}>
                <p className="text">
                    <span className="edit-title">
                        <input
                            value={state.edited_note.title}
                            onChange={(e) => actions.handleChangeNote(e.target.value, "title", "edited_note")}
                        />
                        {/* pin button */}
                    </span>
                    <input
                        className="edit-input"
                        value={state.edited_note.input} onChange={(e) => actions.handleChangeNote(e.target.value, "input", "edited_note")}
                    />
                    <button
                        className="close"
                        onClick={e => actions.updateNote(state.popUp_id)}>
                        Close
                    </button>
                    <button
                        className="delete"
                        onClick={e => actions.removeFromNotes(state.popUp_id)}>
                        Delete
                    </button>
                </p>
            </div>
            <ul>
                <Masonry
                    breakpointCols={4}
                    className="my-masonry-grid"
                    columnClassName="my-masonry-grid_column">
                    {
                        (!state.seacrh ? state.notes_list : state.search_list).filter(n => {
                            return ((n.id !== state.pinned_id) && (n.id !== state.popUp_id))
                        }).map((item, index) =>
                            <li key={index} className="list-item">
                                <span className="span1">
                                    {item.title}
                                    {/* <button className="pin-button">
                                        <img className="pin" src="" alt="" />
                                    </button> */}
                                </span>
                                <span className="span2">
                                    {item.input}
                                </span>
                                <button className="list-button"
                                    onClick={e => actions.showNote(item.id)}
                                >
                                    <img alt="home" className="home" src="./note.png" />
                                </button>
                                <button
                                    className="list-button"
                                    onClick={e => actions.removeFromNotes(index, item.id)}
                                >
                                    <img alt="trash" className="trash" src="./del.png" />
                                </button>
                            </li>
                        )}
                </Masonry>
            </ul >
        </div >
    );
}

export default Home;