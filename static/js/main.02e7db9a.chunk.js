(this["webpackJsonpoknoted-app"]=this["webpackJsonpoknoted-app"]||[]).push([[0],{30:function(t,e,s){},37:function(t,e,s){"use strict";s.r(e);var n=s(0),a=s.n(n),i=s(23),o=s.n(i),l=(s(30),s(11)),c=s(2),r=s(12),d=s(13),h=s(7),u=s(15),j=s(14),b=s(16),p=s(24),O=s(1),m=function(t){var e=t.state,s=Object(b.a)(t,["state"]);return Object(O.jsx)("div",{children:!1===e.visible?Object(O.jsx)("div",{className:"take-notes1",children:Object(O.jsx)("input",{type:"text",placeholder:"Create a note...",className:"initial",onClick:s.handleClick,value:e.notes.title,onChange:function(){return null}})}):Object(O.jsx)("form",{onSubmit:s.addToNotes,children:Object(O.jsxs)("div",{className:"take-notes2",children:[Object(O.jsx)("input",{type:"text",placeholder:"Title",className:"title",value:e.notes.title,onChange:function(t){return s.handleChangeNote(t.target.value,"title")}}),Object(O.jsx)("input",{type:"text",placeholder:"Create a note...",className:"take-note",autoFocus:"autofocus",value:e.notes.input,onChange:function(t){return s.handleChangeNote(t.target.value,"input")}}),Object(O.jsx)("button",{type:"submit",className:"submit",children:"Close"})]})})})},N=function(t){var e=t.state,s=t.styles,n=Object(b.a)(t,["state","styles"]);return Object(O.jsxs)("div",{children:[Object(O.jsx)(m,Object(c.a)({state:e},n)),Object(O.jsx)("div",{className:"popup",style:e.showPopUp?s.inputStyle:s.inputStyle1,children:Object(O.jsxs)("p",{className:"text",children:[Object(O.jsx)("span",{className:"edit-title",children:Object(O.jsx)("input",{value:e.edited_note.title,onChange:function(t){return n.handleChangeNote(t.target.value,"title","edited_note")}})}),Object(O.jsx)("input",{className:"edit-input",value:e.edited_note.input,onChange:function(t){return n.handleChangeNote(t.target.value,"input","edited_note")}}),Object(O.jsx)("button",{className:"close",onClick:function(t){return n.updateNote(e.popUp_id)},children:"Close"}),Object(O.jsx)("button",{className:"delete",onClick:function(t){return n.removeFromNotes(e.popUp_id)},children:"Delete"})]})}),Object(O.jsx)("ul",{children:Object(O.jsx)(p.a,{breakpointCols:4,className:"my-masonry-grid",columnClassName:"my-masonry-grid_column",children:(e.seacrh?e.search_list:e.notes_list).filter((function(t){return t.id!==e.pinned_id&&t.id!==e.popUp_id})).map((function(t,e){return Object(O.jsxs)("li",{className:"list-item",children:[Object(O.jsx)("span",{className:"span1",children:t.title}),Object(O.jsx)("span",{className:"span2",children:t.input}),Object(O.jsx)("button",{className:"list-button",onClick:function(e){return n.showNote(t.id)},children:Object(O.jsx)("img",{alt:"home",className:"home",src:"./note.png"})}),Object(O.jsx)("button",{className:"list-button",onClick:function(s){return n.removeFromNotes(e,t.id)},children:Object(O.jsx)("img",{alt:"trash",className:"trash",src:"./del.png"})})]},e)}))})})]})},v=s(17),x=s(3),g=function(t){Object(u.a)(s,t);var e=Object(j.a)(s);function s(t){var n;return Object(r.a)(this,s),(n=e.call(this,t)).state={edited_note:{title:"",input:""},notes:{title:"",input:""},deleted_note:{title:"",input:""},search:null,visible:!1,showPopUp:!1,popUp_id:null,pinned_id:null,notes_list:[],trash_list:[]},n.handleClick=n.handleClick.bind(Object(h.a)(n)),n.handleChangeNote=n.handleChangeNote.bind(Object(h.a)(n)),n.addToNotes=n.addToNotes.bind(Object(h.a)(n)),n.removeFromNotes=n.removeFromNotes.bind(Object(h.a)(n)),n.showNote=n.showNote.bind(Object(h.a)(n)),n.updateNote=n.updateNote.bind(Object(h.a)(n)),n.actions={handleClick:n.handleClick,handleChangeNote:n.handleChangeNote,addToNotes:n.addToNotes,removeFromNotes:n.removeFromNotes,showNote:n.showNote,updateNote:n.updateNote},n}return Object(d.a)(s,[{key:"componentDidMount",value:function(){var t=localStorage.getItem("trash"),e=JSON.parse(t),s=localStorage.getItem("list"),n=JSON.parse(s);document.title="OK Noted!",this.setState(Object(c.a)(Object(c.a)({},this.state),{},{notes_list:n||[],trash_list:e||[]}))}},{key:"handleClick",value:function(){this.setState(Object(c.a)(Object(c.a)({},this.state),{},{visible:!0}))}},{key:"handleChangeNote",value:function(t,e){var s=arguments.length>2&&void 0!==arguments[2]?arguments[2]:"notes";this.setState(Object(c.a)(Object(c.a)({},this.state),{},Object(l.a)({},s,Object(c.a)(Object(c.a)({},this.state[s]),{},Object(l.a)({},e,t)))))}},{key:"addToNotes",value:function(){var t=this.state.notes_list;this.state.notes.input.length>0||this.state.notes.title.length>0?(t.unshift(Object(c.a)({id:Date.now()},this.state.notes)),this.setState(Object(c.a)(Object(c.a)({},this.state),{},{notes_list:t,notes:Object(c.a)(Object(c.a)({},this.state.notes),{},{title:"",input:""}),visible:!1})),localStorage.setItem("list",JSON.stringify(t))):this.setState(Object(c.a)(Object(c.a)({},this.state),{},{visible:!1}))}},{key:"removeFromNotes",value:function(t,e){var s=this.state.notes_list.filter((function(t){return t.id===e}))[0],n=this.state.trash_list;n.unshift(s),this.setState({trash_list:n});var a=this.state.notes_list.filter((function(e,s){return s!==t}));this.state.pinned_id?this.setState({notes_list:a,pinned_id:null}):this.setState({showPopUp:!1,notes_list:a}),localStorage.setItem("list",JSON.stringify(a)),localStorage.setItem("trash",JSON.stringify(n))}},{key:"showNote",value:function(t){var e=this.state.notes_list.filter((function(e){return e.id===t}))[0];this.setState(Object(c.a)(Object(c.a)({},this.state),{},{edited_note:e,showPopUp:!0,popUp_id:t}))}},{key:"updateNote",value:function(t){var e=this.state.edited_note,s=1===this.state.notes_list.length;this.setState(Object(c.a)(Object(c.a)({},this.state),{},{notes_list:s?[Object(c.a)({id:t},e)]:[Object(c.a)({id:t},e),this.state.notes_list.filter((function(e){return e.id!==t}))],edited_note:{title:"",input:""},showPopUp:!1,popUp_id:null}))}},{key:"render",value:function(){var t=this,e={inputStyle:{display:"flex"},inputStyle1:{display:"none"}};return Object(O.jsxs)("div",{children:[Object(O.jsxs)("div",{className:"header",children:[Object(O.jsx)("img",{src:"./logo.png"}),Object(O.jsx)("h3",{children:"OK Noted!"}),Object(O.jsx)("input",{type:"text",className:"search",placeholder:"search"})]}),Object(O.jsx)("div",{className:"content",children:Object(O.jsxs)(v.a,{children:[Object(O.jsxs)("div",{className:"navigation",children:[Object(O.jsx)(v.b,{to:"/",className:"nav-home",children:Object(O.jsx)("img",{alt:"home",className:"home",src:"./note.png"})}),Object(O.jsx)(v.b,{to:"/trash",className:"nav-trash",children:Object(O.jsx)("img",{alt:"trash",className:"trash",src:"./del.png"})})]}),Object(O.jsx)(x.c,{children:Object(O.jsx)(x.a,{exact:!0,path:"/",render:function(){return Object(O.jsx)(N,Object(c.a)({state:t.state,styles:e},t.actions))}})})]})})]})}}]),s}(a.a.Component);o.a.render(Object(O.jsx)(a.a.StrictMode,{children:Object(O.jsx)(g,{})}),document.getElementById("root"))}},[[37,1,2]]]);
//# sourceMappingURL=main.02e7db9a.chunk.js.map