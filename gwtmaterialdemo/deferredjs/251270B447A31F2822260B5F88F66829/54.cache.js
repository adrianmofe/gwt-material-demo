$wnd.gwtmaterialdemo.runAsyncCallback54("function xre(){}\nfunction zre(){}\nfunction Bre(){}\nfunction Dre(){}\nfunction Fre(){}\nfunction Jre(){}\nfunction Lre(){}\nfunction o4c(a,b){a.onshow=b}\nfunction m4c(a,b){a.onclose=b}\nfunction l4c(a,b){a.onclick=b}\nfunction n4c(a,b){a.onerror=b}\nfunction Ire(){this.a=new Jre;this.b=new Lre}\nfunction wre(){lJb.call(this);jJb(this,Hre(new Ire))}\nfunction nre(a,b,c){wIb();VIb.call(this,a,b,c,(psd(),nsd))}\nfunction Pre(a){var b;if(!a.d){b=new wre;a.d=b}return a.d}\nfunction Ore(a){var b,c;if(!a.c){c=new nre(JFb(DJb(a.a)),(b=Pre(a),b),Nre(a));oIb((GJb(a.a),c),ELb(GJb(a.a)));a.c=c}return a.c}\nfunction ure(){var a;a=(U3c(),$wnd.navigator.serviceWorker!=null);a||ild(new lld(cD(YC(FK,1),cXe,21,0,[])),'Push Notification is not supported',m0e,null);return a}\nfunction vre(){var a,b;if(ure()){if(jLe($wnd.Notification.permission,'granted')){b=new $wnd.Object;b.body='I love GMD';b.icon='https://user.oc-static.com/upload/2017/05/03/14938342186053_01-duration-and-easing.png';a=new $wnd.Notification('GMD Says',b);l4c(a,vub(zre.prototype.Af,zre,[]));m4c(a,vub(Bre.prototype.Af,Bre,[]));n4c(a,vub(Dre.prototype.Af,Dre,[]));o4c(a,vub(Fre.prototype.Af,Fre,[]))}else{ild(new lld(cD(YC(FK,1),cXe,21,0,[])),'Permission Denied. Update it thru the browser setting',m0e,null)}}}\nfunction Hre(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,A;b=new Nic;_Ob(b,(c=new L5b,_Ob(c,(i=new dld,pod(i.b,'Will check if the Notification API is supported'),Fs(ho(i.a),(Nvb(),(new Bvb(Ovb(Vtf))).a)),xA(i,Vtf),i)),_Ob(c,(j=new Oye,rod(j,(k=new JLe,k.a+='PwaManager.isPwaSupported()',new vvb(k.a)).a),zo((twb(),j.tb),f7e,true),j)),zo(c.tb,s3e,true),c));_Ob(b,(d=new L5b,_Ob(d,(l=new dld,Fs(ho(l.a),(new Bvb(Ovb(Wtf))).a),xA(l,Wtf),l)),_Ob(d,(m=new dWb,kXb(m.k,Wtf),m.k.ob||_Ob(m,m.k),dPb(m,a.a),m)),_Ob(d,(n=new Oye,rod(n,(o=new JLe,o.a+='// Will return the following status (see next section) <br> Notification.getPermission();',new vvb(o.a)).a),zo(n.tb,f7e,true),n)),zo(d.tb,s3e,true),d));_Ob(b,(e=new L5b,_Ob(e,(p=new dld,Fs(ho(p.a),(new Bvb(Ovb(Xtf))).a),xA(p,Xtf),p)),_Ob(e,new FAb((q=new JLe,q.a+='<blockquote> <p><b>denied<\\/b> - The user refuses to have notifications displayed. <\\/p> <p><b>granted<\\/b> - The user accepts having notifications displayed. <\\/p> <p><b>default<\\/b> - The user choice is unknown and therefore the browser will act as if the value were denied. <\\/p> <\\/blockquote>',new vvb(q.a)).a)),zo(e.tb,s3e,true),e));_Ob(b,(f=new L5b,_Ob(f,(r=new dld,Fs(ho(r.a),(new Bvb(Ovb(Ytf))).a),xA(r,Ytf),r)),_Ob(f,(s=new dWb,kXb(s.k,Ytf),s.k.ob||_Ob(s,s.k),dPb(s,a.b),s)),zo(f.tb,s3e,true),f));_Ob(b,(g=new L5b,_Ob(g,(t=new dld,Fs(ho(t.a),(new Bvb(Ovb(Ztf))).a),xA(t,Ztf),t)),_Ob(g,new FAb((u=new JLe,u.a+='<blockquote> <p><b>actions<\\/b> - The actions array of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>badge<\\/b> - The URL of the image used to represent the notification when there is not enough space to display the notification itself.<\\/p> <p><b>body<\\/b> - The body string of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>data<\\/b> - Returns a structured clone of the notification\\u2019s data.<\\/p> <p><b>dir<\\/b> - The text direction of the notification as specified in the options parameter of the constructor.<\\/p> <p><b>lang<\\/b> - The language code of the notification as specified in the options parameter of the constructor. <\\/p> <p><b>tag<\\/b> - The ID of the notification (if any) as specified in the options parameter of the constructor. <\\/p> <p><b>icon<\\/b> - The URL of the image used as an icon of the notification as specified in the options parameter of the constructor. <\\/p> <p><b>image<\\/b> - The URL of an image to be displayed as part of the notification, as specified in the options parameter of the constructor. <\\/p> <p><b>renotify<\\/b> - Specifies whether the user should be notified after a new notification replaces an old one. <\\/p> <p><b>requireInteraction<\\/b> - A Boolean indicating that a notification should remain active until the user clicks or dismisses it, rather than closing automatically. <\\/p> <p><b>silent<\\/b> - Specifies whether the notification should be silent, i.e. no sounds or vibrations should be issued, regardless of the device settings. <\\/p> <p><b>timestamp<\\/b> - Specifies the time at which a notification is created or applicable (past, present, or future). <\\/p> <p><b>title<\\/b> - The title of the notification as specified in the first parameter of the constructor. <\\/p> <p><b>vibrate<\\/b> - Specifies a vibration pattern for devices with vibration hardware to emit. <\\/p> <\\/blockquote>',new vvb(u.a)).a)),zo(g.tb,s3e,true),g));_Ob(b,(h=new L5b,_Ob(h,(v=new dld,Fs(ho(v.a),(new Bvb(Ovb($tf))).a),xA(v,$tf),v)),_Ob(h,(w=new Oye,rod(w,(A=new JLe,A.a+='Notification notification = new Notification(\"GMD Says\", options); <br> // Listen to any Notification events <br> // A handler for the click event. It is triggered each time the user clicks on the notification. <br> notification.setOnclick(param1 -&gt; MaterialToast.fireToast(\"Clicked\")); <br> // A handler for the close event. It is triggered when the user closes the notification. <br> notification.setOnclose(param1 -&gt; MaterialToast.fireToast(\"Closed\")); <br> // A handler for the error event. It is triggered each time the notification encounters an error. <br> notification.setOnerror(param1 -&gt; MaterialToast.fireToast(\"Error\")); <br> // A handler for the show event. It is triggered when the notification is displayed. <br> notification.setOnshow(param1 -&gt; MaterialToast.fireToast(\"Shown\")); <br>',new vvb(A.a)).a),zo(w.tb,f7e,true),w)),zo(h.tb,s3e,true),h));return b}\nvar Vtf='isSupported()',Wtf='Request Permission',Xtf='Permission Status',Ytf='Show Notification',Ztf='Notification Options',$tf='Notification Handlers';tub(1042,56,q_e,nre);_.De=function ore(){nye();DIb(this,new pye(Nff,'Push messaging provides a simple and effective way to re-engage with your users','pwa/notification/NotificationView',''))};var umb=PJe(Uff,'NotificationPresenter',1042);tub(1641,65,r_e,wre);var ymb=PJe(Uff,'NotificationView',1641);tub(3114,$wnd.Function,{},xre);_.Af=function yre(a){mld('Status: '+UD(a))};tub(3110,$wnd.Function,{},zre);_.Af=function Are(a){ild(new lld(cD(YC(FK,1),cXe,21,0,[])),'Clicked',m0e,null)};tub(3111,$wnd.Function,{},Bre);_.Af=function Cre(a){ild(new lld(cD(YC(FK,1),cXe,21,0,[])),wjf,m0e,null)};tub(3112,$wnd.Function,{},Dre);_.Af=function Ere(a){ild(new lld(cD(YC(FK,1),cXe,21,0,[])),Uof,m0e,null)};tub(3113,$wnd.Function,{},Fre);_.Af=function Gre(a){ild(new lld(cD(YC(FK,1),cXe,21,0,[])),'Shown',m0e,null)};tub(2185,1,{},Ire);var xmb=PJe(Uff,'NotificationView_BinderImpl/Widgets',2185);tub(2186,1,__e,Jre);_.nd=function Kre(a){ure()&&$wnd.Notification.requestPermission(vub(xre.prototype.Af,xre,[]))};var vmb=PJe(Uff,'NotificationView_BinderImpl/Widgets/1',2186);tub(2187,1,__e,Lre);_.nd=function Mre(a){vre()};var wmb=PJe(Uff,'NotificationView_BinderImpl/Widgets/2',2187);tub(927,1,x7e);_.Yc=function Vre(){VMb(this.b,Ore(this.a.a))};DWe(Iq)(54);\n//# sourceURL=gwtmaterialdemo-54.js\n")
