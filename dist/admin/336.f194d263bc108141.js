"use strict";(self.webpackChunkadmin=self.webpackChunkadmin||[]).push([[336],{336:(j,d,r)=>{r.r(d),r.d(d,{ManageUsersModule:()=>H});var m=r(6814),h=r(6223),f=r(9862),p=r(1896),t=r(5879),U=r(1596),_=r(8672),g=r(2425),C=r(5386),x=r(2296),c=r(5313);function T(e,i){1&e&&(t.TgZ(0,"th",13),t._uU(1," No. "),t.qZA())}function v(e,i){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const s=i.index;t.xp6(1),t.hij(" ",s+1," ")}}function Z(e,i){1&e&&(t.TgZ(0,"th",13),t._uU(1," Name "),t.qZA())}function A(e,i){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.hij(" ",s.name," ")}}function b(e,i){1&e&&(t.TgZ(0,"th",13),t._uU(1," Email "),t.qZA())}function k(e,i){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.hij(" ",s.email," ")}}function S(e,i){1&e&&(t.TgZ(0,"th",13),t._uU(1," Tasks Assigned "),t.qZA())}function Y(e,i){if(1&e&&(t.TgZ(0,"td",14),t._uU(1),t.qZA()),2&e){const s=i.$implicit;t.xp6(1),t.hij(" ",s.tasksAssigned," ")}}function y(e,i){1&e&&t._UZ(0,"th",15)}function N(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"button",19),t.NdJ("click",function(){t.CHM(s);const o=t.oxw(),a=o.$implicit,l=o.index,u=t.oxw();return t.KtG(u.changeUserStatus(a.status,a.id,l))}),t._uU(1,"In-Active"),t.qZA()}}function D(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"button",20),t.NdJ("click",function(){t.CHM(s);const o=t.oxw(),a=o.$implicit,l=o.index,u=t.oxw();return t.KtG(u.changeUserStatus(a.status,a.id,l))}),t._uU(1,"Active"),t.qZA()}}function w(e,i){if(1&e){const s=t.EpF();t.TgZ(0,"td",14)(1,"button",16),t.NdJ("click",function(){const a=t.CHM(s).$implicit,l=t.oxw();return t.KtG(l.deleteUser(a.id))}),t._uU(2,"Delete"),t.qZA(),t.YNc(3,N,2,0,"button",17),t.YNc(4,D,2,0,"button",18),t.qZA()}if(2&e){const s=i.$implicit;t.xp6(3),t.Q6J("ngIf","Active"==s.status),t.xp6(1),t.Q6J("ngIf","Active"!==s.status)}}function M(e,i){1&e&&t._UZ(0,"tr",21)}function B(e,i){1&e&&t._UZ(0,"tr",22)}const J=[{path:"",component:(()=>{class e{constructor(s,n,o,a,l){this.usersSrv=s,this.spinner=n,this.toaster=o,this.tokenSrv=a,this.router=l,this.displayedColumns=["position","name","email","tasksAssigned","actions"],this.realUsersList=[]}ngOnInit(){this.getUsers(),console.log(!!this.tokenSrv.getToken()),this.tokenSrv.getToken()||this.router.navigate(["/login"])}getUsers(){this.realUsersList=[],this.spinner.show(),this.usersSrv.getUsers().subscribe(s=>{s.users.map(n=>{console.log(n),this.realUsersList.push({id:n._id,name:n.username,email:n.email,tasksAssigned:n.assignedTasks,status:n.status})}),this.dataSource=this.realUsersList,this.spinner.hide()},s=>{this.spinner.hide()})}deleteUser(s){this.spinner.show(),this.usersSrv.deleteUsers(s).subscribe(n=>{this.getUsers(),this.spinner.hide(),this.toaster.success("Deleted Successfully")},n=>{this.spinner.hide(),this.toaster.error("Deleted Error")})}changeUserStatus(s,n,o){const a={id:n,status:s};this.dataSource[o].tasksAssigned>0?this.toaster.error("You Can't Update This User Until Finish His Tasks"):(this.spinner.show(),this.usersSrv.changeStatus(a).subscribe(l=>{this.toaster.success("User Status Updated Successfully"),this.getUsers(),this.spinner.hide()},l=>{this.toaster.error("Error"),this.spinner.hide()}))}static#t=this.\u0275fac=function(n){return new(n||e)(t.Y36(U.f),t.Y36(_.t2),t.Y36(g._W),t.Y36(C.B),t.Y36(p.F0))};static#e=this.\u0275cmp=t.Xpm({type:e,selectors:[["app-users"]],decls:20,vars:3,consts:[[1,"mt-4"],[1,"listBox"],["mat-table","",1,"mat-elevation-z8","w-100","mt-2",3,"dataSource"],["matColumnDef","position"],["mat-header-cell","",4,"matHeaderCellDef"],["mat-cell","",4,"matCellDef"],["matColumnDef","name"],["matColumnDef","email"],["matColumnDef","tasksAssigned"],["matColumnDef","actions"],["mat-header-cell","","class","w-25",4,"matHeaderCellDef"],["mat-header-row","",4,"matHeaderRowDef"],["mat-row","",4,"matRowDef","matRowDefColumns"],["mat-header-cell",""],["mat-cell",""],["mat-header-cell","",1,"w-25"],["mat-raised-button","","color","warn",3,"click"],["mat-raised-button","","color","primary",3,"click",4,"ngIf"],["mat-raised-button","","class","btn btn-success",3,"click",4,"ngIf"],["mat-raised-button","","color","primary",3,"click"],["mat-raised-button","",1,"btn","btn-success",3,"click"],["mat-header-row",""],["mat-row",""]],template:function(n,o){1&n&&(t.TgZ(0,"div",0)(1,"div",1)(2,"table",2),t.ynx(3,3),t.YNc(4,T,2,0,"th",4),t.YNc(5,v,2,1,"td",5),t.BQk(),t.ynx(6,6),t.YNc(7,Z,2,0,"th",4),t.YNc(8,A,2,1,"td",5),t.BQk(),t.ynx(9,7),t.YNc(10,b,2,0,"th",4),t.YNc(11,k,2,1,"td",5),t.BQk(),t.ynx(12,8),t.YNc(13,S,2,0,"th",4),t.YNc(14,Y,2,1,"td",5),t.BQk(),t.ynx(15,9),t.YNc(16,y,1,0,"th",10),t.YNc(17,w,5,2,"td",5),t.BQk(),t.YNc(18,M,1,0,"tr",11),t.YNc(19,B,1,0,"tr",12),t.qZA()()()),2&n&&(t.xp6(2),t.Q6J("dataSource",o.dataSource),t.xp6(16),t.Q6J("matHeaderRowDef",o.displayedColumns),t.xp6(1),t.Q6J("matRowDefColumns",o.displayedColumns))},dependencies:[x.lW,c.BZ,c.fO,c.as,c.w1,c.Dz,c.nj,c.ge,c.ev,c.XQ,c.Gk,m.O5],styles:["[_nghost-%COMP%]     table thead{background-color:#26f3d1!important}[_nghost-%COMP%]     table thead .mat-header-cell{color:#fff}.w-20[_ngcontent-%COMP%]{width:20%!important}"]})}return e})()}];let Q=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[m.ez,p.Bz.forChild(J)]})}return e})();var F=r(9284);let H=(()=>{class e{static#t=this.\u0275fac=function(n){return new(n||e)};static#e=this.\u0275mod=t.oAB({type:e});static#s=this.\u0275inj=t.cJS({imports:[F.q,h.u5,h.UX,Q,f.JF,m.ez]})}return e})()}}]);