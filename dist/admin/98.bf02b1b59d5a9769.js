"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[98],{2098:(h,c,o)=>{o.r(c),o.d(c,{DashModule:()=>m});var l=o(6814),i=o(1896),t=o(5879),r=o(5386);function u(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"a",11),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.logout())}),t._uU(1,"Logout"),t.qZA()}}function d(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"a",11),t.NdJ("click",function(){t.CHM(e);const s=t.oxw();return t.KtG(s.logout())}),t._uU(1,"Logout"),t.qZA()}}const v=[{path:"",component:(()=>{class n{constructor(e){this.tokenSrv=e,this.logedIn=!1}ngOnInit(){this.tokenSrv.getToken()&&(this.logedIn=!0)}logout(){this.tokenSrv.removeToken()}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(r.B))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],decls:19,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-light"],[1,"container"],[1,"navbar-brand"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","active"],["routerLink","/tasks","routerLinkActive","active",1,"nav-link"],[1,"sr-only"],[1,"nav-item"],["routerLink","/users","routerLinkActive","active",1,"nav-link"],["class","nav-link","routerLink","/login",3,"click",4,"ngIf"],["routerLink","/login",1,"nav-link",3,"click"]],template:function(a,s){1&a&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2),t._uU(3,"Tasks Managemanet"),t.qZA(),t.TgZ(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8,"All-Tasks "),t.TgZ(9,"span",7),t._uU(10,"(current)"),t.qZA()()(),t.TgZ(11,"li",8)(12,"a",9),t._uU(13,"Users"),t.qZA()()(),t.TgZ(14,"div",8),t.YNc(15,u,2,0,"a",10),t.YNc(16,d,2,0,"a",10),t.qZA()()()(),t.TgZ(17,"div",1),t._UZ(18,"router-outlet"),t.qZA()),2&a&&(t.xp6(15),t.Q6J("ngIf",s.logedIn),t.xp6(1),t.Q6J("ngIf",!s.logedIn))},dependencies:[l.O5,i.lC,i.rH,i.Od],styles:["nav[_ngcontent-%COMP%]{background-color:#26f3d1}nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:27px;font-weight:700;color:#003d33!important}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:20px;color:#fff!important}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#004242;color:#fff;border-radius:5px}"]})}return n})(),children:[{path:"tasks",loadChildren:()=>Promise.all([o.e(592),o.e(530)]).then(o.bind(o,9530)).then(n=>n.AdminTasksModule)},{path:"users",loadChildren:()=>Promise.all([o.e(592),o.e(336)]).then(o.bind(o,336)).then(n=>n.ManageUsersModule)}]}];let g=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(v),i.Bz]})}return n})(),m=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[l.ez,g]})}return n})()}}]);