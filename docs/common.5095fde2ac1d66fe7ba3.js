(window.webpackJsonp=window.webpackJsonp||[]).push([[1],{L4B8:function(t,n,e){"use strict";e.d(n,"a",function(){return u});var r=e("mrSG"),o=e("t/Na"),i=e("AytR"),c=e("CcnG"),u=function(){function t(){this.isIncognito=null,this.project={id:0,name:""},this.urlapi=i.a.httpApi,this.httpClient=new o.c(new o.g({build:function(){return new XMLHttpRequest}}))}return t.prototype.create=function(t){null!=i.a.projects&&(this.project.id=i.a.projects.length),this.project.name=t,this.httpClient.post(this.urlapi,this.project).subscribe(),null!=i.a.projects?i.a.projects.push(r.a({},this.project)):i.a.projects=[this.project]},t.prototype.read=function(){return r.b(this,void 0,void 0,function(){return r.e(this,function(t){switch(t.label){case 0:return[4,this.httpClient.get(this.urlapi).toPromise()];case 1:return[2,t.sent()]}})})},t.ngInjectableDef=c.S({factory:function(){return new t},token:t,providedIn:"root"}),t}()},UR7h:function(t,n,e){"use strict";e.d(n,"a",function(){return c});var r=e("mrSG"),o=e("AytR"),i=e("CcnG"),c=function(){function t(){this.project={id:0,name:""}}return t.prototype.create=function(t){this.project.id=o.a.projects.length,this.project.name=t,o.a.projects.push(r.a({},this.project))},t.prototype.read=function(){return new Promise(function(t,n){t(o.a.projects)})},t.ngInjectableDef=i.S({factory:function(){return new t},token:t,providedIn:"root"}),t}()},gMFV:function(t,n,e){"use strict";e.d(n,"a",function(){return o});var r=e("CcnG"),o=function(){function t(){}return t.prototype.create=function(t){},t.prototype.read=function(){},t.ngInjectableDef=r.S({factory:function(){return new t},token:t,providedIn:"root"}),t}()}}]);