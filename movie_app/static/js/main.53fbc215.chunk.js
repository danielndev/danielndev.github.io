(this.webpackJsonpwebsite=this.webpackJsonpwebsite||[]).push([[0],{21:function(e,t,a){e.exports=a.p+"static/media/Iron_man.01471e75.png"},22:function(e,t,a){e.exports=a(39)},27:function(e,t,a){},29:function(e,t,a){},30:function(e,t,a){},39:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(17),o=a.n(c),i=(a(27),a(11)),l=a.n(i),s=a(18),m=a(9),p=a(7),u=a(5),v=(a(29),a(30),function(e){var t=e.image,a=e.title,n=(e.description,e.release),c=e.setMovie;return r.a.createElement(p.b,{to:"/movie_app/info",onClick:c,style:{textDecoration:"none"}},r.a.createElement("div",{className:"MovieCard"},r.a.createElement("img",{className:"Movie-poster",src:"https://image.tmdb.org/t/p/w500/"+t,alt:"",width:"200"}),r.a.createElement("h1",{className:"Movie-title"},a),r.a.createElement("p",{className:"Movie-release"},n)))}),d=a(21),h=a.n(d);a(36).config();var b="e494f90bea425aac6fcbeb1b4b3cecd3",f=function(){var e=[{heading:"Most Popular",API_URL:"https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key="+b},{heading:"Highest Voted",API_URL:"https://api.themoviedb.org/3/discover/movie?sort_by=vote_count.desc&api_key="+b}],t=Object(n.useState)([]),a=Object(m.a)(t,2),c=a[0],o=a[1],i=Object(n.useState)(""),d=Object(m.a)(i,2),f=(d[0],d[1],Object(n.useState)("")),g=Object(m.a)(f,2),E=g[0],w=g[1],_="",y=Object(n.useState)({title:"",overview:"",release_date:"",backdrop_path:""}),k=Object(m.a)(y,2),N=k[0],x=k[1];Object(n.useEffect)((function(){console.log("Search: "+E),""===E||O("https://api.themoviedb.org/3/search/movie?&api_key="+b+"&query="+E)}),[E]);var j=function(e){_=e.target.value},S=function(){w(_)};function O(e){return M.apply(this,arguments)}function M(){return(M=Object(s.a)(l.a.mark((function e(t){var a,n,r,c;return l.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch(t);case 2:return a=e.sent,e.next=5,a.json();case 5:for(n=e.sent,r=n.results,c=r.length-1;c>=0;c--)"string"!=typeof r[c].poster_path&&(console.log(r[c].poster_path),r.pop(c));o(r),console.log(r);case 10:case"end":return e.stop()}}),e)})))).apply(this,arguments)}var C=function(){return r.a.createElement("div",{className:"landing-page"},r.a.createElement("div",{className:"background-circle circle1"}),r.a.createElement("div",{className:"background-circle circle2"}),r.a.createElement("div",{className:"background-circle circle3"}),r.a.createElement("img",{className:"iron-man",src:h.a}),r.a.createElement("div",{className:"title"},r.a.createElement("h1",null,"Browse your favourite movies"),r.a.createElement("h2",null,"Discover your next watch")))},I=function(e){x(e),console.log(e.title)};return r.a.createElement(p.a,null,r.a.createElement(u.c,null,r.a.createElement(u.a,{exact:!0,path:"/movie_app"},r.a.createElement((function(){return r.a.createElement("div",{className:"App"},r.a.createElement(C,null),r.a.createElement("div",{id:"Navbar"},r.a.createElement("div",{className:"search-container"},r.a.createElement("input",{className:"search-bar",onChange:j,onSubmit:S,id:"search-bar",placeholder:"Search"}),r.a.createElement("a",{href:"#Navbar"},r.a.createElement("button",{className:"submit-search",onClick:S},"\u25b7"))),r.a.createElement("div",{className:"buttons"},r.a.createElement("a",{href:"#Navbar"},r.a.createElement("h1",{onClick:function(){O(e[0].API_URL)}},e[0].heading)),r.a.createElement("a",{href:"#Navbar"},r.a.createElement("h1",{onClick:function(){O(e[1].API_URL)}},e[1].heading)))),r.a.createElement("div",{id:"Movies-container"},c.map((function(e){return r.a.createElement(v,{key:e.id,image:e.poster_path,title:e.title,description:e.overview,release:e.release_date,setMovie:function(){return I(e)}})}))))}),null)),r.a.createElement(u.a,{path:"/movie_app/info"},r.a.createElement((function(e){var t=e.title,a=e.backdrop,n=e.overview,c=e.release_date;return console.log(a),r.a.createElement("div",null,r.a.createElement("img",{className:"Movie-poster",src:"https://image.tmdb.org/t/p/w1280/"+a,alt:"",style:{width:"100%",position:"fixed",zIndex:"0"}}),r.a.createElement("div",{style:{width:"100%",height:"50%",backgroundColor:"rgba(0,0,20,0.9)",position:"absolute",top:"50%",color:"white"}},r.a.createElement(p.b,{to:"/movie_app",style:{color:"white",textDecoration:"none"}},r.a.createElement("h3",{style:{margin:"20px",fontSize:"1rem"}},"Back")),r.a.createElement("h1",{style:{margin:"20px",fontSize:"2rem"}},t),r.a.createElement("p",{style:{margin:"20px",fontSize:"1rem"}},n),r.a.createElement("p",{style:{margin:"40px",fontSize:"1rem"}},"Release Date: ",c)))}),{title:N.title,backdrop:N.backdrop_path,overview:N.overview,release_date:N.release_date}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(f,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[22,1,2]]]);
//# sourceMappingURL=main.53fbc215.chunk.js.map