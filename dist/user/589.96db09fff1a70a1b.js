"use strict";(self.webpackChunkuser=self.webpackChunkuser||[]).push([[589],{589:(h,s,o)=>{o.r(s),o.d(s,{DashModule:()=>p});var l=o(6814),i=o(1896),t=o(5879),r=o(833);function u(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"a",10),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.logout())}),t._uU(1,"Log Out"),t.qZA()}}function d(n,f){if(1&n){const e=t.EpF();t.TgZ(0,"a",10),t.NdJ("click",function(){t.CHM(e);const c=t.oxw();return t.KtG(c.logout())}),t._uU(1,"Log In"),t.qZA()}}const g=[{path:"",component:(()=>{class n{constructor(e){this.token=e,this.logedIn=!1}ngOnInit(){this.token.getToken()&&(this.logedIn=!0)}logout(){this.token.removeToken()}static#t=this.\u0275fac=function(a){return new(a||n)(t.Y36(r.B))};static#n=this.\u0275cmp=t.Xpm({type:n,selectors:[["app-layout"]],decls:16,vars:2,consts:[[1,"navbar","navbar-expand-lg","navbar-light"],[1,"container"],[1,"navbar-brand"],["id","navbarSupportedContent",1,"collapse","navbar-collapse"],[1,"navbar-nav","mr-auto"],[1,"nav-item","active"],["routerLink","/tasks","routerLinkActive","active",1,"nav-link"],[1,"sr-only"],[1,"nav-item"],["class","nav-link","routerLink","auth/login",3,"click",4,"ngIf"],["routerLink","auth/login",1,"nav-link",3,"click"]],template:function(a,c){1&a&&(t.TgZ(0,"nav",0)(1,"div",1)(2,"div",2),t._uU(3,"Tasks"),t.qZA(),t.TgZ(4,"div",3)(5,"ul",4)(6,"li",5)(7,"a",6),t._uU(8,"All-Tasks "),t.TgZ(9,"span",7),t._uU(10,"(current)"),t.qZA()()()(),t.TgZ(11,"div",8),t.YNc(12,u,2,0,"a",9),t.YNc(13,d,2,0,"a",9),t.qZA()()()(),t.TgZ(14,"div",1),t._UZ(15,"router-outlet"),t.qZA()),2&a&&(t.xp6(12),t.Q6J("ngIf",c.logedIn),t.xp6(1),t.Q6J("ngIf",!c.logedIn))},dependencies:[l.O5,i.lC,i.rH,i.Od],styles:["nav[_ngcontent-%COMP%]{background-color:#26f3d1}nav[_ngcontent-%COMP%]   .navbar-brand[_ngcontent-%COMP%]{font-size:27px;font-weight:700;color:#004242!important}nav[_ngcontent-%COMP%]   a[_ngcontent-%COMP%]{font-size:20px;color:#fff!important}nav[_ngcontent-%COMP%]   a.active[_ngcontent-%COMP%]{background-color:#004242;color:#fff}"]})}return n})(),children:[{path:"",loadChildren:()=>Promise.all([o.e(592),o.e(40)]).then(o.bind(o,3040)).then(n=>n.TasksModule)}]}];let v=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[i.Bz.forChild(g),i.Bz]})}return n})(),p=(()=>{class n{static#t=this.\u0275fac=function(a){return new(a||n)};static#n=this.\u0275mod=t.oAB({type:n});static#o=this.\u0275inj=t.cJS({imports:[l.ez,v]})}return n})()}}]);