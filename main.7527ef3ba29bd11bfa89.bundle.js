webpackJsonp([1],{127:function(n,l){function t(n){throw new Error("Cannot find module '"+n+"'.")}t.keys=function(){return[]},t.resolve=t,n.exports=t,t.id=127},13:function(n,l,t){"use strict";var e=t(10),u=t(1);t.d(l,"a",(function(){return i}));var i=(function(){function n(){this._state={}}return Object.defineProperty(n.prototype,"state",{get:function(){return this._state=this._clone(this._state)},set:function(n){throw new Error("do not mutate the `.state` directly")},enumerable:!0,configurable:!0}),n.prototype.get=function(n){var l=this._state;return l.hasOwnProperty(n)?l[n]:l},n.prototype.set=function(n,l){return this._state[n]=l},n.prototype._clone=function(n){return JSON.parse(JSON.stringify(n))},n})();i=e.b([t.i(u.c)()],i)},15:function(n,l,t){"use strict";var e=t(54),u=(t.n(e),t(400)),i=(t.n(u),t(85));t.n(i);t.d(l,"a",(function(){return a}));var a=(function(){function n(){this._eventBus=new e.Subject}return n.prototype.broadcast=function(n,l){this._eventBus.next({key:n,data:l})},n.prototype.on=function(n){return this._eventBus.asObservable().filter((function(l){return l.key===n})).map((function(n){return n.data}))},n})()},183:function(n,l,t){"use strict";var e=t(1),u=t(215),i=t(91),a=t(129),r=t(205),o=t(203),s=t(29),c=t(22),p=t(126),_=t(128),f=t(90),m=t(35),d=t(49),g=t(89),h=t(97),v=t(68),b=t(69),y=t(67),S=t(96),w=t(24),x=t(55),k=t(15),O=t(19),j=t(13),q=t(66),N=t(131),F=t(56),D=t(65);t.d(l,"a",(function(){return E}));var E=e._0(u.a,[i.a],(function(n){return e._1([e._2(512,e.Q,e._3,[[8,[a.a,r.a,o.a]],[3,e.Q],e.P]),e._2(5120,e.G,e._4,[[3,e.G]]),e._2(4608,s.f,s.g,[e.G]),e._2(5120,e.y,e._5,[]),e._2(5120,e.K,e._6,[]),e._2(5120,e.L,e._7,[]),e._2(4608,c.c,c.d,[s.b]),e._2(6144,e.u,null,[c.c]),e._2(4608,c.e,c.f,[]),e._2(5120,c.g,(function(n,l,t,e){return[new c.h(n),new c.i(l),new c.j(t,e)]}),[s.b,s.b,s.b,c.e]),e._2(4608,c.k,c.k,[c.g,e.k]),e._2(135680,c.l,c.l,[s.b]),e._2(4608,c.m,c.m,[c.k,c.l]),e._2(5120,p.a,_.a,[]),e._2(5120,p.b,_.b,[]),e._2(4608,p.c,_.c,[p.a,p.b]),e._2(5120,e.A,_.d,[c.m,p.c,e.k]),e._2(6144,c.n,null,[c.l]),e._2(4608,e.B,e.B,[e.k]),e._2(4608,c.o,c.o,[s.b]),e._2(4608,c.p,c.p,[s.b]),e._2(4608,f.a,f.a,[]),e._2(4608,m.a,m.a,[]),e._2(4608,m.b,m.c,[]),e._2(5120,m.d,m.e,[]),e._2(4608,m.f,m.f,[m.a,m.b,m.d]),e._2(4608,m.g,m.h,[]),e._2(5120,m.i,m.j,[m.f,m.g]),e._2(4608,m.k,m.k,[]),e._2(4608,m.l,m.m,[m.k,m.b]),e._2(5120,m.n,m.o,[m.l,m.g]),e._2(4608,d.a,d.a,[m.i]),e._2(4608,g.a,_.e,[e.A,c.q]),e._2(4608,h.a,h.a,[]),e._2(5120,v.a,u.b,[m.i]),e._2(4608,b.a,b.b,[]),e._2(4608,y.a,y.b,[]),e._2(4608,S.a,S.a,[]),e._2(4608,w.a,w.a,[S.a,v.a,b.a,y.a,w.b]),e._2(5120,x.a,x.b,[x.c]),e._2(4608,x.d,x.d,[]),e._2(6144,x.e,null,[x.d]),e._2(135680,x.f,x.f,[x.c,e._8,e._9,e.h,x.e]),e._2(4608,x.g,x.g,[]),e._2(5120,x.h,x.i,[x.j]),e._2(5120,e._10,(function(n){return[n]}),[x.h]),e._2(4608,k.a,k.a,[]),e._2(4608,O.a,O.a,[j.a,w.a,m.i,k.a]),e._2(4608,q.a,q.a,[]),e._2(512,s.e,s.e,[]),e._2(1024,e.x,c.r,[]),e._2(1024,e.n,(function(){return[x.k()]}),[]),e._2(512,x.j,x.j,[e.h]),e._2(1024,e.g,(function(n,l,t){return[c.s(n,l),x.l(t)]}),[[2,c.t],[2,e.n],x.j]),e._2(512,e.f,e.f,[[2,e.g]]),e._2(131584,e._11,e._11,[e.k,e._12,e.h,e.x,e.Q,e.f]),e._2(2048,e.j,null,[e._11]),e._2(512,e.C,e.C,[e.j]),e._2(512,c.u,c.u,[[3,c.u]]),e._2(512,f.b,f.b,[]),e._2(512,f.c,f.c,[]),e._2(512,m.p,m.p,[]),e._2(512,m.q,m.q,[]),e._2(512,N.a,N.a,[]),e._2(512,F.a,F.a,[]),e._2(1024,x.m,x.n,[[3,x.c]]),e._2(512,x.o,x.p,[]),e._2(512,x.q,x.q,[]),e._2(256,x.r,{useHash:!0},[]),e._2(1024,s.h,x.s,[s.c,[2,s.i],x.r]),e._2(512,s.j,s.j,[s.h]),e._2(512,e._9,e._9,[]),e._2(512,e._8,e._13,[e._9,[2,e._14]]),e._2(1024,x.t,(function(){return[[{path:"",component:D.a}]]}),[]),e._2(1024,x.c,x.u,[e.j,x.o,x.q,s.j,e.h,e._8,e._9,x.t,x.r,[2,x.v],[2,x.w]]),e._2(512,x.x,x.x,[[2,x.m],[2,x.c]]),e._2(512,_.f,_.f,[]),e._2(512,j.a,j.a,[]),e._2(512,u.a,u.a,[e.j,j.a]),e._2(256,w.b,void 0,[])])}))},19:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(56),a=t(35),r=t(13),o=t(34),s=t(15);t.d(l,"a",(function(){return c}));var c=(function(){function n(n,l,t,e){this.appState=n,this.translate=l,this.http=t,this.broadcaster=e,this.witnesses=[{name:"Régine",picture:null},{name:"Howard",picture:null},{name:"Gérard",picture:null},{name:"Pauline",picture:null}];var u=this;this.broadcaster.on("restart").subscribe((function(n){return u.startGame(null)})),this.broadcaster.on("testimony").subscribe((function(n){return u.testimony(n)})),this.broadcaster.on("elementSelect").subscribe((function(n){return u.elementSelect(n)}))}return n.prototype.initGame=function(n){this.translate.setDefaultLang(n||this.translate.getDefaultLang());var l=this,t=o.b.root+"/assets/spgo_navigation_"+this.translate.getDefaultLang()+".json";this.http.get(t).map((function(n){return n.json()})).subscribe((function(n){return l.startGame(n)}))},n.prototype.startGame=function(n){n&&(this.json=JSON.stringify(n)),this.processGameJSON(JSON.parse(this.json)),this.gameState={elements:[],oxygen:o.b.oxygen.start,victory:!1},this.broadcaster.broadcast("overlay",null),this.broadcaster.broadcast("init",null)},n.prototype.testimony=function(n){this.gameState.oxygen-=o.b.oxygen.witnessDecay,this.gameState.oxygen=Math.max(0,this.gameState.oxygen)},n.prototype.elementSelect=function(n){this.gameState.oxygen-=o.b.oxygen.elementDecay,this.gameState.oxygen=Math.max(0,this.gameState.oxygen)},n.prototype.victoryCheck=function(){var n=0;this.gameState.elements.forEach((function(l){n+=+(l.selected&&l.good)})),o.b.maxElem===n&&(this.gameState.victory=!0,this.broadcaster.broadcast("victory",this.gameState.oxygen>0),this.victory())},n.prototype.processGameJSON=function(n){var l=this;this.gameData={},n.forEach((function(n){delete n.pid,delete n.position,delete n.tags,n.content=n.content.replace(/\[\[.+\]\]\s?/gim,""),n.childrenNames=n.childrenNames.map((function(n){var l={link:n.replace(/\[\[(.+)->(.+)\]\]/i,"$1"),goal:n.replace(/\[\[(.+)->(.+)\]\]/i,"$2"),translate:!1};return"se rendre sur la propriété"===l.goal&&(l.goal="start",l.translate=!0),l})),"la police vous embarque"===n.name&&(n.childrenNames=[{link:"start",goal:"start",translate:!0}]),"se rendre sur la propriété"===n.name&&(n.childrenNames=[]),"Untitled Passage"===n.name&&(n.name="Lose"),"Untitled Passage 1"===n.name&&(n.name="Win"),"ne pas lire la lettre"!==n.name&&"Lose"!==n.name&&"Win"!==n.name||(n.childrenNames=[{link:"restart",goal:"restart",translate:!0}]),l.gameData[n.name]=n})),this.witnesses.forEach((function(n){l.gameData[n.name].childrenNames.map((function(n){return n.goal})).forEach((function(t){l.gameData[t].childrenNames=[{link:n.name+".backto",goal:n.name,translate:!0}]}))})),console.log("Loaded Navigation JSON"),console.log(this.gameData)},n.prototype.victory=function(){var n=this;(function(n){return new Promise(function(l){setTimeout(l,n)})})(1e3).then((function(){n.broadcaster.broadcast("overlay",n.gameState.oxygen>0?"Win":"Lose")}))},n})();c=e.b([t.i(u.c)(),e.c("design:paramtypes",[r.a,i.b,a.i,s.a])],c)},203:function(n,l,t){"use strict";function e(n){return a._28(0,[(n()(),a._29(0,null,null,4,"div",[],null,null,null,null,null)),(n()(),a._30(null,["\n  "])),(n()(),a._29(16777216,null,null,1,"router-outlet",[],null,null,null,null,null)),a._31(212992,null,0,r.y,[r.q,a.R,a.Q,[8,null],a.Z],null,null),(n()(),a._30(null,["\n"]))],(function(n,l){n(l,3,0)}),null)}function u(n){return a._28(0,[(n()(),a._29(0,null,null,1,"app",[],null,null,null,e,_)),a._31(114688,null,0,o.a,[s.a,c.a],null,null)],(function(n,l){n(l,1,0)}),null)}var i=t(204),a=t(1),r=t(55),o=t(91),s=t(13),c=t(24);t.d(l,"a",(function(){return f}));var p=[i.a],_=a._27({encapsulation:2,styles:p,data:{}}),f=a._32("app",o.a,u,{},{},[])},204:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=[""]},205:function(n,l,t){"use strict";function e(n){return r._28(0,[(n()(),r._29(0,null,null,25,"div",[["id","teddy"]],null,null,null,null,null)),(n()(),r._30(null,["\n  "])),(n()(),r._29(0,null,null,1,"h1",[],null,null,null,null,null)),(n()(),r._30(null,["Salut Teddy"])),(n()(),r._30(null,["\n  "])),(n()(),r._29(0,null,null,4,"p",[],null,null,null,null,null)),(n()(),r._30(null,["Colle le json appelé "])),(n()(),r._29(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),r._30(null,["Plain JSON Output"])),(n()(),r._30(null,[" dans Twine ci-dessous et valide pour le tester dans le jeu."])),(n()(),r._30(null,["\n  "])),(n()(),r._29(0,null,null,5,"textarea",[],[[2,"ng-untouched",null],[2,"ng-touched",null],[2,"ng-pristine",null],[2,"ng-dirty",null],[2,"ng-valid",null],[2,"ng-invalid",null],[2,"ng-pending",null]],[[null,"ngModelChange"],[null,"input"],[null,"blur"],[null,"compositionstart"],[null,"compositionend"]],(function(n,l,t){var e=!0,u=n.component;if("input"===l){e=!1!==r._33(n,12)._handleInput(t.target.value)&&e}if("blur"===l){e=!1!==r._33(n,12).onTouched()&&e}if("compositionstart"===l){e=!1!==r._33(n,12)._compositionStart()&&e}if("compositionend"===l){e=!1!==r._33(n,12)._compositionEnd(t.target.value)&&e}if("ngModelChange"===l){e=!1!==(u.gameService.json=t)&&e}return e}),null,null)),r._31(16384,null,0,o.d,[r._16,r.M,[2,o.e]],null,null),r._34(1024,null,o.f,(function(n){return[n]}),[o.d]),r._31(671744,null,0,o.g,[[8,null],[8,null],[8,null],[2,o.f]],{model:[0,"model"]},{update:"ngModelChange"}),r._34(2048,null,o.h,null,[o.g]),r._31(16384,null,0,o.i,[o.h],null,null),(n()(),r._29(0,null,null,0,"br",[],null,null,null,null,null)),(n()(),r._30(null,["\n  "])),(n()(),r._29(0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.startFromTeddy()&&e}return e}),null,null)),(n()(),r._30(null,["Lancer le jeu"])),(n()(),r._30(null,["\n  "])),(n()(),r._29(0,null,null,2,"p",[],null,null,null,null,null)),(n()(),r._29(0,null,null,1,"em",[],null,null,null,null,null)),(n()(),r._30(null,["NB: Si tu changes de langue ou recharges la page les modifications seront perdues. Envoie le JSON quand il est prêt pour que je l'intègre"])),(n()(),r._30(null,["\n"]))],(function(n,l){n(l,14,0,l.component.gameService.json)}),(function(n,l){n(l,11,0,r._33(l,16).ngClassUntouched,r._33(l,16).ngClassTouched,r._33(l,16).ngClassPristine,r._33(l,16).ngClassDirty,r._33(l,16).ngClassValid,r._33(l,16).ngClassInvalid,r._33(l,16).ngClassPending)}))}function u(n){return r._28(0,[(n()(),r._29(0,null,null,16,"div",[["id","game"]],null,null,null,null,null)),(n()(),r._30(null,["\n  "])),(n()(),r._29(0,null,null,7,"div",[["id","left-block"]],null,null,null,null,null)),(n()(),r._30(null,["\n    "])),(n()(),r._29(0,null,null,4,"div",[["class","wall-wrapper"]],null,null,null,null,null)),(n()(),r._30(null,["\n      "])),(n()(),r._29(0,null,null,1,"wall",[],null,[[null,"pick"],[null,"unpick"]],(function(n,l,t){var e=!0,u=n.component;if("pick"===l){e=!1!==u.pick(t)&&e}if("unpick"===l){e=!1!==u.unpick(t)&&e}return e}),c.a,c.b)),r._31(49152,null,0,p.a,[_.a,f.a,m.a,d.c],null,{pick:"pick",unpick:"unpick"}),(n()(),r._30(null,["\n    "])),(n()(),r._30(null,["\n  "])),(n()(),r._30(null,["\n  "])),(n()(),r._29(0,null,null,4,"div",[["id","right-block"]],null,null,null,null,null)),(n()(),r._30(null,["\n    "])),(n()(),r._29(0,null,null,1,"witnesses",[],null,null,null,g.a,g.b)),r._31(49152,null,0,h.a,[_.a,f.a,m.a],null,null),(n()(),r._30(null,["\n  "])),(n()(),r._30(null,["\n"])),(n()(),r._30(null,["\n"])),(n()(),r._29(0,null,null,1,"overlay",[],null,null,null,v.a,v.b)),r._31(114688,null,0,b.a,[_.a,m.a,f.a],null,null),(n()(),r._30(null,["\n"])),(n()(),r._35(16777216,null,null,1,null,e)),r._31(16384,null,0,y.n,[r.R,r.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){var t=l.component;n(l,19,0),n(l,22,0,t.teddy)}),null)}function i(n){return r._28(0,[(n()(),r._29(0,null,null,1,"game",[],null,null,null,u,O)),r._31(114688,null,0,s.a,[_.a,f.a,S.a,m.a,w.a,x.a],null,null)],(function(n,l){n(l,1,0)}),null)}var a=t(206),r=t(1),o=t(90),s=t(65),c=t(211),p=t(94),_=t(13),f=t(19),m=t(15),d=t(22),g=t(213),h=t(95),v=t(209),b=t(93),y=t(29),S=t(24),w=t(55),x=t(66);t.d(l,"a",(function(){return j}));var k=[a.a],O=r._27({encapsulation:2,styles:k,data:{}}),j=r._32("game",s.a,i,{},{},[])},206:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=["#game{display:flex;background:url(/ide-SPGO/fc66f1f7efd7ae6130e943a2af54145d.png) no-repeat;background-position:bottom;background-size:100% 24vh}#game #left-block{flex:1.5;max-width:1200px;height:100vh}#game #left-block .wall-wrapper{height:76vh}#game #left-block .wall-wrapper wall{margin-top:calc((76vh - 31vw) / 2)}#game #left-block .wall-center{border:2px solid blue}#game #right-block{flex:1;height:100vh;overflow-y:auto}#teddy{z-index:999;position:fixed;left:0;top:0;bottom:0;right:0;background:#fee;padding:50px}#teddy textarea{width:80%;height:400px}"]},207:function(n,l,t){"use strict";function e(n){return o._28(0,[(n()(),o._29(0,null,null,3,"div",[["class","element"]],null,null,null,null,null)),(n()(),o._30(null,["\n      "])),(n()(),o._29(0,null,null,0,"img",[["height","50px"]],[[8,"src",4]],null,null,null,null)),(n()(),o._30(null,["\n    "]))],null,(function(n,l){n(l,2,0,l.context.$implicit.img)}))}function u(n){return o._28(0,[(n()(),o._29(0,null,null,1,"div",[],null,null,null,null,null)),(n()(),o._30(null,["",""]))],null,(function(n,l){n(l,1,0,l.component.gameService.gameState.oxygen)}))}function i(n){return o._28(0,[(n()(),o._29(0,null,null,13,"div",[["id","hud"]],null,null,null,null,null)),(n()(),o._30(null,["\n  "])),(n()(),o._29(0,null,null,4,"div",[["class","inventory"]],null,null,null,null,null)),(n()(),o._30(null,["\n    "])),(n()(),o._35(16777216,null,null,1,null,e)),o._31(802816,null,0,s.o,[o.R,o.S,o.K],{ngForOf:[0,"ngForOf"]},null),(n()(),o._30(null,["\n  "])),(n()(),o._30(null,["\n  "])),(n()(),o._29(0,null,null,4,"div",[["class","oxygen-tank"]],null,null,null,null,null)),(n()(),o._30(null,["\n    "])),(n()(),o._35(16777216,null,null,1,null,u)),o._31(16384,null,0,s.n,[o.R,o.S],{ngIf:[0,"ngIf"]},null),(n()(),o._30(null,["\n  "])),(n()(),o._30(null,["\n"]))],(function(n,l){var t=l.component;n(l,5,0,t.gameService.gameState.elements),n(l,11,0,t.displayOxygen)}),null)}function a(n){return o._28(0,[(n()(),o._29(0,null,null,1,"hud",[],null,null,null,i,d)),o._31(114688,null,0,c.a,[p.a,_.a,f.a],null,null)],(function(n,l){n(l,1,0)}),null)}var r=t(208),o=t(1),s=t(29),c=t(92),p=t(13),_=t(15),f=t(19);t.d(l,"b",(function(){return d})),l.a=i;var m=[r.a],d=o._27({encapsulation:2,styles:m,data:{}});o._32("hud",c.a,a,{},{},[])},208:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=["hud{display:block}#hud{display:flex;height:60px}#hud .oxygen-tank{flex:1}#hud .inventory{flex:1;display:flex}#hud .inventory .element{flex:1}"]},209:function(n,l,t){"use strict";function e(n){return c._28(0,[(n()(),c._29(0,null,null,18,"div",[],null,null,null,null,null)),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,2,"h1",[],null,null,null,null,null)),(n()(),c._30(null,["",""])),c._36(131072,p.a,[_.a,c.Z]),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,11,"div",[],null,null,null,null,null)),(n()(),c._30(null,["\n      "])),(n()(),c._29(0,null,null,1,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.startGame()&&e}return e}),null,null)),(n()(),c._30(null,["Start"])),(n()(),c._30(null,["\n      "])),(n()(),c._29(0,null,null,5,"div",[],null,null,null,null,null)),(n()(),c._29(0,null,null,1,"span",[],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.changeLang("fr")&&e}return e}),null,null)),(n()(),c._30(null,["fr"])),(n()(),c._30(null,[" | "])),(n()(),c._29(0,null,null,1,"span",[],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.changeLang("en")&&e}return e}),null,null)),(n()(),c._30(null,["en"])),(n()(),c._30(null,["\n    "])),(n()(),c._30(null,["\n  "]))],null,(function(n,l){n(l,3,0,c._37(l,3,0,c._33(l,4).transform("title")))}))}function u(n){return c._28(0,[(n()(),c._29(0,null,null,2,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.goSequence(n.context.$implicit.goal)&&e}return e}),null,null)),(n()(),c._30(null,["",""])),c._36(131072,p.a,[_.a,c.Z])],null,(function(n,l){n(l,1,0,l.context.$implicit.translate?c._37(l,1,0,c._33(l,2).transform(l.context.$implicit.link)):l.context.$implicit.link)}))}function i(n){return c._28(0,[(n()(),c._29(0,null,null,12,"div",[["class","page"]],null,null,null,null,null)),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,1,"markdown",[],null,null,null,f.b,f.c)),c._31(4308992,null,0,m.a,[d.a,c.M,g.i],{data:[0,"data"]},null),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,4,"div",[["class","button-wrapper"]],null,null,null,null,null)),(n()(),c._30(null,["\n      "])),(n()(),c._35(16777216,null,null,1,null,u)),c._31(802816,null,0,h.o,[c.R,c.S,c.K],{ngForOf:[0,"ngForOf"]},null),(n()(),c._30(null,["\n    "])),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,0,"div",[["class","bottom-line"]],null,null,null,null,null)),(n()(),c._30(null,["\n  "]))],(function(n,l){var t=l.component;n(l,3,0,t.gameService.gameData[t.currentSequence].content),n(l,8,0,t.gameService.gameData[t.currentSequence].childrenNames)}),null)}function a(n){return c._28(0,[(n()(),c._29(0,null,null,7,"div",[["id","overlay"]],null,null,null,null,null)),(n()(),c._30(null,["\n  "])),(n()(),c._35(16777216,null,null,1,null,e)),c._31(16384,null,0,h.n,[c.R,c.S],{ngIf:[0,"ngIf"]},null),(n()(),c._30(null,["\n  "])),(n()(),c._35(16777216,null,null,1,null,i)),c._31(16384,null,0,h.n,[c.R,c.S],{ngIf:[0,"ngIf"]},null),(n()(),c._30(null,["\n"]))],(function(n,l){var t=l.component;n(l,3,0,!t.currentSequence),n(l,6,0,t.currentSequence)}),null)}function r(n){return c._28(0,[(n()(),c._35(16777216,null,null,1,null,a)),c._31(16384,null,0,h.n,[c.R,c.S],{ngIf:[0,"ngIf"]},null)],(function(n,l){n(l,1,0,l.component.activate)}),null)}function o(n){return c._28(0,[(n()(),c._29(0,null,null,1,"overlay",[],null,null,null,r,x)),c._31(114688,null,0,v.a,[b.a,y.a,S.a],null,null)],(function(n,l){n(l,1,0)}),null)}var s=t(210),c=t(1),p=t(70),_=t(24),f=t(129),m=t(72),d=t(49),g=t(35),h=t(29),v=t(93),b=t(13),y=t(15),S=t(19);t.d(l,"b",(function(){return x})),l.a=r;var w=[s.a],x=c._27({encapsulation:2,styles:w,data:{}});c._32("overlay",v.a,o,{},{},[])},210:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=["#overlay{height:100vh;width:100vw;background:#FFFFFFEE;position:fixed;top:0;left:0;overflow-y:auto}#overlay .page{width:40%;max-width:650px;min-width:450px;margin:20px auto;margin-top:8vh;text-align:justify}"]},211:function(n,l,t){"use strict";function e(n){return r._28(0,[(n()(),r._29(0,null,null,5,"div",[["class","element"]],[[4,"left",null],[4,"top",null],[4,"width",null]],[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.pickElement(n.context.$implicit)&&e}return e}),null,null)),r._31(278528,null,0,o.p,[r.K,r.L,r.M,r.N],{klass:[0,"klass"],ngClass:[1,"ngClass"]},null),r._39({selected:0,correct:1,clickthrough:2}),(n()(),r._30(null,["\n      "])),(n()(),r._29(0,null,null,0,"img",[["width","100%"]],[[8,"src",4]],null,null,null,null)),(n()(),r._30(null,["\n    "]))],(function(n,l){var t=l.component;n(l,1,0,"element",n(l,2,0,l.context.$implicit.selected,l.context.$implicit.good&&t.gameService.gameState.victory,l.context.$implicit.clickThrough))}),(function(n,l){n(l,0,0,l.context.$implicit.left,l.context.$implicit.top,l.context.$implicit.width),n(l,4,0,l.context.$implicit.img)}))}function u(n){return r._28(0,[(n()(),r._29(0,null,null,4,"div",[["id","elements-wrapper"]],null,null,null,null,null)),(n()(),r._30(null,["\n  "])),(n()(),r._35(16777216,null,null,1,null,e)),r._31(802816,null,0,o.o,[r.R,r.S,r.K],{ngForOf:[0,"ngForOf"]},null),(n()(),r._30(null,["\n"]))],(function(n,l){n(l,3,0,l.component.elements)}),null)}function i(n){return r._28(0,[(n()(),r._29(0,null,null,1,"wall",[],null,null,null,u,d)),r._31(49152,null,0,s.a,[c.a,p.a,_.a,f.c],null,null)],null,null)}var a=t(212),r=t(1),o=t(29),s=t(94),c=t(13),p=t(19),_=t(15),f=t(22);t.d(l,"b",(function(){return d})),l.a=u;var m=[a.a],d=r._27({encapsulation:2,styles:m,data:{}});r._32("wall",s.a,i,{},{pick:"pick",unpick:"unpick"},[])},212:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=["wall{width:100%;padding-bottom:31vw;display:block;position:relative;max-width:53vw;margin:0 auto}wall #elements-wrapper{position:absolute;width:100%;top:0;bottom:0;left:0;right:0}wall .element{position:absolute;transition:filter .5s;cursor:pointer}wall .element:hover{filter:drop-shadow(0 0 8px #F6EB70);-webkit-filter:drop-shadow(0 0 8px #f6eb70)}wall .element.selected{filter:drop-shadow(0 0 8px red);-webkit-filter:drop-shadow(0 0 8px red)}wall .element.correct{filter:drop-shadow(0 0 8px lime);-webkit-filter:drop-shadow(0 0 8px lime)}wall .clickthrough{pointer-events:none}"]},213:function(n,l,t){"use strict";function e(n){return c._28(0,[(n()(),c._29(0,null,null,3,"div",[["class","witness"]],null,[[null,"click"],[null,"mouseover"],[null,"mouseleave"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.goSequence(n.context.$implicit.name,-1,!1)&&e}if("mouseover"===l){e=!1!==u.setHover(n.context.$implicit.name)&&e}if("mouseleave"===l){e=!1!==u.setHover(null)&&e}return e}),null,null)),(n()(),c._30(null,["\n        "])),(n()(),c._29(0,null,null,0,"img",[["src","wit.picture"],["width","100%"]],null,null,null,null,null)),(n()(),c._30(null,["\n      "]))],null,null)}function u(n){return c._28(0,[(n()(),c._29(0,null,null,2,"span",[],null,null,null,null,null)),(n()(),c._30(null,["",""])),c._36(131072,p.a,[_.a,c.Z])],null,(function(n,l){var t=l.component;n(l,1,0,c._37(l,1,0,c._33(l,2).transform(t.hoverName+".speakto")))}))}function i(n){return c._28(0,[(n()(),c._29(0,null,null,2,"button",[],null,[[null,"click"]],(function(n,l,t){var e=!0,u=n.component;if("click"===l){e=!1!==u.goSequence(n.context.$implicit.goal,n.context.index,!0)&&e}return e}),null,null)),(n()(),c._30(null,["",""])),c._36(131072,p.a,[_.a,c.Z])],null,(function(n,l){n(l,1,0,l.context.$implicit.translate?c._37(l,1,0,c._33(l,2).transform(l.context.$implicit.link)):l.context.$implicit.link)}))}function a(n){return c._28(0,[(n()(),c._29(0,null,null,10,"div",[["class","testimony"]],null,null,null,null,null)),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,1,"p",[],null,null,null,null,null)),(n()(),c._30(null,["",""])),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,4,"div",[["class","choice-wrapper"]],null,null,null,null,null)),(n()(),c._30(null,["\n      "])),(n()(),c._35(16777216,null,null,1,null,i)),c._31(802816,null,0,f.o,[c.R,c.S,c.K],{ngForOf:[0,"ngForOf"]},null),(n()(),c._30(null,["\n    "])),(n()(),c._30(null,["\n  "]))],(function(n,l){var t=l.component;n(l,8,0,t.gameService.gameData[t.currentSequence].childrenNames)}),(function(n,l){var t=l.component;n(l,3,0,t.gameService.gameData[t.currentSequence].content)}))}function r(n){return c._28(0,[(n()(),c._29(0,null,null,21,"div",[["class","witnesses-inner"]],null,null,null,null,null)),(n()(),c._30(null,["\n  "])),(n()(),c._29(0,null,null,12,"div",[["class","witness-selection"]],null,null,null,null,null)),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,4,"div",[["id","selection-wrapper"]],null,null,null,null,null)),(n()(),c._30(null,["\n      "])),(n()(),c._35(16777216,null,null,1,null,e)),c._31(802816,null,0,f.o,[c.R,c.S,c.K],{ngForOf:[0,"ngForOf"]},null),(n()(),c._30(null,["\n    "])),(n()(),c._30(null,["\n    "])),(n()(),c._29(0,null,null,3,"p",[],null,null,null,null,null)),(n()(),c._35(16777216,null,null,1,null,u)),c._31(16384,null,0,f.n,[c.R,c.S],{ngIf:[0,"ngIf"]},null),(n()(),c._30(null,[" "])),(n()(),c._30(null,["\n  "])),(n()(),c._30(null,["\n  "])),(n()(),c._35(16777216,null,null,1,null,a)),c._31(16384,null,0,f.n,[c.R,c.S],{ngIf:[0,"ngIf"]},null),(n()(),c._30(null,["\n  "])),(n()(),c._29(0,null,null,1,"hud",[],null,null,null,m.a,m.b)),c._31(114688,null,0,d.a,[g.a,h.a,v.a],null,null),(n()(),c._30(null,["\n"]))],(function(n,l){var t=l.component;n(l,7,0,t.gameService.witnesses),n(l,12,0,t.hoverName),n(l,17,0,t.currentSequence),n(l,20,0)}),null)}function o(n){return c._28(0,[(n()(),c._29(0,null,null,1,"witnesses",[],null,null,null,r,S)),c._31(49152,null,0,b.a,[g.a,v.a,h.a],null,null)],null,null)}var s=t(214),c=t(1),p=t(70),_=t(24),f=t(29),m=t(207),d=t(92),g=t(13),h=t(15),v=t(19),b=t(95);t.d(l,"b",(function(){return S})),l.a=r;var y=[s.a],S=c._27({encapsulation:2,styles:y,data:{}});c._32("witnesses",b.a,o,{},{},[])},214:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=["witnesses .witnesses-inner{padding:3.4vh}witnesses .witnesses-inner .testimony,witnesses .witnesses-inner .witness-selection,witnesses .witnesses-inner hud{background:#FFFFFFAA;padding:20px}witnesses #selection-wrapper{display:flex;justify-content:space-between}witnesses .witness-selection p{margin-bottom:0}witnesses .witness{cursor:pointer;flex:1;display:inline-block;background:#fff;max-width:100px}witnesses .testimony{min-height:30vh}witnesses .testimony p{margin:0}"]},215:function(n,l,t){"use strict";function e(n){return new w.a(n,c.b.baseUrlStripped+"/assets/i18n/",".json")}var u=t(10),i=t(22),a=t(90),r=t(35),o=t(1),s=t(128),c=t(34),p=t(91),_=t(13),f=t(371),m=(t.n(f),t(65)),d=t(94),g=t(95),h=t(93),v=t(92),b=t(216),y=t(223),S=t(56),w=t(221),x=t(15),k=t(19),O=t(66);l.b=e,t.d(l,"a",(function(){return q}));var j=[_.a],q=(function(){function n(n,l){this.appRef=n,this.appState=l}return n})();q=u.b([t.i(o.z)({bootstrap:[p.a],declarations:[p.a,m.a,g.a,d.a,h.a,v.a],imports:[i.u,a.c,r.p,r.q,y.a.forRoot(),S.a.forRoot({loader:{provide:S.c,useFactory:e,deps:[r.i]}}),b.a,s.f],providers:[c.c,j,b.b,x.a,k.a,O.a]}),u.c("design:paramtypes",[o.j,_.a])],q)},216:function(n,l,t){"use strict";var e=t(55),u=t(65);t.d(l,"b",(function(){return a})),t.d(l,"a",(function(){return r}));var i=[{path:"",component:u.a}],a=[],r=e.x.forRoot(i,{useHash:!0})},217:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e=(function(){function n(n,l,t,e,u,i,a){this.clickThrough=!1,this.good=!1,this.id=n,this.img=l,this.x=t,this.y=u,this.width=e-t+"%",this.selected=!1,this.clickThrough=a,this.good=i}return n.prototype.setSelected=function(n){this.selected=n},n})()},218:function(n,l,t){"use strict";t.d(l,"a",(function(){return e}));var e={baseUrl:{local:"http://localhost:3000/#/!",github:"http://LeonardA-L.github.io/ide-SPGO/#/!"},baseUrlStripped:"",root:{github:"/ide-SPGO",default:""},oxygen:{start:100,elementDecay:10,witnessDecay:5},tankDisplayDelay:2e3,maxElem:4,audio:{master:1,ramp:10}}},219:function(n,l,t){"use strict";function e(){return t.i(i.a)().bootstrapModuleFactory(r.a).then(a.a).catch((function(n){return console.error(n)}))}function u(){document.addEventListener("DOMContentLoaded",e)}Object.defineProperty(l,"__esModule",{value:!0});var i=t(22),a=t(34),r=t(183);l.main=e,l.bootstrapDomReady=u,u()},34:function(n,l,t){"use strict";var e=t(22),u=t(1),i=t(218);t.d(l,"a",(function(){return s})),t.d(l,"c",(function(){return c})),t.d(l,"b",(function(){return p}));var a=[],r={},o=function(n){return n};r.baseUrl=i.a.baseUrl.local,r.root=i.a.root.default,r.baseUrl=i.a.baseUrl.github,r.root=i.a.root.github,r.baseUrlStripped=r.baseUrl.replace(/\/\#\/\!/,"").replace(/https?:/,""),t.i(u.a)(),o=function(n){return t.i(e.b)(),n},a=a.slice();var s=o,c=a.slice(),p=Object.assign(i.a,r)},371:function(n,l){},387:function(n,l){n.exports=""},388:function(n,l){n.exports=""},389:function(n,l){n.exports=""},390:function(n,l){n.exports=""},391:function(n,l){n.exports=""},392:function(n,l){n.exports=""},430:function(n,l,t){var e=t(53);n.exports="string"==typeof e?e:e.toString()},431:function(n,l,t){var e=t(53);n.exports="string"==typeof e?e:e.toString()},432:function(n,l,t){var e=t(53);n.exports="string"==typeof e?e:e.toString()},433:function(n,l,t){var e=t(53);n.exports="string"==typeof e?e:e.toString()},434:function(n,l,t){var e=t(53);n.exports="string"==typeof e?e:e.toString()},435:function(n,l,t){var e=t(53);n.exports="string"==typeof e?e:e.toString()},53:function(n,l,t){l=n.exports=t(370)(),l.push([n.i,"",""])},65:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(55),a=t(13),r=t(15),o=t(19),s=t(66),c=t(56),p=t(34);t.d(l,"a",(function(){return _}));var _=(function(){function n(n,l,t,e,u,i){this.appState=n,this.gameService=l,this.translate=t,this.broadcaster=e,this.route=u,this.audio=i,this.teddy=!1,this.maxElem=p.b.maxElem}return n.prototype.ngOnInit=function(){this.gameService.gameState={},this.teddy=this.route.snapshot.queryParams.teddy,this.teddy||this.gameService.initGame(),this.audio.init()},n.prototype.pick=function(n){this.gameService.gameState.elements.length<this.maxElem&&(this.gameService.gameState.elements.push(n),n.selected=!0,this.gameService.gameState.elements.length===this.maxElem&&this.gameService.victoryCheck())},n.prototype.unpick=function(n){n.selected=!1;for(var l in this.gameService.gameState.elements)if(this.gameService.gameState.elements[l].id===n.id){this.gameService.gameState.elements.splice(l,1);break}},n.prototype.startFromTeddy=function(){this.teddy=!1,this.gameService.startGame(null)},n})();_=e.b([t.i(u._22)({selector:"game",encapsulation:u.o.None,template:t(388),styles:[t(431)]}),e.c("design:paramtypes",[a.a,o.a,c.b,r.a,i.a,s.a])],_)},66:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(34);t.d(l,"a",(function(){return a}));var a=(function(){function n(){}return n.prototype.init=function(){this.audios=[],this.addAudio(i.b.root+"/assets/sounds/SPGO - 15_10_2017 02.16.wav")},n.prototype.addAudio=function(n){var l={src:n,dom:document.createElement("audio")};l.dom.src=n,l.dom.volume=0,l.dom.ontimeupdate=function(){this.currentTime>=this.duration-i.b.audio.ramp?this.volume=(this.duration-this.currentTime)/i.b.audio.ramp:this.currentTime<=i.b.audio.ramp?this.volume=this.currentTime/i.b.audio.ramp:this.volume=1,this.volume*=i.b.audio.master},this.audios.push(l)},n})();a=e.b([t.i(u.c)()],a)},91:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(13),a=t(56);t.d(l,"a",(function(){return r}));var r=(function(){function n(n,l){this.appState=n,this.translate=l}return n.prototype.ngOnInit=function(){var n="fr"===navigator.language?"fr":"en";this.translate.setDefaultLang(n)},n})();r=e.b([t.i(u._22)({selector:"app",encapsulation:u.o.None,template:t(387),styles:[t(430)]}),e.c("design:paramtypes",[i.a,a.b])],r)},92:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(13),a=t(15),r=t(19),o=t(34);t.d(l,"a",(function(){return s}));var s=(function(){function n(n,l,t){this.appState=n,this.broadcaster=l,this.gameService=t,this.displayOxygen=!1;var e=this;this.broadcaster.on("init").subscribe((function(n){return e.init()})),this.broadcaster.on("testimony").subscribe((function(n){return e.testimony(n)}))}return n.prototype.ngOnInit=function(){this.init()},n.prototype.init=function(){console.log("Hud"),this.displayOxygen=!1},n.prototype.testimony=function(n){if("Bouteilles"===this.gameService.gameData[n].name){var l=this;setTimeout((function(){l.displayOxygen=!0}),o.b.tankDisplayDelay)}},n})();s=e.b([t.i(u._22)({selector:"hud",encapsulation:u.o.None,template:t(389),styles:[t(432)]}),e.c("design:paramtypes",[i.a,a.a,r.a])],s)},93:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(13),a=t(15),r=t(19);t.d(l,"a",(function(){return o}));var o=(function(){function n(n,l,t){this.appState=n,this.broadcaster=l,this.gameService=t,this.activate=!0;var e=this;this.broadcaster.on("overlay").subscribe((function(n){return e.startOverlay(n)}))}return n.prototype.ngOnInit=function(){this.startOverlay(null)},n.prototype.startOverlay=function(n){this.activate=!0,this.currentSequence=n||null},n.prototype.changeLang=function(n){this.gameService.initGame(n)},n.prototype.startGame=function(){this.goSequence("le début")},n.prototype.goSequence=function(n){var l=n;return"start"===l?void(this.activate=!1):"restart"===l?void this.broadcaster.broadcast("restart"):void(this.currentSequence=l)},n})();o=e.b([t.i(u._22)({selector:"overlay",encapsulation:u.o.None,template:t(390),styles:[t(433)]}),e.c("design:paramtypes",[i.a,a.a,r.a])],o)},94:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(22),a=t(13),r=t(15),o=t(19),s=t(217),c=t(34);t.d(l,"a",(function(){return p}));var p=(function(){function n(n,l,t,e){this.appState=n,this.gameService=l,this.broadcaster=t,this._sanitizer=e,this.elements=[new s.a(0,c.b.root+"/assets/img/elements/1_poster_chiromancie.png",81.8,92.2,62.8),new s.a(1,c.b.root+"/assets/img/elements/2_peinture_foret.png",3,42.2,57.5),new s.a(2,c.b.root+"/assets/img/elements/3_chaines.png",23.2,40.1,75.2,!0),new s.a(3,c.b.root+"/assets/img/elements/4_fil_rouge.png",9.3,93.2,11.7,!1,!0),new s.a(4,c.b.root+"/assets/img/elements/5_freud.png",11.3,31.4,32.5),new s.a(5,c.b.root+"/assets/img/elements/6_amandier.png",29.4,79.78,-13.5,!0),new s.a(6,c.b.root+"/assets/img/elements/7_coffre.png",16.1,21.2,40.3),new s.a(7,c.b.root+"/assets/img/elements/8_centaure.png",39.8,70,53.8),new s.a(8,c.b.root+"/assets/img/elements/9_la_disparue.png",32.6,44,46.8),new s.a(9,c.b.root+"/assets/img/elements/10_photo_houdini.png",19.1,50,8.8),new s.a(10,c.b.root+"/assets/img/elements/11_trophee_de_chasse.png",24.8,43.6,42.8),new s.a(11,c.b.root+"/assets/img/elements/12_charentaises.png",83.7,97.7,76.2,!0),new s.a(12,c.b.root+"/assets/img/elements/13_roue_astrologique.png",39.7,52,32.5),new s.a(13,c.b.root+"/assets/img/elements/14_assiette_coquelicot.png",1.6,21.8,.7),new s.a(14,c.b.root+"/assets/img/elements/15_harakiri.png",69.6,87.2,29.4),new s.a(15,c.b.root+"/assets/img/elements/16_peinture_puits.png",78.6,97.8,4.3),new s.a(16,c.b.root+"/assets/img/elements/17_escarpins.png",85.6,95.4,29.5,!0),new s.a(17,c.b.root+"/assets/img/elements/18_croquis_manoir.png",57,76,4.6),new s.a(18,c.b.root+"/assets/img/elements/19_peinture_lac.png",57,84.6,40.5)],this.pick=new u.F,this.unpick=new u.F;for(var i=0,a=this.elements;i<a.length;i++){var r=a[i];r.img=e.bypassSecurityTrustResourceUrl(r.img),r.left=e.bypassSecurityTrustStyle(r.x+"%"),r.top=e.bypassSecurityTrustStyle(r.y+"%")}var o=this;this.broadcaster.on("init").subscribe((function(n){return o.reset()}))}return n.prototype.reset=function(){for(var n=0,l=this.elements;n<l.length;n++){l[n].selected=!1}},n.prototype.pickElement=function(n){n.selected?this.unpick.next(n):(this.pick.next(n),this.broadcaster.broadcast("elementSelect",n))},n})();e.b([t.i(u._20)(),e.c("design:type",Object)],p.prototype,"pick",void 0),e.b([t.i(u._20)(),e.c("design:type",Object)],p.prototype,"unpick",void 0),p=e.b([t.i(u._22)({selector:"wall",encapsulation:u.o.None,template:t(391),styles:[t(434)]}),e.c("design:paramtypes",[a.a,o.a,r.a,i.c])],p)},95:function(n,l,t){"use strict";var e=t(10),u=t(1),i=t(13),a=t(15),r=t(19);t.d(l,"a",(function(){return o}));var o=(function(){function n(n,l,t){this.appState=n,this.gameService=l,this.broadcaster=t;var e=this;this.broadcaster.on("init").subscribe((function(n){return e.init()}))}return n.prototype.init=function(){this.currentSequence="se rendre sur la propriété"},n.prototype.goSequence=function(n,l,t){var e=n;if(t&&this.gameService.gameData[this.currentSequence].childrenNames.splice(l,1),"restart"===e)return void this.broadcaster.broadcast("restart");this.currentSequence=e,this.broadcaster.broadcast("testimony",e)},n.prototype.setHover=function(n){this.hoverName=n},n})();o=e.b([t.i(u._22)({selector:"witnesses",encapsulation:u.o.None,template:t(392),styles:[t(435)]}),e.c("design:paramtypes",[i.a,r.a,a.a])],o)}},[219]);