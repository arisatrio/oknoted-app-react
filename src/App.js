import React from 'react';
import Home from './components/Home';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
//import trash from './'

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      edited_note: {
        title: "",
        input: "",
      },
      notes: {
        title: "",
        input: "",
      },
      deleted_note: {
        title: "",
        input: ""
      },

      search: null,
      visible: false,
      showPopUp: false,
      popUp_id: null,
      pinned_id: null,

      notes_list: [],
      trash_list: [],
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChangeNote = this.handleChangeNote.bind(this);
    this.addToNotes = this.addToNotes.bind(this);
    this.removeFromNotes = this.removeFromNotes.bind(this);
    this.showNote = this.showNote.bind(this);
    this.updateNote = this.updateNote.bind(this);

    this.actions = {
      handleClick: this.handleClick,
      handleChangeNote: this.handleChangeNote,
      addToNotes: this.addToNotes,
      removeFromNotes: this.removeFromNotes,
      showNote: this.showNote,
      updateNote: this.updateNote,
    };
  };

  componentDidMount() {
    const trash_string = localStorage.getItem('trash');
    const trash_list = JSON.parse(trash_string);
    const list_string = localStorage.getItem('list');
    const notes_list = JSON.parse(list_string);

    document.title = 'OK Noted!';

    this.setState({
      ...this.state,
      notes_list: (notes_list ? notes_list : []),
      trash_list: (trash_list ? trash_list : []),
    });
  }

  handleClick() {
    this.setState({
      ...this.state,
      visible: true
    });
  }

  handleChangeNote(value, key, obj = "notes") {
    this.setState({
      ...this.state,
      [obj]: {
        ...this.state[obj],
        [key]: value
      }
    });
  }

  addToNotes() {
    const notes_list = this.state.notes_list;
    if ((this.state.notes.input.length) > 0 || (this.state.notes.title.length) > 0) {
      notes_list.unshift({
        id: Date.now(),
        ...this.state.notes
      });
      this.setState({
        ...this.state,
        notes_list: notes_list,
        notes: {
          ...this.state.notes,
          title: "",
          input: ""
        },
        visible: false
      });
      localStorage.setItem("list", JSON.stringify(notes_list));
    } else {
      this.setState({
        ...this.state,
        visible: false
      });
    }
  }

  removeFromNotes(i, id) {
    let deleted_note = this.state.notes_list.filter(item => { return item.id === id })[0];
    const trash_list = this.state.trash_list;

    trash_list.unshift(deleted_note);
    this.setState({
      trash_list: trash_list
    });

    const notes_list = this.state.notes_list.filter((note, index) => { return index !== i; });
    if (this.state.pinned_id) {
      this.setState({
        notes_list: notes_list,
        pinned_id: null
      });
    }
    else {
      this.setState({
        showPopUp: false,
        notes_list: notes_list,
      });
    }

    localStorage.setItem("list", JSON.stringify(notes_list));
    localStorage.setItem("trash", JSON.stringify(trash_list));
  }

  showNote(id) {
    let edited_note = this.state.notes_list.filter(item => { return item.id === id })[0];
    this.setState({
      ...this.state,
      edited_note,
      showPopUp: true,
      popUp_id: id,
    })
  }

  updateNote(id) {
    let note = this.state.edited_note;
    let containsOnlyOneElement = this.state.notes_list.length === 1;

    this.setState({
      ...this.state,
      notes_list: (containsOnlyOneElement ? [{ id, ...note }] : [{ id, ...note }, this.state.notes_list.filter(item => item.id !== id)]),
      edited_note: {
        title: "",
        input: "",
      },
      showPopUp: false,
      popUp_id: null,
    });
  }




  render() {
    let styles = {
      inputStyle: {
        display: 'flex'
      },
      inputStyle1: {
        display: 'none'
      }
    };

    return (
      <div>
        <div className="header">
          <img src="./logo.png" />
          <h3>OK Noted!</h3>
          <input type="text" className="search" placeholder="search" />
        </div>
        <div className="content">
          <Router>
            <div className="navigation">
              <Link to="/" className="nav-home">
                <img alt="home" className="home" src="./note.png" />
              </Link>
              <Link to="/trash" className="nav-trash">
                <img alt="trash" className="trash" src="./del.png" />
              </Link>
            </div>
            <Switch>
              <Route exact path="/" render={() => <Home state={this.state} styles={styles} {...this.actions} />} />
            </Switch>
          </Router>
        </div>
      </div>
    );
  };
}
export default App;
