(window.webpackJsonp=window.webpackJsonp||[]).push([[4],{43:function(e,t,n){"use strict";var r=n(60),a=n.n(r),c=n(44),s=n.n(c),o=n(0),i=n.n(o),u=n(10);function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){s()(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}t.a=function(e){var t=p({},e),n=t.user,r=t.type,c=t.size,s=t.font,l=n.name,m=n.profilepicture,d=Object(o.useContext)(u.b),f=d.values,b=d.setValue,v=Object(o.useContext)(u.a),O=v.dropDownValues,y=v.setDropDownValue;return i.a.createElement(i.a.Fragment,null,i.a.createElement("div",{className:"user user-".concat(c),onClick:function(){"login"===r?b(p(p({},f),{},{currentUser:n,addUser:[].concat(a()(f.addUser),[n])})):"dropdown"===r?y(p(p({},O),{},{show:!O.show})):b(p(p({},f),{},{currentUser:n}))}},i.a.createElement("div",{className:"user-".concat(c,"-image")},i.a.createElement("img",{src:m,className:"user-".concat(c,"-image-value"),alt:l})),i.a.createElement("span",{className:"user-".concat(c,"-title"),style:s?{fontSize:".75rem"}:null},l)))}},47:function(e,t,n){"use strict";n.r(t);var r=n(49),a=n.n(r),c=n(50),s=n.n(c),o=n(9),i=n.n(o),u=n(0),l=n.n(u),p=n(51),m=n.n(p),d=n(43),f=n(14);t.default=function(){var e=Object(u.useState)([]),t=i()(e,2),n=t[0],r=t[1],c=Object(u.useContext)(f.a).values;return Object(u.useEffect)((function(){var e=!1;return!e&&function(){var e=s()(a.a.mark((function e(){var t,n;return a.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.a.get("https://panorbit.in/api/users.json");case 2:t=e.sent,n=t.data.users.filter((function(e){return!c.addUser.some((function(t){return e.id===t.id}))})),r(n);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}()(),function(){e=!0}}),[]),l.a.createElement("div",{className:"d-flex justify-content-center mx-5 my-5"},0===n.length?l.a.createElement("div",{className:""},"Loading..."):l.a.createElement("div",{className:"card"},l.a.createElement("div",{className:"card-body px-0 py-0"},l.a.createElement("div",{className:"card-title"},l.a.createElement("span",null,"Select an account")),l.a.createElement("div",{className:"card-list px-3 pt-2"},n.map((function(e){return l.a.createElement(u.Fragment,{key:e.id},l.a.createElement(d.a,{user:e,key:e.id,type:"login",size:"small"}),l.a.createElement("span",{className:"divider"}))}))))))}}}]);