(this.webpackJsonptodo=this.webpackJsonptodo||[]).push([[0],{21:function(e,t,n){e.exports=n(34)},26:function(e,t,n){},31:function(e,t,n){},32:function(e,t,n){},33:function(e,t,n){},34:function(e,t,n){"use strict";n.r(t);var o=n(0),r=n.n(o),i=n(6),c=n.n(i),a=(n(26),n(12)),l=n(13),u=n(19),d=n(14),s=n(20),f=n(1),m=function(e,t){return{type:"EDIT_TODO",id:e,text:t}},p=function(e,t){return{type:"UPDATE",id:e,text:t}},v=function(e){return{type:"TOGGLE_COMPLETED",id:e}},h=n(3),g="SHOW_ALL",E="SHOW_COMPLETED",b="SHOW_ACTIVE",O=function(e,t){switch(t){case g:return{todos:e,filteredTodos:Object(h.a)(e)};case E:return{todos:e,filteredTodos:Object(h.a)(e.filter((function(e){return e.completed})))};case b:return{todos:e,filteredTodos:Object(h.a)(e.filter((function(e){return!e.completed})))};default:throw new Error("Unknown filter: "+t)}},T=(n(31),Object(f.b)((function(e){return{todos:O(e.todos,e.filter)}}))((function(e){var t,n=e.dispatch,o=e.todos,i=0,c=void 0===o.todos.length?0:o.todos.length;return r.a.createElement("div",{onClick:function(e){e.preventDefault(),o.todos.map((function(e){return e.editing?n(m(e.id)):null}))}},r.a.createElement("h1",null,"todos"),r.a.createElement("div",{className:"add-todo"},r.a.createElement("button",{className:"toggle-all",onClick:function(e){e.preventDefault(),o.todos.map((function(e){return e.completed?i++:""})),i<o.todos.length&&o.todos.map((function(e){return e.completed?"":n(v(e.id))})),i===o.todos.length&&o.todos.map((function(e){return e.completed?n(v(e.id)):""}))}},"\u203a"),r.a.createElement("form",{className:"form",onSubmit:function(e){return function(e){e.preventDefault(),t.value.trim()&&(n(function(e,t){return{type:"ADD_TODO",id:e,text:t}}(c,t.value)),t.value="",c=0)}(e)}},r.a.createElement("input",{className:"input-no-style input-override form",required:!0,type:"text",placeholder:"What needs to be done",ref:function(e){return t=e}}))))}))),y=function(e){var t=e.onClick,n=e.completed,o=e.text;return r.a.createElement("li",{className:"input-no-style li-style",onClick:t,style:{textDecoration:n?"line-through":"none"}},o)},k=(n(32),function(e){var t=e.onClick,n=e.checked;return r.a.createElement("label",{className:"container"},r.a.createElement("input",{type:"checkbox",onClick:t,checked:n}),r.a.createElement("span",{className:"checkmark"}))}),w=(n(33),Object(f.b)()((function(e){var t=e.dispatch,n=e.id,o=e.placeholder;return r.a.createElement(r.a.Fragment,null,r.a.createElement("form",{className:"form",onSubmit:function(e){e.preventDefault(),o.value.trim()&&(t(p(n,o.value)),o.value="")}},r.a.createElement("input",{className:"input-no-style edit-input-override",required:!0,type:"text",defaultValue:o,ref:function(e){return o=e}})))}))),j=Object(f.b)((function(e,t){return{active:t.filter===e.filter}}),(function(e,t){return{onClick:function(){return e((n=t.id,o=t.filter,{type:"FILTER_TYPE",id:n,filter:o}));var n,o}}}))((function(e){var t=e.active,n=e.children,o=e.onClick;return r.a.createElement("button",{className:"filters-btn",onClick:o,disabled:t},n)})),C=function(){return r.a.createElement("div",{className:"filters"},r.a.createElement(j,{filter:g},"All"),r.a.createElement(j,{filter:b},"Active"),r.a.createElement(j,{filter:E},"Completed"))},D=Object(f.b)((function(e){return{todos:O(e.todos,e.filter)}}),(function(e){return{toggleTodo:function(t){return e(function(e){return{type:"TOGGLE_TODO",id:e}}(t))},deleteTodo:function(t){return e(function(e){return{type:"DELETE_TODO",id:e}}(t))},editTodo:function(t){return e(m(t))},update:function(t,n){return e(p(t,n))}}}))((function(e){var t=e.todos,n=e.toggleTodo,o=e.deleteTodo,i=e.editTodo,c=0;t.filteredTodos.map((function(e){return e.completed?null:c++}));var a=function(e){t.filteredTodos.map((function(e){return e.editing?i(e.id):null}))};return r.a.createElement("div",{className:"todolist-container"},t.todos.length?r.a.createElement(r.a.Fragment,null,r.a.createElement("ul",{onClick:a},t.filteredTodos.map((function(e){return r.a.createElement("span",{className:"todolist-items add-todo spanbutton",onClick:a},r.a.createElement(k,{id:e.id,checked:e.completed,onClick:function(){return o=e.id,void t.filteredTodos.map((function(e){return o===e.id&&n(e.id),e.editing&&i(e.id),null}));var o}}),!0!==e.editing?r.a.createElement("span",{className:"todo-edit-range"},r.a.createElement(y,Object.assign({key:e.id},e,{onClick:function(){return i(e.id)}})),r.a.createElement("button",{className:"btn",onClick:function(){return o(e.id)}},"\u2715")):r.a.createElement(w,{key:e.id,id:e.id,placeholder:e.text}))}))),r.a.createElement("div",{className:"add-todo footer-font footer-fix",onClick:a},r.a.createElement("div",{className:"completed-count"}," ",c," ",c>1?" items left":" item left"),r.a.createElement(C,null),0===c?r.a.createElement("div",{className:"clear-completed",onClick:function(){return t.filteredTodos.map((function(e){return o(e.id)}))}},"Clear Completed"):null)):null)})),N=function(e){function t(){var e,n;Object(a.a)(this,t);for(var o=arguments.length,r=new Array(o),i=0;i<o;i++)r[i]=arguments[i];return(n=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(r)))).handleClick=function(e){var t=n.props,o=t.todos,r=t.editTodo;o.filteredTodos.map((function(e){return e.editing?r(e.id):null}))},n}return Object(s.a)(t,e),Object(l.a)(t,[{key:"render",value:function(){return r.a.createElement("div",{className:"outer-container",onClick:this.handleClick},r.a.createElement("div",{className:"inner-container",onClick:this.handleClick},r.a.createElement(T,null),r.a.createElement(D,null)))}}]),t}(o.Component),P=Object(f.b)((function(e){return{todos:O(e.todos,e.filter)}}),(function(e){return{editTodo:function(t){return e(m(t))}}}))(N),S=n(4),x=n(16),L=n(17);function _(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function A(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?_(n,!0).forEach((function(t){Object(L.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):_(n).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}var W=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":var n=0===e.length?0:t.id;return[].concat(Object(h.a)(e),[{id:n,text:t.text,completed:!1,editing:!1}]);case"EDIT_TODO":return e.map((function(e){return e.id===t.id?A({},e,{editing:!e.editing}):A({},e,{editing:!1})}));case"UPDATE":var o=Object(h.a)(e);return o[t.id].text=t.text,o[t.id].editing=!o[t.id].editing,o;case"TOGGLE_TODO":return e.map((function(e){return e.id===t.id?A({},e,{completed:!e.completed}):e}));case"DELETE_TODO":var r=Object(h.a)(e);r=r.filter((function(e){return e.id!==t.id}));for(var i=0;i<r.length;i++)r[i].id!==i&&(r[i].id=i);return r;case"TOGGLE_COMPLETED":var c=Object(h.a)(e);return c[t.id].completed=!c[t.id].completed,c;default:return e}},G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:g,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"FILTER_TYPE":return t.filter;default:return e}},I=Object(S.combineReducers)({todos:W,filter:G}),R=function(e){try{var t=JSON.stringify(e);localStorage.setItem("state",t)}catch(n){console.log("Data not saved")}},U=n(18),F=n.n(U),J=Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));function H(e,t){navigator.serviceWorker.register(e).then((function(e){e.onupdatefound=function(){var n=e.installing;null!=n&&(n.onstatechange=function(){"installed"===n.state&&(navigator.serviceWorker.controller?(console.log("New content is available and will be used when all tabs for this page are closed. See https://bit.ly/CRA-PWA."),t&&t.onUpdate&&t.onUpdate(e)):(console.log("Content is cached for offline use."),t&&t.onSuccess&&t.onSuccess(e)))})}})).catch((function(e){console.error("Error during service worker registration:",e)}))}!function(e){if("serviceWorker"in navigator){if(new URL("",window.location.href).origin!==window.location.origin)return;window.addEventListener("load",(function(){var t="".concat("","/service-worker.js");J?(!function(e,t){fetch(e).then((function(n){var o=n.headers.get("content-type");404===n.status||null!=o&&-1===o.indexOf("javascript")?navigator.serviceWorker.ready.then((function(e){e.unregister().then((function(){window.location.reload()}))})):H(e,t)})).catch((function(){console.log("No internet connection found. App is running in offline mode.")}))}(t,e),navigator.serviceWorker.ready.then((function(){console.log("This web app is being served cache-first by a service worker. To learn more, visit https://bit.ly/CRA-PWA")}))):H(t,e)}))}}();var M=function(){try{var e=localStorage.getItem("state");if(null===e)return;return JSON.parse(e)}catch(t){return}}(),q=Object(S.createStore)(I,M,Object(x.composeWithDevTools)());q.subscribe((function(){R({todos:q.getState().todos})})),q.subscribe(F()((function(){R({todos:q.getState().todos})}),1e3)),c.a.render(r.a.createElement(f.a,{store:q},r.a.createElement(P,null)),document.getElementById("root"))}},[[21,1,2]]]);
//# sourceMappingURL=main.3800bda7.chunk.js.map