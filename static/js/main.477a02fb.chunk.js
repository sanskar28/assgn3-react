(this["webpackJsonpassignment-3"]=this["webpackJsonpassignment-3"]||[]).push([[0],[,,,,,,,function(e,t,a){e.exports={Participants:"Participants_Participants__1pSOv",container:"Participants_container__wttpU",DeletePopupContainer:"Participants_DeletePopupContainer__2hBga",DeletePopupEnter:"Participants_DeletePopupEnter__2xNMI",DeletePopupEnterActive:"Participants_DeletePopupEnterActive__vjOdc",DeletePopupExit:"Participants_DeletePopupExit__3Nsb7",DeletePopupExitActive:"Participants_DeletePopupExitActive__2mpYj"}},,function(e,t,a){e.exports={Sidedrawer:"Sidedrawer_Sidedrawer__2kLOj",Open:"Sidedrawer_Open__1dVNV",Close:"Sidedrawer_Close__3okKW",Menu:"Sidedrawer_Menu__2ecTw",Logo:"Sidedrawer_Logo__2Yu_Q",Title:"Sidedrawer_Title__3mwPc"}},,,,,,function(e,t,a){e.exports={Participant:"Participant_Participant__dDGhz",DeleteStyle:"Participant_DeleteStyle__2XMEO",index:"Participant_index__1MPUy",name:"Participant_name__3LBYW",roll:"Participant_roll__aivJv"}},,function(e,t,a){e.exports={container:"Homepage_container__3qlNJ","in-from-right":"Homepage_in-from-right__2mCfP",heading:"Homepage_heading__27l6D","in-from-left":"Homepage_in-from-left__3b2yY",title:"Homepage_title__3thWq",Logo:"Homepage_Logo__1KQtn","in-from-top":"Homepage_in-from-top__12MXH","in-from-bottom":"Homepage_in-from-bottom__3k8Rq"}},function(e,t,a){e.exports={NavigationItem:"NavigationItem_NavigationItem__3B3qI",link:"NavigationItem_link__2GjKO",active:"NavigationItem_active__3hGNq"}},function(e,t,a){e.exports={Toolbar:"Toolbar_Toolbar__3wXBD",Logo:"Toolbar_Logo__2mOiT",title:"Toolbar_title__1Crmv"}},function(e,t,a){e.exports={Hamburger:"Hamburger_Hamburger__ABFYR",open:"Hamburger_open__I547J"}},function(e,t,a){e.exports={Subject:"Subject_Subject__22V7G",border:"Subject_border__n6z0q",image:"Subject_image__2ZoMo"}},,,,function(e,t,a){e.exports={Button:"Button_Button__3-iia",Button2:"Button_Button2__2-6nB"}},,,function(e,t,a){e.exports={NavigationItems:"NavigationItems_NavigationItems__3eovB"}},,function(e,t,a){e.exports={Logo:"Logo_Logo__9szun"}},function(e,t,a){e.exports=a.p+"static/media/logo512.ff82b697.png"},function(e,t,a){e.exports={Backdrop:"Backdrop_Backdrop__2VMGJ"}},function(e,t,a){e.exports={Subjects:"Subjects_Subjects__2ZNdJ"}},function(e,t,a){e.exports={DeleteButton:"DeleteButton_DeleteButton__3L7A7"}},function(e,t,a){e.exports={Modal:"Modal_Modal__1-AYC"}},function(e,t,a){e.exports={Heading:"DeletePopup_Heading__UgdoG"}},,,function(e,t,a){e.exports=a(51)},,,,,function(e,t,a){},,,,,,function(e,t,a){},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(14),o=a.n(l),i=(a(44),a(10)),c=a(11),s=a(13),m=a(12),u=a(28),d=a.n(u),p=a(16),E=a(18),_=a.n(E),h=function(e){return r.a.createElement("div",{className:_.a.NavigationItem,onClick:e.onclick},r.a.createElement(p.b,{exact:e.exact,to:e.to,className:_.a.link,activeClassName:_.a.active},e.children))},g=function(e){return r.a.createElement("div",{className:d.a.NavigationItems},r.a.createElement(h,{onclick:e.onclick,to:"/",exact:!0},"Home"),r.a.createElement(h,{onclick:e.onclick,to:"/subjects"},"Subjects"))},f=a(30),v=a.n(f),b=a(31),k=a.n(b),C=function(){return r.a.createElement("div",{className:v.a.Logo},r.a.createElement("img",{src:k.a,alt:"Logo"}))},S=a(19),N=a.n(S),y={color:"#edbf64",fontWeight:600,display:"inline-block"},P=function(){return r.a.createElement("div",{style:y},"Assist")},w=function(){return r.a.createElement("div",{className:N.a.Toolbar},r.a.createElement("div",{className:N.a.Logo},r.a.createElement(C,null)),r.a.createElement("div",{className:N.a.title},r.a.createElement(P,null)),r.a.createElement("nav",null,r.a.createElement(g,null)))},j=a(9),x=a.n(j),H=a(20),A=a.n(H),B=function(e){return r.a.createElement("div",{className:[A.a.Hamburger,e.open?A.a.open:A.a.close].join(" ")})},D=a(32),O=a.n(D),L=function(e){return r.a.createElement("div",{className:O.a.Backdrop,onClick:e.onClick})},T=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={open:!1},e.SidedrawerToggle=function(){var t=e.state.open;t=!t,e.setState({open:t})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this.state.open?r.a.createElement(L,{onClick:this.SidedrawerToggle}):null;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:[x.a.Sidedrawer,this.state.open?x.a.Open:x.a.Close].join(" ")},r.a.createElement("div",{className:x.a.Menu,onClick:this.SidedrawerToggle},r.a.createElement(B,{open:this.state.open})),r.a.createElement("div",{className:x.a.Logo},r.a.createElement(C,null)),r.a.createElement("div",{className:x.a.Title},r.a.createElement(P,null)),r.a.createElement("nav",null,r.a.createElement(g,{onclick:this.SidedrawerToggle}))),e)}}]),a}(r.a.Component),M=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement(w,null),r.a.createElement(T,null),r.a.createElement("main",null,e.children))},I=a(1),G=a(21),K=a.n(G),J=function(e){return r.a.createElement("div",{className:K.a.Subject,onClick:e.clickHandler},r.a.createElement("div",{className:K.a.image},r.a.createElement("img",{src:"images/Subjects/"+e.code+".jpg",alt:e.code})),r.a.createElement("p",{style:{fontWeight:600,fontSize:"1.8rem"}},e.name),r.a.createElement("p",{style:{fontSize:"1.8rem"}},e.code),r.a.createElement("p",null,"Credits:",e.credits," Semester:",e.semester),r.a.createElement("div",{className:K.a.border}))},Y=a(33),R=a.n(Y),W=[{name:"Programming and Data Structures Labaratory",code:"CS19101",credits:3,semester:1},{name:"Electrical Technology Laboratory",code:"EE19001",credits:2,semester:2},{name:"Physics-I Laboratory",code:"PH19001",credits:2,semester:1},{name:"Algorithms Labaratory",code:"CS29003",credits:2,semester:3},{name:"Chemistry Laboratory for Ist year",code:"CY19001",credits:2,semester:2}],q=function(e){return r.a.createElement("div",{className:R.a.Subjects},W.map((function(t){return r.a.createElement(J,{key:t.code,name:t.name,code:t.code,credits:t.credits,semester:t.semester,clickHandler:function(){return a=t.code,void e.history.push("/subjects/".concat(a));var a}})})))},z=a(37),F=a(15),U=a.n(F),V=a(34),X=a.n(V),Q=function(e){return r.a.createElement("div",{className:X.a.DeleteButton,onClick:e.onClick})},Z=function(e){return r.a.createElement("div",{className:U.a.Participant},r.a.createElement("div",{className:U.a.index},e.index,"."),r.a.createElement("div",{className:U.a.name},e.name),r.a.createElement("div",{className:U.a.roll},e.roll),r.a.createElement("div",{className:U.a.DeleteStyle},r.a.createElement(Q,{onClick:e.DeleteHandler},"Delete")))},$=function(){return r.a.createElement("div",null,r.a.createElement("h3",null,"Error 404!"),r.a.createElement("p",null,"Page was not found on the website."))},ee=a(25),te=a.n(ee),ae=function(e){return r.a.createElement("div",{className:e.secondary?te.a.Button2:te.a.Button,onClick:e.onClick},e.children)},ne=function(e){return r.a.createElement(ae,{onClick:e.clicked},"Add All Participants")},re=a(35),le=a.n(re),oe=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:le.a.Modal},e.children),r.a.createElement(L,{onClick:e.closeHandler}))},ie=a(36),ce=a.n(ie),se=function(e){return r.a.createElement(oe,{closeHandler:e.closeHandler},r.a.createElement("h3",{className:ce.a.Heading},"Are you sure?"),r.a.createElement("hr",null),r.a.createElement("p",null,"You are about to deregister"," ",r.a.createElement("strong",null,e.participant.name,", ",e.participant.roll)," ","from this course. Do you understand that this action can have serious consequences on the mental state of the poor little child? They might already be suffering a lot in their personal life and a deregistration from a course might lead to them having a breakdown. If you still want to cause trouble and panic in the life of a suffering student, go ahead."),r.a.createElement("div",null,r.a.createElement(ae,{onClick:e.closeHandler},"Cancel"),r.a.createElement(ae,{onClick:e.continueHandler},"Continue")))},me=a(7),ue=a.n(me),de=a(53),pe=function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){var e;Object(i.a)(this,a);for(var n=arguments.length,r=new Array(n),l=0;l<n;l++)r[l]=arguments[l];return(e=t.call.apply(t,[this].concat(r))).state={participants:{CS19101:[{name:"Aditya Agrawal",roll:"19CH10004"},{name:"Shikha Kumari",roll:"19CE10062"},{name:"Mayank Agarwal",roll:"19CE30010"},{name:"Muskan Jain",roll:"19CH10024"},{name:"Samar Pratap Singh",roll:"19CH10044"},{name:"Utkarsh Singh",roll:"19CH10064"}],CS29003:[{name:"Raghav Sharma",roll:"19AG30024"},{name:"Ashish Gupta",roll:"19IE10010"},{name:"Khushboo Bhoy",roll:"19EE30011"},{name:"Ritika Lath",roll:"19EC10054"},{name:"Tushar Mahawar",roll:"19EE10061"},{name:"Mayank Agrawal",roll:"19EE30014"}],CY19001:[{name:"Shyamal Raj",roll:"19CE10064"},{name:"Mohammad Ayan Akhtar",roll:"19CE30012"},{name:"Aditya Chawla",roll:"19CH10006"},{name:"Nidhi Raj",roll:"19CH10026"},{name:"Sanskar Patni",roll:"19CH10046"},{name:"Abhishek Kumar",roll:"19CH30001"}],PH19001:[{name:"Aakriti Gupta",roll:"19BT10001"},{name:"Ritwik Jain",roll:"19BT10021"},{name:"Korra Akhil",roll:"19BT30012"},{name:"Akshat Sharma",roll:"19CE10002"},{name:"Bipin Kumar Gupta",roll:"19CE10022"},{name:"Murali Manohar",roll:"19CE10042"}],EE19001:[{name:"Sarthak Goyal",roll:"19EC30039"},{name:"Sudil Nain",roll:"19EC30046"},{name:"Keshav Sharma",roll:"19EE10034"},{name:"Kushagra Chitkara",roll:"19EE10036"},{name:"Nikhil Balwani",roll:"19EC30027"},{name:"Utkarsh Singh Chauhan",roll:"19GG20040"}]},subcode:e.props.match.params.subcode,todelete:null,showtodelete:!1},e.DeleteParticipant=function(t){var a=Object(z.a)({},e.state.participants),n=a[e.state.subcode].findIndex((function(e){return e.roll===t}));a[e.state.subcode].splice(n,1),e.setState({participants:a,showtodelete:!1})},e.AddAllHandler=function(){alert("All Participants successfully added")},e.ShowDeletePopup=function(t){var a=t;e.setState({todelete:a,showtodelete:!0})},e}return Object(c.a)(a,[{key:"render",value:function(){var e=this,t=null;return this.state.participants[this.state.subcode]&&(t=this.state.participants[this.state.subcode].map((function(t,a){return r.a.createElement(Z,{index:a+1,name:t.name,roll:t.roll,key:a+1,DeleteHandler:function(){return e.ShowDeletePopup(t)}})}))),t?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{className:ue.a.Participants},r.a.createElement("div",{className:ue.a.container},r.a.createElement(Z,{index:"S.No",name:"Name",roll:"Roll No."}),t),r.a.createElement(ne,{clicked:this.AddAllHandler}),r.a.createElement(ae,{secondary:!0,onClick:function(){e.props.history.goBack()}},r.a.createElement("strong",null,"\u2190 "),"Back to Subjects")),r.a.createElement(de.a,{in:this.state.showtodelete,timeout:1e3,classNames:{enter:ue.a.DeletePopupEnter,enterActive:ue.a.DeletePopupEnterActive,exit:ue.a.DeletePopupExit,exitActive:ue.a.DeletePopupExitActive},unmountOnExit:!0,mountOnEnter:!0,onExited:function(){e.setState({todelete:null})}},r.a.createElement("div",{className:ue.a.DeletePopupContainer},r.a.createElement(se,{participant:this.state.todelete,closeHandler:function(){e.setState({showtodelete:!1})},continueHandler:function(){return e.DeleteParticipant(e.state.todelete.roll)}})))):r.a.createElement($,null)}}]),a}(r.a.Component),Ee=a(17),_e=a.n(Ee),he=function(e){return r.a.createElement("div",{className:_e.a.container},r.a.createElement("div",{className:_e.a.Logo},r.a.createElement(C,null)),r.a.createElement("div",{className:_e.a.heading},"Welcome to"," ",r.a.createElement("span",{className:_e.a.title},r.a.createElement(P,null))," ","for TAs"),r.a.createElement("p",null,"Because someone must be there to Assist them, who assist everyone else."),r.a.createElement(ae,{secondary:!0,onClick:function(){return e.history.push("/subjects")}},"Browse All Subjects ",r.a.createElement("strong",null,"\u2192")))},ge=function(){return r.a.createElement(I.c,null,r.a.createElement(I.a,{path:"/",exact:!0,component:he}),r.a.createElement(I.a,{path:"/subjects",exact:!0,component:q}),r.a.createElement(I.a,{path:"/subjects/:subcode",component:pe}),r.a.createElement(I.a,{component:$}))},fe=(a(50),function(e){Object(s.a)(a,e);var t=Object(m.a)(a);function a(){return Object(i.a)(this,a),t.apply(this,arguments)}return Object(c.a)(a,[{key:"render",value:function(){return r.a.createElement(M,null,r.a.createElement(ge,null))}}]),a}(r.a.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(p.a,null,r.a.createElement(fe,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[39,1,2]]]);
//# sourceMappingURL=main.477a02fb.chunk.js.map