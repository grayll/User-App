(window.webpackJsonp=window.webpackJsonp||[]).push([[6],{HXLa:function(l,n,u){"use strict";u.d(n,"a",function(){return o}),u.d(n,"b",function(){return i});var t=u("CcnG"),o=(u("jE6/"),u("Ip0R"),t.ob({encapsulation:2,styles:["\n      countdown {\n        display: none;\n      }\n    "],data:{}}));function i(l){return t.Kb(2,[t.zb(null,0)],null,null)}},KDWp:function(l,n,u){"use strict";u.d(n,"a",function(){return o});var t=u("wHSu"),o=(u("Zbiy"),function(){function l(l,n){this.clipboardService=l,this.snotifyService=n,this.activityTabs=[{id:"openAlgoPositions",name:"Open Algo Positions"},{id:"closedAlgoPositions",name:"Closed Algo Positions"},{id:"allAlgoPositions",name:"All Algo Positions"}],this.countdownConfig={leftTime:1123200,demand:!1,template:"$!h!:$!m! | $!d!",effect:null},this.faDownload=t.a,this.faClose=t.s,this.faInfo=t.m,this.faCopy=t.j,this.faSearch=t.r,this.faSortByPositionValue=t.c,this.faSortByPositionProfit=t.c,this.faSortByROI=t.c,this.selectedTab=this.activityTabs[0]}return l.prototype.ngOnInit=function(){},l.prototype.sortByPositionValue=function(){this.isSortedUpByPositionValue?(this.faSortByPositionValue=t.c,this.isSortedUpByPositionValue=!1):(this.faSortByPositionValue=t.d,this.isSortedUpByPositionValue=!0)},l.prototype.sortByPositionProfit=function(){this.isSortedUpByPositionProfit?(this.faSortByPositionProfit=t.c,this.isSortedUpByPositionProfit=!1):(this.faSortByPositionProfit=t.d,this.isSortedUpByPositionProfit=!0)},l.prototype.sortByROI=function(){this.isSortedUpByROI?(this.faSortByROI=t.c,this.isSortedUpByROI=!1):(this.faSortByROI=t.d,this.isSortedUpByROI=!0)},l.prototype.onTabChange=function(l){this.selectedTab=this.activityTabs.find(function(n){return n.id===l})},l.prototype.copySuccess=function(l){this.clipboardService.copyFromContent(l)&&this.snotifyService.simple("Copied to clipboard.")},l}())},nUJc:function(l,n,u){"use strict";var t=u("CcnG"),o=u("4GxJ"),i=u("ZYCi"),b=u("fNgX"),e=u("Hf/j"),r=u("ZYjt"),s=u("HXLa"),a=u("jE6/"),c=u("Ip0R"),d=u("9AJC");u("KDWp"),u("Axip"),u("Zbiy"),u.d(n,"a",function(){return p}),u.d(n,"b",function(){return P});var p=t.ob({encapsulation:0,styles:[[".purple-link[_ngcontent-%COMP%]{color:#40278c!important}.purple-link[_ngcontent-%COMP%]:hover{color:#cfa256!important;cursor:pointer!important}.cancel[_ngcontent-%COMP%]:hover{cursor:pointer}.pull-top[_ngcontent-%COMP%]{margin-top:-4px!important}input[_ngcontent-%COMP%]{border:none;background-color:transparent}fa-icon[_ngcontent-%COMP%]:hover{cursor:pointer!important}.search[_ngcontent-%COMP%]   .input-group-text[_ngcontent-%COMP%]{border-color:#40278c;border-left:0}  .nav-pills .nav-link{border-radius:0;opacity:.7;font-size:.9rem;color:#40278c!important}  .nav-pills .nav-link.active{opacity:1;background-color:transparent;border-bottom:2px solid #40278c!important}  ul.nav-pills{justify-content:center!important}"]],data:{}});function q(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,4,null,null,null,null,null,null,null)),(l()(),t.qb(1,0,null,null,3,"ngb-tab",[],null,null,null,null,null)),t.pb(2,2113536,[[1,4]],2,o.K,[],{id:[0,"id"],title:[1,"title"]},null),t.Gb(603979776,2,{titleTpls:1}),t.Gb(603979776,3,{contentTpls:1})],function(l,n){l(n,2,0,n.context.$implicit.id,n.context.$implicit.name)},null)}function f(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,23,"div",[["class","bg-gradient text-light"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,22,"div",[["class","row justify-content-center align-items-center mb-1 p-2"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,2,"div",[["class","col-md-2 col-xs"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,1,"span",[["class","align-middle font-weight-bolder font-14"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Open Algo Positions (1)"])),(l()(),t.qb(5,0,null,null,8,"div",[["class","col"],["style","outline: none;"]],null,[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,6).onClick()&&o),o},null,null)),t.pb(6,16384,null,0,i.l,[i.k,i.a,[8,null],t.E,t.k],{routerLink:[0,"routerLink"]},null),t.Db(7,{popup:0}),t.Db(8,{outlets:0}),t.Bb(9,2),(l()(),t.qb(10,0,null,null,1,"fa-icon",[["class","text-danger cancel ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(11,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(12,0,null,null,1,"span",[["class","ml-1 cancel text-danger"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Cancel All Algo Positions"])),(l()(),t.qb(14,0,null,null,8,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,7,"div",[["class","row"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,6,"div",[["class","col search"]],null,null,null,null,null)),(l()(),t.qb(17,0,null,null,5,"div",[["class","input-group"]],null,null,null,null,null)),(l()(),t.qb(18,0,null,null,0,"input",[["class","form-control bg-transparent py-2 border border-right-0 text-light"],["style","border-color: #40278C!important"],["type","search"]],null,null,null,null,null)),(l()(),t.qb(19,0,null,null,3,"span",[["class","input-group-append"]],null,null,null,null,null)),(l()(),t.qb(20,0,null,null,2,"div",[["class","input-group-text bg-transparent"]],null,null,null,null,null)),(l()(),t.qb(21,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["style","color: #40278C"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(22,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(23,0,null,null,0,"div",[["class","col"]],null,null,null,null,null))],function(l,n){var u=n.component,t=l(n,9,0,"/system/overview",l(n,8,0,l(n,7,0,"cancel-algo-positions")));l(n,6,0,t),l(n,11,0,u.faClose),l(n,22,0,u.faSearch)},function(l,n){l(n,10,0,t.Ab(n,11).renderedIconHTML),l(n,21,0,t.Ab(n,22).renderedIconHTML)})}function I(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,70,"div",[["class","table-responsive bg-gradient text-light pull-top"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,69,"table",[["class","table mb-0"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,33,"thead",[],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,32,"tr",[["class","font-weight-bolder font-10 text-light"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Open Date"])),(l()(),t.qb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Status"])),(l()(),t.qb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Duration"])),(l()(),t.qb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Algorithm"])),(l()(),t.qb(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Price (GRX)"])),(l()(),t.qb(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Price (USD)"])),(l()(),t.qb(16,0,null,null,3,"th",[["class","cancel"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortByPositionValue()&&t),t},null,null)),(l()(),t.Ib(-1,null,[" Position Value (USD) "])),(l()(),t.qb(18,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["style","color: #40278C;"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(19,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(20,0,null,null,3,"th",[["class","cancel"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortByPositionProfit()&&t),t},null,null)),(l()(),t.Ib(-1,null,[" Position Profit (USD) "])),(l()(),t.qb(22,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["style","color: #40278C;"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(23,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(24,0,null,null,3,"th",[["class","cancel"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortByROI()&&t),t},null,null)),(l()(),t.Ib(-1,null,[" ROI "])),(l()(),t.qb(26,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["style","color: #40278C;"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(27,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(28,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRAYLL Transaction ID"])),(l()(),t.qb(30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Stellar Transaction ID"])),(l()(),t.qb(32,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Info"])),(l()(),t.qb(34,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Actions"])),(l()(),t.qb(36,0,null,null,34,"tbody",[["class","font-8 text-light"]],null,null,null,null,null)),(l()(),t.qb(37,0,null,null,33,"tr",[],null,null,null,null,null)),(l()(),t.qb(38,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["18/08/2019 04:14"])),(l()(),t.qb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["OPEN"])),(l()(),t.qb(42,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(43,0,null,null,1,"countdown",[],[[2,"count-down",null]],null,null,s.b,s.a)),t.pb(44,770048,null,0,a.a,[t.k,a.c,a.d],{config:[0,"config"]},null),(l()(),t.qb(45,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRY 1"])),(l()(),t.qb(47,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(49,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(51,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2,110,000,000.55555"])),(l()(),t.qb(53,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1,000,000,000.55555"])),(l()(),t.qb(55,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110.22%"])),(l()(),t.qb(57,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(59,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(61,0,null,null,3,"td",[["class","text-center"]],null,null,null,null,null)),(l()(),t.qb(62,0,null,null,2,"a",[["href","https://stellar.expert/explorer/public"],["target","_blank"]],null,null,null,null,null)),(l()(),t.qb(63,0,null,null,1,"fa-icon",[["class","purple-link cancel ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(64,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(65,0,null,null,5,"td",[],null,null,null,null,null)),(l()(),t.qb(66,0,null,null,4,"a",[["class","purple-link"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.qb(67,0,null,null,1,"fa-icon",[["class","text-danger cancel ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(68,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(69,0,null,null,1,"span",[["class","ml-1 cancel text-danger"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Cancel"]))],function(l,n){var u=n.component;l(n,19,0,u.faSortByPositionValue),l(n,23,0,u.faSortByPositionProfit),l(n,27,0,u.faSortByROI),l(n,44,0,u.countdownConfig),l(n,64,0,u.faInfo),l(n,68,0,u.faClose)},function(l,n){l(n,18,0,t.Ab(n,19).renderedIconHTML),l(n,22,0,t.Ab(n,23).renderedIconHTML),l(n,26,0,t.Ab(n,27).renderedIconHTML),l(n,43,0,!0),l(n,63,0,t.Ab(n,64).renderedIconHTML),l(n,67,0,t.Ab(n,68).renderedIconHTML)})}function h(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,10,"div",[["class","row justify-content-center align-items-center mb-1 p-2"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,5,"div",[["class","col-md-2 col-xs"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,1,"span",[["class","align-middle font-14 font-weight-bolder"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Closed Algo Positions (10)"])),(l()(),t.qb(4,0,null,null,0,"br",[],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"span",[["class","text-light font-10 font-weight-bolder"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Most Recent Closed Positions"])),(l()(),t.qb(7,0,null,null,3,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,2,"a",[["class","purple-link font-14"],["href","javascript:void(0)"],["routerLink","/data/overview"]],[[1,"target",0],[8,"href",4]],[[null,"click"]],function(l,n,u){var o=!0;return"click"===n&&(o=!1!==t.Ab(l,9).onClick(u.button,u.ctrlKey,u.metaKey,u.shiftKey)&&o),o},null,null)),t.pb(9,671744,null,0,i.m,[i.k,i.a,c.h],{routerLink:[0,"routerLink"]},null),(l()(),t.Ib(-1,null,[" All Closed Algo Positions "]))],function(l,n){l(n,9,0,"/data/overview")},function(l,n){l(n,8,0,t.Ab(n,9).target,t.Ab(n,9).href)})}function g(l){return t.Kb(0,[(l()(),t.qb(0,0,null,null,188,"div",[["class","table-responsive bg-gradient text-light pull-top"]],null,null,null,null,null)),(l()(),t.qb(1,0,null,null,187,"table",[["class","table mb-0"]],null,null,null,null,null)),(l()(),t.qb(2,0,null,null,29,"thead",[],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,28,"tr",[["class","font-weight-bolder font-10 text-light"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Open Date"])),(l()(),t.qb(6,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Status"])),(l()(),t.qb(8,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Duration"])),(l()(),t.qb(10,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Algorithm"])),(l()(),t.qb(12,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Price (GRX)"])),(l()(),t.qb(14,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Price (USD)"])),(l()(),t.qb(16,0,null,null,3,"th",[["class","cancel"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortByPositionValue()&&t),t},null,null)),(l()(),t.Ib(-1,null,[" Position Value (USD) "])),(l()(),t.qb(18,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["style","color: #40278C;"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(19,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(20,0,null,null,3,"th",[["class","cancel"]],null,[[null,"click"]],function(l,n,u){var t=!0;return"click"===n&&(t=!1!==l.component.sortByPositionProfit()&&t),t},null,null)),(l()(),t.Ib(-1,null,[" Position Profit (USD) "])),(l()(),t.qb(22,0,null,null,1,"fa-icon",[["class","ng-fa-icon"],["style","color: #40278C;"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(23,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"]},null),(l()(),t.qb(24,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["ROI"])),(l()(),t.qb(26,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRAYLL Transaction ID"])),(l()(),t.qb(28,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Stellar Transaction ID"])),(l()(),t.qb(30,0,null,null,1,"th",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Actions"])),(l()(),t.qb(32,0,null,null,156,"tbody",[["class","font-8 text-light"]],null,null,null,null,null)),(l()(),t.qb(33,0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t.qb(34,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["18/08/2019 04:14"])),(l()(),t.qb(36,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CLOSED"])),(l()(),t.qb(38,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["23:59 | 12"])),(l()(),t.qb(40,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRY 1"])),(l()(),t.qb(42,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(44,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(46,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2,110,000,000.55555"])),(l()(),t.qb(48,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1,000,000,000.55555"])),(l()(),t.qb(50,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110.22%"])),(l()(),t.qb(52,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(54,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(56,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(57,0,null,null,1,"a",[["class","purple-link"],["href","https://stellar.expert/explorer/public"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Details"])),(l()(),t.qb(59,0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t.qb(60,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["18/08/2019 04:14"])),(l()(),t.qb(62,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CLOSED"])),(l()(),t.qb(64,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["23:59 | 12"])),(l()(),t.qb(66,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRY 1"])),(l()(),t.qb(68,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(70,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(72,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2,110,000,000.55555"])),(l()(),t.qb(74,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1,000,000,000.55555"])),(l()(),t.qb(76,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110.22%"])),(l()(),t.qb(78,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(80,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(82,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(83,0,null,null,1,"a",[["class","purple-link"],["href","https://stellar.expert/explorer/public"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Details"])),(l()(),t.qb(85,0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t.qb(86,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["18/08/2019 04:14"])),(l()(),t.qb(88,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CLOSED"])),(l()(),t.qb(90,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["23:59 | 12"])),(l()(),t.qb(92,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRY 1"])),(l()(),t.qb(94,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(96,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(98,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2,110,000,000.55555"])),(l()(),t.qb(100,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1,000,000,000.55555"])),(l()(),t.qb(102,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110.22%"])),(l()(),t.qb(104,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(106,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(108,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(109,0,null,null,1,"a",[["class","purple-link"],["href","https://stellar.expert/explorer/public"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Details"])),(l()(),t.qb(111,0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t.qb(112,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["18/08/2019 04:14"])),(l()(),t.qb(114,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CLOSED"])),(l()(),t.qb(116,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["23:59 | 12"])),(l()(),t.qb(118,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRY 1"])),(l()(),t.qb(120,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(122,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(124,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2,110,000,000.55555"])),(l()(),t.qb(126,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1,000,000,000.55555"])),(l()(),t.qb(128,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110.22%"])),(l()(),t.qb(130,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(132,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(134,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(135,0,null,null,1,"a",[["class","purple-link"],["href","https://stellar.expert/explorer/public"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Details"])),(l()(),t.qb(137,0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t.qb(138,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["18/08/2019 04:14"])),(l()(),t.qb(140,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CLOSED"])),(l()(),t.qb(142,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["23:59 | 12"])),(l()(),t.qb(144,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRY 1"])),(l()(),t.qb(146,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(148,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(150,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2,110,000,000.55555"])),(l()(),t.qb(152,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1,000,000,000.55555"])),(l()(),t.qb(154,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110.22%"])),(l()(),t.qb(156,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(158,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(160,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(161,0,null,null,1,"a",[["class","purple-link"],["href","https://stellar.expert/explorer/public"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Details"])),(l()(),t.qb(163,0,null,null,25,"tr",[],null,null,null,null,null)),(l()(),t.qb(164,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["18/08/2019 04:14"])),(l()(),t.qb(166,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["CLOSED"])),(l()(),t.qb(168,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["23:59 | 12"])),(l()(),t.qb(170,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["GRY 1"])),(l()(),t.qb(172,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(174,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0.14500"])),(l()(),t.qb(176,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["2,110,000,000.55555"])),(l()(),t.qb(178,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["1,000,000,000.55555"])),(l()(),t.qb(180,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["110.22%"])),(l()(),t.qb(182,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(184,0,null,null,1,"td",[],null,null,null,null,null)),(l()(),t.Ib(-1,null,["0108181408618385411"])),(l()(),t.qb(186,0,null,null,2,"td",[],null,null,null,null,null)),(l()(),t.qb(187,0,null,null,1,"a",[["class","purple-link"],["href","https://stellar.expert/explorer/public"],["target","_blank"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Details"]))],function(l,n){var u=n.component;l(n,19,0,u.faSortByPositionValue),l(n,23,0,u.faSortByPositionProfit)},function(l,n){l(n,18,0,t.Ab(n,19).renderedIconHTML),l(n,22,0,t.Ab(n,23).renderedIconHTML)})}function P(l){return t.Kb(0,[(l()(),t.qb(0,16777216,null,null,1,"router-outlet",[["name","popup"]],null,null,null,null,null)),t.pb(1,212992,null,0,i.o,[i.b,t.P,t.j,[8,"popup"],t.h],null,null),(l()(),t.qb(2,0,null,null,17,"div",[["class","bg-gradient text-light"]],null,null,null,null,null)),(l()(),t.qb(3,0,null,null,15,"div",[["class","row align-items-center justify-content-center p-2"]],null,null,null,null,null)),(l()(),t.qb(4,0,null,null,2,"div",[["class","col"]],null,null,null,null,null)),(l()(),t.qb(5,0,null,null,1,"span",[["class","lead align-middle"]],null,null,null,null,null)),(l()(),t.Ib(-1,null,["Activity"])),(l()(),t.qb(7,0,null,null,5,"div",[["class","col-xs-12 col-md-6 justify-content-center align-items-center"]],null,null,null,null,null)),(l()(),t.qb(8,0,null,null,4,"ngb-tabset",[["class","custom-pills"],["type","pills"]],null,[[null,"tabChange"]],function(l,n,u){var t=!0;return"tabChange"===n&&(t=!1!==l.component.onTabChange(u.nextId)&&t),t},d.g,d.d)),t.pb(9,2146304,null,1,o.N,[o.O],{type:[0,"type"]},{tabChange:"tabChange"}),t.Gb(603979776,1,{tabs:1}),(l()(),t.hb(16777216,null,null,1,null,q)),t.pb(12,278528,null,0,c.j,[t.P,t.M,t.t],{ngForOf:[0,"ngForOf"]},null),(l()(),t.qb(13,0,null,null,5,"div",[["class","col text-center"]],null,null,null,null,null)),(l()(),t.qb(14,0,null,null,0,"hr",[["class","mt-0 d-sm-none"]],null,null,null,null,null)),(l()(),t.qb(15,0,null,null,3,"a",[["class","purple-link"],["href","javascript:void(0)"]],null,null,null,null,null)),(l()(),t.qb(16,0,null,null,1,"fa-icon",[["class","ng-fa-icon"]],[[8,"innerHTML",1]],null,null,b.b,b.a)),t.pb(17,573440,null,0,e.a,[r.b,e.b],{iconProp:[0,"iconProp"],fixedWidth:[1,"fixedWidth"]},null),(l()(),t.Ib(-1,null,[" Download Activity History "])),(l()(),t.qb(19,0,null,null,0,"hr",[["class","mt-0 mb-0"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,f)),t.pb(21,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,I)),t.pb(23,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.qb(24,0,null,null,2,"div",[["class","bg-gradient text-light"]],null,null,null,null,null)),(l()(),t.hb(16777216,null,null,1,null,h)),t.pb(26,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null),(l()(),t.hb(16777216,null,null,1,null,g)),t.pb(28,16384,null,0,c.k,[t.P,t.M],{ngIf:[0,"ngIf"]},null)],function(l,n){var u=n.component;l(n,1,0),l(n,9,0,"pills"),l(n,12,0,u.activityTabs),l(n,17,0,u.faDownload,!0),l(n,21,0,"openAlgoPositions"===u.selectedTab.id||"allAlgoPositions"===u.selectedTab.id),l(n,23,0,"openAlgoPositions"===u.selectedTab.id||"allAlgoPositions"===u.selectedTab.id),l(n,26,0,"closedAlgoPositions"===u.selectedTab.id||"allAlgoPositions"===u.selectedTab.id),l(n,28,0,"closedAlgoPositions"===u.selectedTab.id||"allAlgoPositions"===u.selectedTab.id)},function(l,n){l(n,16,0,t.Ab(n,17).renderedIconHTML)})}}}]);