$wnd.gwtmaterialdemo.runAsyncCallback7("function Upd(){}\nfunction Wpd(){}\nfunction dub(){cub()}\nfunction cWb(a,b){a.o=b}\nfunction hWb(a){this.a=a}\nfunction jWb(a){this.a=a}\nfunction lWb(a){this.a=a}\nfunction $pd(a){this.a=a}\nfunction aqd(a){this.a=a}\nfunction Ktb(a){!!Atb&&rA(Atb,a)}\nfunction _Vb(a){dWb(a.k,a.o,a.i,a.f)}\nfunction aWb(a){dWb(a.k,a.o,a.i,a.f)}\nfunction Spd(a){cWb(a.b,ho(a.a));bWb(a.b)}\nfunction cub(){cub=Rqb;bub=new yy}\nfunction Ntb(){if(!Etb){Kub();Etb=true}}\nfunction $Vb(a){a.k.style[N_e]=O_e+a.e+' '+a.g}\nfunction eqd(a){var b;if(!a.d){b=new Tpd;a.d=b}return a.d}\nfunction Itb(a){Ltb();Ntb();return Gtb((cub(),cub(),bub),a)}\nfunction Lpd(a,b,c){PEb();mFb.call(this,a,b,c,(Zhd(),Xhd))}\nfunction Zpd(a){this.a=new $pd(this);this.b=new aqd(this);this.c=a}\nfunction dqd(a){var b,c;if(!a.c){c=new Lpd(aCb(WFb(a.a)),(b=eqd(a),b),cqd(a));HEb((ZFb(a.a),c),UHb(ZFb(a.a)));a.c=c}return a.c}\nfunction Kub(){var b=$wnd.onscroll;$wnd.onscroll=GDe(function(a){try{Etb&&Ktb((ft($doc),gt($doc),new dub))}finally{b&&b(a)}})}\nfunction eWb(a){if(a.a){a.k.style[iIe]=R_e+a.j+'ms '+a.b;a.k.style[jIe]=R_e+a.j+'ms '+a.b}else{a.k.style[iIe]='';a.k.style[jIe]=''}}\nfunction Tpd(){EFb.call(this);CFb(this,Ypd(new Zpd(this)));Shd(this.b);Fo(this.b,new Upd,Oz?Oz:(Oz=new yy));Fo(this.b,new Wpd,(!Tz&&(Tz=new yy),Tz))}\nfunction ZVb(a){$doc.documentElement.style[wGe]=a.p;(Qsb(),a.rb).style[AGe]=(Yu(),CEe);!a.W&&(a.W=new bVc(a));$Uc(a.W);if(a.c){Lo(a);a.c=false}Rz(a,a)}\nfunction fWb(){VMb.call(this,$doc.createElement(uGe),PC(JC(nob,1),PGe,2,6,['material-cutout']));this.d=(zpc(),$kc);this.i=10;this.n=0.8;this.a=true;this.b='ease';this.f=false;this.c=false;this.j=500;this.k=$doc.createElement(uGe);is((Qsb(),this.rb),this.k);this.rb.style[wGe]=(rw(),GFe);this.rb.style[AGe]=(Yu(),CEe)}\nfunction dWb(a,b,c,d){var e,f,g,h,i;h=Vs(it(b.ownerDocument),b)-(mLb==null&&(mLb=$wnd.$(WIe)),mLb).scrollTop();g=Us(it(b.ownerDocument),b);i=(b.offsetWidth||0)|0;f=(b.offsetHeight||0)|0;if(d){if(i!=f){e=i-f;if(i>f){f+=e;h-=e/2}else{e=-e;i+=e;g-=e/2}}}h-=c;g-=c;i+=c*2;f+=c*2;$wnd.$(a).css(yGe,h+MFe);$wnd.$(a).css(AFe,g+MFe);$wnd.$(a).css(zEe,i+MFe);$wnd.$(a).css(yEe,f+MFe)}\nfunction Os(a){var b=a.offsetLeft,c=a.offsetTop;var d=a.offsetWidth,e=a.offsetHeight;if(a.parentNode!=a.offsetParent){b-=a.parentNode.offsetLeft;c-=a.parentNode.offsetTop}var f=a.parentNode;while(f&&f.nodeType==1){b<f.scrollLeft&&(f.scrollLeft=b);b+d>f.scrollLeft+f.clientWidth&&(f.scrollLeft=b+d-f.clientWidth);c<f.scrollTop&&(f.scrollTop=c);c+e>f.scrollTop+f.clientHeight&&(f.scrollTop=c+e-f.clientHeight);var g=f.offsetLeft,h=f.offsetTop;if(f.parentNode!=f.offsetParent){g-=f.parentNode.offsetLeft;h-=f.parentNode.offsetTop}b+=g-f.scrollLeft;c+=h-f.scrollTop;f=f.parentNode}}\nfunction bWb(a){var b,c,d,e,f;c=(Qsb(),a.rb).style;c[zEe]=($w(),'100.0%');c[yEe]='100.0%';c[vGe]=(Gw(),KFe);c[yGe]=xGe;c[AFe]=xGe;c[BGe]='10000';a.k.className='material-cutout-focus';c=a.k.style;c[qKe]=\"''\";c[vGe]=JFe;c[BGe]='-1';if(!a.o){throw rqb(new _re('The target element should be set before calling open().'))}Os(a.o);a.g==null&&(d=new UMb($doc.createElement(uGe)),jMb(d,a.d),e=d.rb.style,e[vGe]=KFe,undefined,e[zEe]='1.0px',undefined,e[yEe]='1.0px',undefined,e[AFe]='-10.0px',undefined,e[yGe]='-10.0px',undefined,e[BGe]='-10000',undefined,f=fgc(a.d),a.n<1&&Mse(f.substr(0,4),'rgb(')&&(f=Rse(Rse(f,'rgb(','rgba('),')',', '+a.n+')')),a.g=f,undefined);b=$doc.documentElement.style;a.p=b[wGe];b[wGe]=GFe;a.e==null&&(a.e=(mLb==null&&(mLb=$wnd.$(WIe)),mLb).width()+300+MFe);eWb(a);if(a.a){a.k.style[N_e]='0px 0px 0px 0rem '+a.g;yr((rr(),qr),new hWb(a))}else{a.k.style[N_e]=O_e+a.e+' '+a.g}if(a.f){a.k.style[P_e]=TSe;a.k.style[Q_e]=TSe}else{a.k.style[P_e]='';a.k.style[Q_e]=''}dWb(a.k,a.o,a.i,a.f);iMb(a,Htb(new jWb(a)));iMb(a,Itb(new lWb(a)));a.rb.style[AGe]='';if(!a.qb){a.c=true;gvb((Lzb(),Pzb(null)),a)}Wz(a,a)}\nfunction Ypd(a){var b,c,d,e,f,g,h,i,j,k,l,m,n,o,p;b=new Ebc;pLb(b,(c=new Y_b,pLb(c,(e=new Qad,As(ho(e.a),(isb(),(new Yrb(jsb(kPe))).a)),jA(e,kPe),e)),pLb(c,(f=new Oie,ded(f,(g=new kte,g.a+='\\u2003&lt;!-- Addin Import --&gt;<br> xmlns:ma=\"urn:import:gwt.material.design.addins.client\"<br><br> &lt;!-- Addin Usage --&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;',new Srb(g.a)).a),yo((Qsb(),f.rb),lPe,true),f)),yo(c.rb,DLe,true),c));pLb(b,(d=new Y_b,pLb(d,(h=new Qad,bed(h.b,'Click the icon below to show a material cutout.'),As(ho(h.a),(new Yrb(jsb(T_e))).a),jA(h,T_e),h)),pLb(d,(i=new X4c,V4c(i,(zJc(),mEc)),tLb(i,a.a),a.c.a=i,i)),pLb(d,(j=new fWb,pLb(j,(k=new Qad,bed(k.b,'Description of your new Feature'),As(ho(k.a),(new Yrb(jsb(U_e))).a),jA(k,U_e),LMb(k,(zpc(),kpc)),k)),pLb(j,(l=new $Rb,jMb(l,kpc),gTb(l.j,EPe),l.j.mb||pLb(l,l.j),LMb(l,$kc),tLb(l,a.b),l)),KMb(j,(HLc(),DLc)),j.n=0.8,j.g=null,j.f=true,a.c.b=j,j)),pLb(d,(m=new Oie,ded(m,(n=new kte,n.a+='\\u2003&lt; -- Target Element --&gt;<br> &lt;m:MaterialIcon iconType=\"POLYMER\" ui:field=\"btnCutOut\"/&gt;<br> &lt;ma:cutout.MaterialCutOut ui:field=\"cutout\" backgroundColor=\"BLUE\" circle=\"true\" opacity=\"0.8\" textAlign=\"CENTER\"&gt;<br> \\u2003&lt;m:MaterialTitle title=\"New Feature\" description=\"Description of your new Feature\" textColor=\"WHITE\"/&gt;<br> \\u2003&lt;m:MaterialButton text=\"Close\" ui:field=\"btnCutOutClose\" textColor=\"BLUE\" backgroundColor=\"WHITE\"/&gt;<br> &lt;/ma:cutout.MaterialCutOut&gt;<br>',new Srb(n.a)).a),yo(m.rb,lPe,true),m)),pLb(d,(o=new Oie,ded(o,(p=new kte,p.a+='\\u2003@UiField MaterialCutOut cutout;<br><br>  &lt;-- Target Element --&gt;<br> @UiField MaterialIcon btnCutOut; <br><br>  @UiHandler(\"btnCutOut\")<br> void onCutOut(ClickEvent e){<br> \\u2003cutout.setTarget(btnCutOut);<br> \\u2003cutout.open();<br> }',new Srb(p.a)).a),yo(o.rb,rPe,true),o)),yo(d.rb,DLe,true),d));return b}\nvar N_e='boxShadow',O_e='0px 0px 0px ',P_e='WebkitBorderRadius',Q_e='borderRadius',R_e='box-shadow ',S_e='gwt.material.design.addins.client.cutout',T_e='Material Cut Out',U_e='New Feature';var Etb=false;Qqb(724,QFe,{},dub);_.dd=function eub(a){aWb(zD(a,2841).a)};_.ed=function fub(){return bub};var bub;var KI=vre(QDe,'Window/ScrollEvent',724);Qqb(2147,25,lIe,fWb);_.Ne=function gWb(a){this.d=a;this.g=null};_.a=false;_.c=false;_.f=false;_.i=0;_.j=0;_.n=0;var eN=vre(S_e,'MaterialCutOut',2147);Qqb(2148,1,{},hWb);_.Xc=function iWb(){$Vb(this.a)};var bN=vre(S_e,'MaterialCutOut/lambda$0$Type',2148);Qqb(2149,1,oHe,jWb);_.vd=function kWb(a){_Vb(this.a)};var cN=vre(S_e,'MaterialCutOut/lambda$1$Type',2149);Qqb(2150,1,{9:1,2841:1},lWb);var dN=vre(S_e,'MaterialCutOut/lambda$2$Type',2150);Qqb(917,54,PHe,Lpd);_.ze=function Mpd(){nie();WEb(this,new pie('CutOuts','The MaterialCutOut is an excellent component to show users about new features and important components (buttons, labels and so) on the UI.','addins/cutouts/CutOutsView',''))};var L_=vre(FQe,'CutOutsPresenter',917);Qqb(1269,62,QHe,Tpd);var R_=vre(FQe,'CutOutsView',1269);Qqb(1270,1,uHe,Upd);_.td=function Vpd(a){Vad(new Yad(PC(JC(dK,1),fEe,21,0,[])),'Close Event Fired',EIe,null)};var M_=vre(FQe,'CutOutsView/lambda$0$Type',1270);Qqb(1271,1,iMe,Wpd);_.ud=function Xpd(a){Vad(new Yad(PC(JC(dK,1),fEe,21,0,[])),'Open Event Fired',EIe,null)};var N_=vre(FQe,'CutOutsView/lambda$1$Type',1271);Qqb(1752,1,{},Zpd);var Q_=vre(FQe,'CutOutsView_BinderImpl/Widgets',1752);Qqb(1753,1,tIe,$pd);_.kd=function _pd(a){Spd(this.a.c)};var O_=vre(FQe,'CutOutsView_BinderImpl/Widgets/1',1753);Qqb(1754,1,tIe,aqd);_.kd=function bqd(a){ZVb(this.a.c.b)};var P_=vre(FQe,'CutOutsView_BinderImpl/Widgets/2',1754);Qqb(760,1,HPe);_.Vc=function kqd(){jJb(this.b,dqd(this.a.a))};GDe(Eq)(7);\n//# sourceURL=gwtmaterialdemo-7.js\n")