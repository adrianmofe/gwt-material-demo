$wnd.gwtmaterialdemo.runAsyncCallback8("function $addCloseHandler(this$static){\n  return $addHandler(this$static, new MaterialOverlay$1(this$static), TYPE_14?TYPE_14:(TYPE_14 = new GwtEvent$Type));\n}\n\nfunction $addOpenHandler(this$static){\n  return $addHandler(this$static, new MaterialOverlay$2(this$static), (!TYPE_15 && (TYPE_15 = new GwtEvent$Type) , TYPE_15));\n}\n\nfunction $close_0(this$static){\n  $wnd.$(($clinit_DOM() , this$static.element_0)).parents('overlay-panel').length == 1?(body_1 == null && (body_1 = $wnd.$('body')) , body_1).attr('style', 'overflow: hidden !important'):(body_1 == null && (body_1 = $wnd.$('body')) , body_1).attr('style', 'overflow: auto !important');\n  !!this$static.sourceElement && $reverseAnimate(this$static.animator);\n  fire_1(this$static, this$static);\n}\n\nfunction $open_0(this$static, sourceElement){\n  this$static.sourceElement = sourceElement;\n  $wnd.$('body').attr('style', 'overflow: hidden !important');\n  $setSourceElement(this$static.animator, sourceElement);\n  $setTargetElement(this$static.animator, ($clinit_DOM() , this$static.element_0));\n  $animate(this$static.animator);\n  fire_2(this$static, this$static);\n}\n\nfunction MaterialOverlay$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1867, 1, $intern_48, MaterialOverlay$1);\n_.onClose = function onClose_0(closeEvent){\n  !$getElement(castTo($getEnabledMixin(this.this$01).uiObject, 21)).hasAttribute('disabled') && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Overlay Closed', $intern_67, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$1_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/1', 1867);\nfunction MaterialOverlay$2(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1868, 1, $intern_95, MaterialOverlay$2);\n_.onOpen = function onOpen(openEvent){\n  !$getElement(castTo($getEnabledMixin(this.this$01).uiObject, 21)).hasAttribute('disabled') && $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_3, 21, 0, [])), 'Overlay Opened', $intern_67, null);\n}\n;\nvar Lgwt_material_design_addins_client_overlay_MaterialOverlay$2_2_classLit = createForClass('gwt.material.design.addins.client.overlay', 'MaterialOverlay/2', 1868);\nfunction OverlayPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(831, 60, $intern_54, OverlayPresenter);\n_.onReveal = function onReveal_15(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Overlay', 'Provides a meaningful transition of source widget to popup or overlay panel.', 'addins/scrollfire/OverlayView', ''));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayPresenter', 831);\nfunction $lambda$0_42(this$static){\n  $open_0(this$static.overlay, $getElement(this$static.btnOpenOverlay));\n}\n\nfunction $lambda$10_3(this$static){\n  $open_0(this$static.overlayChild2, $getElement(this$static.btnOpenChild2));\n}\n\nfunction $lambda$4_4(this$static){\n  $open_0(this$static.overlayEvents, $getElement(this$static.btnOpenOverlayEvents));\n}\n\nfunction $lambda$6_6(this$static){\n  $open_0(this$static.overlayParent, $getElement(this$static.btnOpenParent));\n}\n\nfunction $lambda$7_5(this$static){\n  $open_0(this$static.overlayChild, $getElement(this$static.btnOpenChild));\n}\n\nfunction OverlayView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_8(new OverlayView_BinderImpl$Widgets(this)));\n  register_0(this.overlay, 2);\n  register_0(this.btnCloseOverlay, 1);\n  register_0(this.overlayEvents, 2);\n  register_0(this.btnCloseOverlayEvents, 1);\n  $addClickHandler(this.btnOpenOverlay, new OverlayView$lambda$0$Type(this));\n  $addClickHandler(this.btnCloseOverlay, new OverlayView$lambda$1$Type(this));\n  $addOpenHandler(this.overlayEvents);\n  $addCloseHandler(this.overlayEvents);\n  $addClickHandler(this.btnOpenOverlayEvents, new OverlayView$lambda$4$Type(this));\n  $addClickHandler(this.btnCloseOverlayEvents, new OverlayView$lambda$5$Type(this));\n  $addClickHandler(this.btnOpenParent, new OverlayView$lambda$6$Type(this));\n  $addClickHandler(this.btnOpenChild, new OverlayView$lambda$7$Type(this));\n  $addClickHandler(this.btnCloseParent, new OverlayView$lambda$8$Type(this));\n  $addClickHandler(this.btnCloseChild, new OverlayView$lambda$9$Type(this));\n  $addClickHandler(this.btnOpenChild2, new OverlayView$lambda$10$Type(this));\n  $addClickHandler(this.btnCloseChild2, new OverlayView$lambda$11$Type(this));\n}\n\ndefineClass(1125, 67, $intern_55, OverlayView);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView', 1125);\nfunction OverlayView$lambda$0$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1126, 1, $intern_64, OverlayView$lambda$0$Type);\n_.onClick = function onClick_65(arg0){\n  $lambda$0_42(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$0$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$0$Type', 1126);\nfunction OverlayView$lambda$1$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1127, 1, $intern_64, OverlayView$lambda$1$Type);\n_.onClick = function onClick_66(arg0){\n  $close_0(this.$$outer_0.overlay);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$1$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$1$Type', 1127);\nfunction OverlayView$lambda$10$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1134, 1, $intern_64, OverlayView$lambda$10$Type);\n_.onClick = function onClick_67(arg0){\n  $lambda$10_3(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$10$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$10$Type', 1134);\nfunction OverlayView$lambda$11$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1135, 1, $intern_64, OverlayView$lambda$11$Type);\n_.onClick = function onClick_68(arg0){\n  $close_0(this.$$outer_0.overlayChild2);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$11$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$11$Type', 1135);\nfunction OverlayView$lambda$4$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1128, 1, $intern_64, OverlayView$lambda$4$Type);\n_.onClick = function onClick_69(arg0){\n  $lambda$4_4(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$4$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$4$Type', 1128);\nfunction OverlayView$lambda$5$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1129, 1, $intern_64, OverlayView$lambda$5$Type);\n_.onClick = function onClick_70(arg0){\n  $close_0(this.$$outer_0.overlayEvents);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$5$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$5$Type', 1129);\nfunction OverlayView$lambda$6$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1130, 1, $intern_64, OverlayView$lambda$6$Type);\n_.onClick = function onClick_71(arg0){\n  $lambda$6_6(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$6$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$6$Type', 1130);\nfunction OverlayView$lambda$7$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1131, 1, $intern_64, OverlayView$lambda$7$Type);\n_.onClick = function onClick_72(arg0){\n  $lambda$7_5(this.$$outer_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$7$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$7$Type', 1131);\nfunction OverlayView$lambda$8$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1132, 1, $intern_64, OverlayView$lambda$8$Type);\n_.onClick = function onClick_73(arg0){\n  $close_0(this.$$outer_0.overlayParent);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$8$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$8$Type', 1132);\nfunction OverlayView$lambda$9$Type($$outer_0){\n  this.$$outer_0 = $$outer_0;\n}\n\ndefineClass(1133, 1, $intern_64, OverlayView$lambda$9$Type);\n_.onClick = function onClick_74(arg0){\n  $close_0(this.$$outer_0.overlayChild);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView$lambda$9$Type_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView/lambda$9$Type', 1133);\nfunction $build_f_HTMLPanel1_8(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow8, f_MaterialRow13, f_MaterialTitle3, overlay, f_MaterialLabel4, f_MaterialLabel5, btnCloseOverlay, btnOpenOverlay, f_PrettyPre6, sb, f_PrettyPre7, sb_0, f_MaterialTitle9, overlayEvents, f_MaterialLabel10, f_MaterialLabel11, btnCloseOverlayEvents, btnOpenOverlayEvents, f_PrettyPre12, sb_1, f_MaterialTitle14, overlayParent, f_MaterialLabel15, f_MaterialLabel16, btnOpenChild, btnCloseParent, btnOpenParent, overlayChild, f_MaterialLabel17, f_MaterialLabel18, btnOpenChild2, btnCloseChild, overlayChild2, f_PrettyPre21, sb_2, f_MaterialLabel19, f_MaterialLabel20, btnCloseChild2;\n  f_HTMLPanel1 = new HTMLPanel($html5_1(this$static.domId0, this$static.domId1, this$static.domId2).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Requires a source component when opening the overlay to transform it to overlay panel.') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Basic'))).html_0)) , fire_5(f_MaterialTitle3, 'Basic') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (overlay = new MaterialOverlay , $add_9(overlay, (f_MaterialLabel4 = new MaterialLabel , $setTextAlign(f_MaterialLabel4, ($clinit_TextAlign() , CENTER_4)) , $setFontSize_1((!f_MaterialLabel4.fontSizeMixin && (f_MaterialLabel4.fontSizeMixin = new FontSizeMixin(f_MaterialLabel4)) , f_MaterialLabel4.fontSizeMixin), '2em') , $setText_5((!f_MaterialLabel4.textMixin && (f_MaterialLabel4.textMixin = new TextMixin(f_MaterialLabel4)) , f_MaterialLabel4.textMixin), 'This is an overlay') , fire_5(f_MaterialLabel4, 'This is an overlay') , f_MaterialLabel4.element_0.style['marginTop'] = ($clinit_Style$Unit() , '120.0px') , $setFontWeight(f_MaterialLabel4, ($clinit_Style$FontWeight() , LIGHTER)) , f_MaterialLabel4)) , $add_9(overlay, (f_MaterialLabel5 = new MaterialLabel , $setTextAlign(f_MaterialLabel5, CENTER_4) , f_MaterialLabel5.element_0.style['marginBottom'] = '40.0px' , $setText_5((!f_MaterialLabel5.textMixin && (f_MaterialLabel5.textMixin = new TextMixin(f_MaterialLabel5)) , f_MaterialLabel5.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel5, 'Some content goes here') , f_MaterialLabel5)) , $add_9(overlay, (btnCloseOverlay = new MaterialButton , $setText_6(btnCloseOverlay.span_1, 'Close Overlay') , btnCloseOverlay.span_1.attached || $add_9(btnCloseOverlay, btnCloseOverlay.span_1) , this$static.owner.btnCloseOverlay = btnCloseOverlay , btnCloseOverlay)) , $setBackgroundColor(overlay, ($clinit_Color() , BLUE)) , $setTextAlign(overlay, CENTER_4) , $setTextColor(overlay, WHITE) , this$static.owner.overlay = overlay , overlay)) , $add_9(f_MaterialRow2, (btnOpenOverlay = new MaterialButton , $setText_6(btnOpenOverlay.span_1, 'Open Overlay') , btnOpenOverlay.span_1.attached || $add_9(btnOpenOverlay, btnOpenOverlay.span_1) , this$static.owner.btnOpenOverlay = btnOpenOverlay , btnOpenOverlay)) , $add_9(f_MaterialRow2, (f_PrettyPre6 = new PrettyPre , $setHTML_0(f_PrettyPre6, (sb = new StringBuilder , sb.string += '\\u2003&lt;ma:overlay.MaterialOverlay ui:field=\"overlay\" textAlign=\"CENTER\" textColor=\"WHITE\"&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"This is an overlay\" marginTop=\"120\" fontWeight=\"LIGHTER\" fontSize=\"2em\" /&gt;<br> \\u2003&lt;m:MaterialLabel textAlign=\"CENTER\" text=\"Some content goes here\" marginBottom=\"40\" /&gt;<br> \\u2003&lt;m:MaterialButton ui:field=\"btnCloseOverlay\" text=\"Close Overlay\" /&gt;<br> &lt;/ma:overlay.MaterialOverlay&gt;<br><br> &lt;m:MaterialButton ui:field=\"btnOpenOverlay\" text=\"Open Overlay\" /&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre6.element_0, 'lang-xml', true) , f_PrettyPre6)) , $add_9(f_MaterialRow2, (f_PrettyPre7 = new PrettyPre , $setHTML_0(f_PrettyPre7, (sb_0 = new StringBuilder , sb_0.string += '\\u2003btnOpenOverlay.addClickHandler(clickEvent -&gt; overlay.open(btnOpenOverlay));<br> btnCloseOverlay.addClickHandler(e -&gt; overlay.close());' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre7.element_0, 'lang-java', true) , f_PrettyPre7)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow8 = new MaterialRow , $add_9(f_MaterialRow8, (f_MaterialTitle9 = new MaterialTitle , $setText_12(f_MaterialTitle9.paragraph, 'We have provided open and close events') , $setInnerHTML($getElement(f_MaterialTitle9.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , fire_5(f_MaterialTitle9, 'Events') , f_MaterialTitle9)) , $add_9(f_MaterialRow8, (overlayEvents = new MaterialOverlay , $add_9(overlayEvents, (f_MaterialLabel10 = new MaterialLabel , $setTextAlign(f_MaterialLabel10, CENTER_4) , $setFontSize_1((!f_MaterialLabel10.fontSizeMixin && (f_MaterialLabel10.fontSizeMixin = new FontSizeMixin(f_MaterialLabel10)) , f_MaterialLabel10.fontSizeMixin), '2em') , $setText_5((!f_MaterialLabel10.textMixin && (f_MaterialLabel10.textMixin = new TextMixin(f_MaterialLabel10)) , f_MaterialLabel10.textMixin), 'This is an overlay') , fire_5(f_MaterialLabel10, 'This is an overlay') , f_MaterialLabel10.element_0.style['marginTop'] = '120.0px' , $setFontWeight(f_MaterialLabel10, LIGHTER) , f_MaterialLabel10)) , $add_9(overlayEvents, (f_MaterialLabel11 = new MaterialLabel , $setTextAlign(f_MaterialLabel11, CENTER_4) , f_MaterialLabel11.element_0.style['marginBottom'] = '40.0px' , $setText_5((!f_MaterialLabel11.textMixin && (f_MaterialLabel11.textMixin = new TextMixin(f_MaterialLabel11)) , f_MaterialLabel11.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel11, 'Some content goes here') , f_MaterialLabel11)) , $add_9(overlayEvents, (btnCloseOverlayEvents = new MaterialButton , $setText_6(btnCloseOverlayEvents.span_1, 'Close Overlay') , btnCloseOverlayEvents.span_1.attached || $add_9(btnCloseOverlayEvents, btnCloseOverlayEvents.span_1) , this$static.owner.btnCloseOverlayEvents = btnCloseOverlayEvents , btnCloseOverlayEvents)) , $setBackgroundColor(overlayEvents, BLUE) , $setTextAlign(overlayEvents, CENTER_4) , $setTextColor(overlayEvents, WHITE) , this$static.owner.overlayEvents = overlayEvents , overlayEvents)) , $add_9(f_MaterialRow8, (btnOpenOverlayEvents = new MaterialButton , $setText_6(btnOpenOverlayEvents.span_1, 'Open Overlay') , btnOpenOverlayEvents.span_1.attached || $add_9(btnOpenOverlayEvents, btnOpenOverlayEvents.span_1) , this$static.owner.btnOpenOverlayEvents = btnOpenOverlayEvents , btnOpenOverlayEvents)) , $add_9(f_MaterialRow8, (f_PrettyPre12 = new PrettyPre , $setHTML_0(f_PrettyPre12, (sb_1 = new StringBuilder , sb_1.string += '\\u2003overlayEvents.addOpenHandler(openEvent -&gt; MaterialToast.fireToast(\"Overlay Opened\"));<br> overla yEvents.addCloseHandler(closeEvent -&gt; MaterialToast.fireToast(\"Overlay Closed\"));' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre12.element_0, 'lang-java', true) , f_PrettyPre12)) , setStyleName(f_MaterialRow8.element_0, 'code', true) , f_MaterialRow8), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow13 = new MaterialRow , $add_9(f_MaterialRow13, (f_MaterialTitle14 = new MaterialTitle , $setText_12(f_MaterialTitle14.paragraph, 'You can provide multiple child overlay in order to create a modal-like structure.') , $setInnerHTML($getElement(f_MaterialTitle14.header), (new SafeHtmlString(htmlEscape('Nested Overlays'))).html_0) , fire_5(f_MaterialTitle14, 'Nested Overlays') , f_MaterialTitle14)) , $add_9(f_MaterialRow13, (overlayParent = new MaterialOverlay , $add_9(overlayParent, (f_MaterialLabel15 = new MaterialLabel , $setTextAlign(f_MaterialLabel15, CENTER_4) , $setFontSize_1((!f_MaterialLabel15.fontSizeMixin && (f_MaterialLabel15.fontSizeMixin = new FontSizeMixin(f_MaterialLabel15)) , f_MaterialLabel15.fontSizeMixin), '2em') , $setText_5((!f_MaterialLabel15.textMixin && (f_MaterialLabel15.textMixin = new TextMixin(f_MaterialLabel15)) , f_MaterialLabel15.textMixin), 'This is an overlay') , fire_5(f_MaterialLabel15, 'This is an overlay') , f_MaterialLabel15.element_0.style['marginTop'] = '120.0px' , $setFontWeight(f_MaterialLabel15, LIGHTER) , f_MaterialLabel15)) , $add_9(overlayParent, (f_MaterialLabel16 = new MaterialLabel , $setTextAlign(f_MaterialLabel16, CENTER_4) , f_MaterialLabel16.element_0.style['marginBottom'] = '40.0px' , $setText_5((!f_MaterialLabel16.textMixin && (f_MaterialLabel16.textMixin = new TextMixin(f_MaterialLabel16)) , f_MaterialLabel16.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel16, 'Some content goes here') , f_MaterialLabel16)) , $add_9(overlayParent, (btnOpenChild = new MaterialButton , $setText_6(btnOpenChild.span_1, 'Open Overlay') , btnOpenChild.span_1.attached || $add_9(btnOpenChild, btnOpenChild.span_1) , this$static.owner.btnOpenChild = btnOpenChild , btnOpenChild)) , $add_9(overlayParent, (btnCloseParent = new MaterialButton , $setText_6(btnCloseParent.span_1, 'Close Overlay') , btnCloseParent.span_1.attached || $add_9(btnCloseParent, btnCloseParent.span_1) , this$static.owner.btnCloseParent = btnCloseParent , btnCloseParent)) , $setBackgroundColor(overlayParent, BLUE) , $setOverflow(overlayParent, ($clinit_Style$Overflow() , AUTO_0)) , overlayParent.element_0.style['zIndex'] = '999' , $setTextAlign(overlayParent, CENTER_4) , $setTextColor(overlayParent, WHITE) , this$static.owner.overlayParent = overlayParent , overlayParent)) , $add_9(f_MaterialRow13, (btnOpenParent = new MaterialButton , $setText_6(btnOpenParent.span_1, 'Open Overlay') , btnOpenParent.span_1.attached || $add_9(btnOpenParent, btnOpenParent.span_1) , this$static.owner.btnOpenParent = btnOpenParent , btnOpenParent)) , $add_9(f_MaterialRow13, (overlayChild = new MaterialOverlay , $add_9(overlayChild, (f_MaterialLabel17 = new MaterialLabel , $setTextAlign(f_MaterialLabel17, CENTER_4) , $setFontSize_1((!f_MaterialLabel17.fontSizeMixin && (f_MaterialLabel17.fontSizeMixin = new FontSizeMixin(f_MaterialLabel17)) , f_MaterialLabel17.fontSizeMixin), '2em') , $setText_5((!f_MaterialLabel17.textMixin && (f_MaterialLabel17.textMixin = new TextMixin(f_MaterialLabel17)) , f_MaterialLabel17.textMixin), 'This is a child overlay') , fire_5(f_MaterialLabel17, 'This is a child overlay') , f_MaterialLabel17.element_0.style['marginTop'] = '120.0px' , $setFontWeight(f_MaterialLabel17, LIGHTER) , f_MaterialLabel17)) , $add_9(overlayChild, (f_MaterialLabel18 = new MaterialLabel , $setTextAlign(f_MaterialLabel18, CENTER_4) , f_MaterialLabel18.element_0.style['marginBottom'] = '40.0px' , $setText_5((!f_MaterialLabel18.textMixin && (f_MaterialLabel18.textMixin = new TextMixin(f_MaterialLabel18)) , f_MaterialLabel18.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel18, 'Some content goes here') , f_MaterialLabel18)) , $add_9(overlayChild, (btnOpenChild2 = new MaterialButton , $setBackgroundColor(btnOpenChild2, INDIGO_ACCENT_1) , $setText_6(btnOpenChild2.span_1, 'Open Child') , btnOpenChild2.span_1.attached || $add_9(btnOpenChild2, btnOpenChild2.span_1) , this$static.owner.btnOpenChild2 = btnOpenChild2 , btnOpenChild2)) , $add_9(overlayChild, (btnCloseChild = new MaterialButton , $setBackgroundColor(btnCloseChild, INDIGO_ACCENT_1) , $setText_6(btnCloseChild.span_1, 'Close Overlay') , btnCloseChild.span_1.attached || $add_9(btnCloseChild, btnCloseChild.span_1) , this$static.owner.btnCloseChild = btnCloseChild , btnCloseChild)) , $add_9(overlayChild, (overlayChild2 = new MaterialOverlay , $add_9(overlayChild2, (f_MaterialLabel19 = new MaterialLabel , $setTextAlign(f_MaterialLabel19, CENTER_4) , $setFontSize_1((!f_MaterialLabel19.fontSizeMixin && (f_MaterialLabel19.fontSizeMixin = new FontSizeMixin(f_MaterialLabel19)) , f_MaterialLabel19.fontSizeMixin), '2em') , $setText_5((!f_MaterialLabel19.textMixin && (f_MaterialLabel19.textMixin = new TextMixin(f_MaterialLabel19)) , f_MaterialLabel19.textMixin), 'This is a Second child overlay') , fire_5(f_MaterialLabel19, 'This is a Second child overlay') , f_MaterialLabel19.element_0.style['marginTop'] = '120.0px' , $setFontWeight(f_MaterialLabel19, LIGHTER) , f_MaterialLabel19)) , $add_9(overlayChild2, (f_MaterialLabel20 = new MaterialLabel , $setTextAlign(f_MaterialLabel20, CENTER_4) , f_MaterialLabel20.element_0.style['marginBottom'] = '40.0px' , $setText_5((!f_MaterialLabel20.textMixin && (f_MaterialLabel20.textMixin = new TextMixin(f_MaterialLabel20)) , f_MaterialLabel20.textMixin), 'Some content goes here') , fire_5(f_MaterialLabel20, 'Some content goes here') , f_MaterialLabel20)) , $add_9(overlayChild2, (btnCloseChild2 = new MaterialButton , $setBackgroundColor(btnCloseChild2, PINK_ACCENT_1) , $setText_6(btnCloseChild2.span_1, 'Close Overlay') , btnCloseChild2.span_1.attached || $add_9(btnCloseChild2, btnCloseChild2.span_1) , this$static.owner.btnCloseChild2 = btnCloseChild2 , btnCloseChild2)) , $setBackgroundColor(overlayChild2, PINK) , $setOverflow(overlayChild2, AUTO_0) , overlayChild2.element_0.style['zIndex'] = '999' , $setTextAlign(overlayChild2, CENTER_4) , $setTextColor(overlayChild2, WHITE) , overlayChild2.animator.options_0.relativeToWindow = true , this$static.owner.overlayChild2 = overlayChild2 , overlayChild2)) , $setBackgroundColor(overlayChild, INDIGO) , $setOverflow(overlayChild, AUTO_0) , overlayChild.element_0.style['zIndex'] = '999' , $setTextAlign(overlayChild, CENTER_4) , $setTextColor(overlayChild, WHITE) , overlayChild.animator.options_0.relativeToWindow = true , this$static.owner.overlayChild = overlayChild , overlayChild)) , $add_9(f_MaterialRow13, (f_PrettyPre21 = new PrettyPre , $setHTML_0(f_PrettyPre21, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;!-- Parent --&gt;<br> &lt;ma:overlay.MaterialOverlay ui:field=\"parent\"&gt;<br><br> \\u2003&lt;!-- Child 1 --&gt;<br> \\u2003&lt;ma:overlay.MaterialOverlay ui:field=\"child1\"&gt;<br><br> \\u2003\\u2003&lt;!-- Child 2 --&gt;<br> \\u2003\\u2003&lt;ma:overlay.MaterialOverlay ui:field=\"child2\"/&gt;<br> \\u2003&lt;/ma:overlay.MaterialOverlay&gt;<br> &lt;/ma:overlay.MaterialOverlay&gt;' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre21.element_0, 'lang-java', true) , f_PrettyPre21)) , setStyleName(f_MaterialRow13.element_0, 'code', true) , f_MaterialRow13), $get_0(this$static.domId2Element));\n  return f_HTMLPanel1;\n}\n\nfunction OverlayView_BinderImpl$Widgets(owner){\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n}\n\ndefineClass(1517, 1, {}, OverlayView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_overlay_OverlayView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.overlay', 'OverlayView_BinderImpl/Widgets', 1517);\nfunction $html5_1(arg0, arg1, arg2){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_1(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_1(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span> <span id='\";\n  $append_1(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$) {\n    result0 = new OverlayPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$) {\n    result = new OverlayView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayView$_annotation$$none$$;\n}\n\ndefineClass(707, 1, $intern_103);\n_.onSuccess_0 = function onSuccess_9(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$overlay$OverlayPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(8);\n\n//# sourceURL=gwtmaterialdemo-8.js\n")
