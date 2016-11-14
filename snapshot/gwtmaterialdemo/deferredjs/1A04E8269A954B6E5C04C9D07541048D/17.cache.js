$wnd.gwtmaterialdemo.runAsyncCallback17("function ChipsPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(830, 59, $intern_57, ChipsPresenter);\n_.onReveal = function onReveal_36(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Chips', \"Chips represent complex entities in small blocks, such as a contact. They can contain a photo, short title string, and brief information. Chips are manipulated through drag-and-drop. Touching them invokes the full view in a card or full screen view or invokes a menu of options related to that chip's entity.\", 'components/chips/ChipsView'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsPresenter', 830);\nfunction ChipsView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_HTMLPanel1_20(new ChipsView_BinderImpl$Widgets(this)));\n  $addClickHandler(this.chip.icon_0, new ChipsView$1(this));\n}\n\ndefineClass(1101, 62, $intern_58, ChipsView);\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView', 1101);\nfunction ChipsView$1(this$0){\n  this.this$01 = this$0;\n}\n\ndefineClass(1102, 1, $intern_67, ChipsView$1);\n_.onClick = function onClick_117(event_0){\n  fireToast($getElement(this.this$01.chip.span_0).textContent);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView/1', 1102);\nfunction $build_f_HTMLPanel1_20(this$static){\n  var __attachRecord__, f_HTMLPanel1, f_MaterialRow2, f_MaterialRow11, f_MaterialRow19, f_MaterialRow26, f_MaterialRow33, f_MaterialTitle3, f_MaterialRow4, f_MaterialChip5, f_MaterialChip6, f_MaterialChip7, f_MaterialChip8, f_MaterialChip9, f_PrettyPre10, sb, f_MaterialTitle12, f_MaterialRow13, f_MaterialChip14, f_MaterialChip15, f_MaterialChip16, f_MaterialChip17, f_PrettyPre18, sb_0, f_MaterialTitle20, f_MaterialRow21, f_MaterialChip22, f_MaterialChip23, f_MaterialChip24, f_PrettyPre25, sb_1, f_MaterialTitle27, f_MaterialRow28, f_MaterialChip29, f_MaterialChip30, f_MaterialChip31, f_PrettyPre32, sb_2, f_MaterialTitle34, chip, chipClick, f_PrettyPre35, sb_3, f_PrettyPre36, sb_4;\n  f_HTMLPanel1 = new HTMLPanel($html7_0(this$static.domId0, this$static.domId1, this$static.domId2, this$static.domId3, this$static.domId4).html_0);\n  __attachRecord__ = attachToDom(($clinit_DOM() , f_HTMLPanel1.element_0));\n  $get_0(this$static.domId0Element);\n  $get_0(this$static.domId1Element);\n  $get_0(this$static.domId2Element);\n  $get_0(this$static.domId3Element);\n  $get_0(this$static.domId4Element);\n  __attachRecord__.origParent?$insertBefore(__attachRecord__.origParent, __attachRecord__.element, __attachRecord__.origSibling):orphan(__attachRecord__.element);\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow2 = new MaterialRow , $add_14(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'If you want just text only chip, you can use this for autocomplete textbox and search capability') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Simple Chip'))).html_0)) , f_MaterialTitle3)) , $add_14(f_MaterialRow2, (f_MaterialRow4 = new MaterialRow , $add_14(f_MaterialRow4, (f_MaterialChip5 = new MaterialChip , $setIconType_1(f_MaterialChip5, ($clinit_IconType() , CLOSE)) , $setText_6(f_MaterialChip5.span_0, 'Default') , $add_14(f_MaterialChip5, f_MaterialChip5.span_0) , f_MaterialChip5)) , $add_14(f_MaterialRow4, (f_MaterialChip6 = new MaterialChip , $setBackgroundColor(f_MaterialChip6, ($clinit_Color() , RED)) , $setIconType_1(f_MaterialChip6, CLOSE) , $setText_6(f_MaterialChip6.span_0, 'Apple') , $add_14(f_MaterialChip6, f_MaterialChip6.span_0) , $setTextColor(f_MaterialChip6, WHITE) , f_MaterialChip6)) , $add_14(f_MaterialRow4, (f_MaterialChip7 = new MaterialChip , $setBackgroundColor(f_MaterialChip7, ORANGE) , $setIconType_1(f_MaterialChip7, CLOSE) , $setText_6(f_MaterialChip7.span_0, 'ORANGE') , $add_14(f_MaterialChip7, f_MaterialChip7.span_0) , $setTextColor(f_MaterialChip7, WHITE) , f_MaterialChip7)) , $add_14(f_MaterialRow4, (f_MaterialChip8 = new MaterialChip , $setBackgroundColor(f_MaterialChip8, AMBER) , $setIconType_1(f_MaterialChip8, CLOSE) , $setText_6(f_MaterialChip8.span_0, 'Banana') , $add_14(f_MaterialChip8, f_MaterialChip8.span_0) , $setTextColor(f_MaterialChip8, WHITE) , f_MaterialChip8)) , $add_14(f_MaterialRow4, (f_MaterialChip9 = new MaterialChip , $setBackgroundColor(f_MaterialChip9, GREEN) , $setIconType_1(f_MaterialChip9, CLOSE) , $setText_6(f_MaterialChip9.span_0, 'Mango') , $add_14(f_MaterialChip9, f_MaterialChip9.span_0) , $setTextColor(f_MaterialChip9, WHITE) , f_MaterialChip9)) , f_MaterialRow4)) , $add_14(f_MaterialRow2, (f_PrettyPre10 = new PrettyPre , $setHTML_0(f_PrettyPre10, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialChip text=\"Default\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"Apple\" backgroundColor=\"RED\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"ORANGE\" backgroundColor=\"ORANGE\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"Banana\" backgroundColor=\"AMBER\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip text=\"Mango\" backgroundColor=\"GREEN\" textColor=\"WHITE\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre10.element_0, 'lang-xml', true) , f_PrettyPre10)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2), $get_0(this$static.domId0Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow11 = new MaterialRow , $add_14(f_MaterialRow11, (f_MaterialTitle12 = new MaterialTitle , $setText_12(f_MaterialTitle12.paragraph, 'You can specify a letter as an avatar from Aa to Zz.') , $setInnerHTML($getElement(f_MaterialTitle12.header), (new SafeHtmlString(htmlEscape('Letter Chip'))).html_0) , f_MaterialTitle12)) , $add_14(f_MaterialRow11, (f_MaterialRow13 = new MaterialRow , $add_14(f_MaterialRow13, (f_MaterialChip14 = new MaterialChip , $setLetter(f_MaterialChip14.letterMixin, 'A') , $setIconType_1(f_MaterialChip14, CLOSE) , $setText_6(f_MaterialChip14.span_0, 'Apple') , $add_14(f_MaterialChip14, f_MaterialChip14.span_0) , $setLetterColor_0(f_MaterialChip14, WHITE) , $setLetterBackgroundColor_0(f_MaterialChip14, RED) , f_MaterialChip14)) , $add_14(f_MaterialRow13, (f_MaterialChip15 = new MaterialChip , $setLetter(f_MaterialChip15.letterMixin, 'G') , $setIconType_1(f_MaterialChip15, CLOSE) , $setText_6(f_MaterialChip15.span_0, 'Grapes') , $add_14(f_MaterialChip15, f_MaterialChip15.span_0) , $setLetterColor_0(f_MaterialChip15, PINK_ACCENT_1) , $setLetterBackgroundColor_0(f_MaterialChip15, PURPLE) , f_MaterialChip15)) , $add_14(f_MaterialRow13, (f_MaterialChip16 = new MaterialChip , $setLetter(f_MaterialChip16.letterMixin, 'D') , $setIconType_1(f_MaterialChip16, CLOSE) , $setText_6(f_MaterialChip16.span_0, 'Dalandan') , $add_14(f_MaterialChip16, f_MaterialChip16.span_0) , $setLetterColor_0(f_MaterialChip16, WHITE) , $setLetterBackgroundColor_0(f_MaterialChip16, GREEN) , f_MaterialChip16)) , $add_14(f_MaterialRow13, (f_MaterialChip17 = new MaterialChip , $setLetter(f_MaterialChip17.letterMixin, 'M') , $setIconType_1(f_MaterialChip17, CLOSE) , $setText_6(f_MaterialChip17.span_0, 'Mango') , $add_14(f_MaterialChip17, f_MaterialChip17.span_0) , $setLetterColor_0(f_MaterialChip17, ORANGE) , $setLetterBackgroundColor_0(f_MaterialChip17, YELLOW) , f_MaterialChip17)) , f_MaterialRow13)) , $add_14(f_MaterialRow11, (f_PrettyPre18 = new PrettyPre , $setHTML_0(f_PrettyPre18, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m:MaterialChip letter=\"A\" letterColor=\"WHITE\" letterBackgroundColor=\"RED\" text=\"Apple\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip letter=\"G\" letterColor=\"PINK_ACCENT_1\" letterBackgroundColor=\"PURPLE\" text=\"Grapes\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip letter=\"D\" letterColor=\"WHITE\" letterBackgroundColor=\"GREEN\" text=\"Dalandan\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip letter=\"M\" letterColor=\"ORANGE\" letterBackgroundColor=\"YELLOW\" text=\"Mango\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre18.element_0, 'lang-xml', true) , f_PrettyPre18)) , setStyleName(f_MaterialRow11.element_0, 'code', true) , f_MaterialRow11), $get_0(this$static.domId1Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow19 = new MaterialRow , $add_14(f_MaterialRow19, (f_MaterialTitle20 = new MaterialTitle , $setText_12(f_MaterialTitle20.paragraph, 'Static chips cannot be selected, removed or edited, and are not part of any model.') , $setInnerHTML($getElement(f_MaterialTitle20.header), (new SafeHtmlString(htmlEscape('Static Chip'))).html_0) , f_MaterialTitle20)) , $add_14(f_MaterialRow19, (f_MaterialRow21 = new MaterialRow , $add_14(f_MaterialRow21, (f_MaterialChip22 = new MaterialChip , $setText_6(f_MaterialChip22.span_0, 'Apple') , $add_14(f_MaterialChip22, f_MaterialChip22.span_0) , f_MaterialChip22)) , $add_14(f_MaterialRow21, (f_MaterialChip23 = new MaterialChip , $setText_6(f_MaterialChip23.span_0, 'Banana') , $add_14(f_MaterialChip23, f_MaterialChip23.span_0) , f_MaterialChip23)) , $add_14(f_MaterialRow21, (f_MaterialChip24 = new MaterialChip , $setText_6(f_MaterialChip24.span_0, 'Mango') , $add_14(f_MaterialChip24, f_MaterialChip24.span_0) , f_MaterialChip24)) , f_MaterialRow21)) , $add_14(f_MaterialRow19, (f_PrettyPre25 = new PrettyPre , $setHTML_0(f_PrettyPre25, (sb_1 = new StringBuilder , sb_1.string += '\\u2003&lt;m:MaterialChip text=\"Apple\" /&gt;<br> &lt;m:MaterialChip text=\"Banana\" /&gt;<br> &lt;m:MaterialChip text=\"Mango\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html_0) , setStyleName(f_PrettyPre25.element_0, 'lang-xml', true) , f_PrettyPre25)) , setStyleName(f_MaterialRow19.element_0, 'code', true) , f_MaterialRow19), $get_0(this$static.domId2Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow26 = new MaterialRow , $add_14(f_MaterialRow26, (f_MaterialTitle27 = new MaterialTitle , $setText_12(f_MaterialTitle27.paragraph, 'Contact chips represent contact information that users have for people in a compact way. They are invoked and inserted into a text field (usually the To field) when the user starts typing a contact\\xE2\\u20AC\\u2122s name, sees the contact\\xE2\\u20AC\\u2122s addresses, and selects the correct one. Contact chips can be added directly to a text field from a menu of contacts. Contact chips efficiently confirm that the user will be sending their message to the correct person.') , $setInnerHTML($getElement(f_MaterialTitle27.header), (new SafeHtmlString(htmlEscape('Contact Chips'))).html_0) , f_MaterialTitle27)) , $add_14(f_MaterialRow26, (f_MaterialRow28 = new MaterialRow , $add_14(f_MaterialRow28, (f_MaterialChip29 = new MaterialChip , $setIconType_1(f_MaterialChip29, CLOSE) , $setText_6(f_MaterialChip29.span_0, \"Yunalis Mat Zara'ai\") , $add_14(f_MaterialChip29, f_MaterialChip29.span_0) , $setUrl_0(f_MaterialChip29.image, 'http://b.vimeocdn.com/ps/339/488/3394886_300.jpg') , $add_14(f_MaterialChip29, f_MaterialChip29.image) , f_MaterialChip29)) , $add_14(f_MaterialRow28, (f_MaterialChip30 = new MaterialChip , $setIconType_1(f_MaterialChip30, CLOSE) , $setText_6(f_MaterialChip30.span_0, 'Marjorie Matias') , $add_14(f_MaterialChip30, f_MaterialChip30.span_0) , $setUrl_0(f_MaterialChip30.image, 'http://lorempixel.com/50/50/people?1') , $add_14(f_MaterialChip30, f_MaterialChip30.image) , f_MaterialChip30)) , $add_14(f_MaterialRow28, (f_MaterialChip31 = new MaterialChip , $setIconType_1(f_MaterialChip31, CLOSE) , $setText_6(f_MaterialChip31.span_0, 'Zenaida Ringor') , $add_14(f_MaterialChip31, f_MaterialChip31.span_0) , $setUrl_0(f_MaterialChip31.image, 'http://lorempixel.com/50/50/people?8') , $add_14(f_MaterialChip31, f_MaterialChip31.image) , f_MaterialChip31)) , f_MaterialRow28)) , $add_14(f_MaterialRow26, (f_PrettyPre32 = new PrettyPre , $setHTML_0(f_PrettyPre32, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m:MaterialChip url=\"http://b.vimeocdn.com/ps/339/488/3394886_300.jpg\" text=\"Yunalis Mat Zara\\'ai\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip url=\"http://lorempixel.com/50/50/people?1\" text=\"Marjorie Matias\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip url=\"http://lorempixel.com/50/50/people?8\" text=\"Zenaida Ringor\" iconType=\"CLOSE\"/&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html_0) , setStyleName(f_PrettyPre32.element_0, 'lang-xml', true) , f_PrettyPre32)) , setStyleName(f_MaterialRow26.element_0, 'code', true) , f_MaterialRow26), $get_0(this$static.domId3Element));\n  $addAndReplaceElement(f_HTMLPanel1, (f_MaterialRow33 = new MaterialRow , $add_14(f_MaterialRow33, (f_MaterialTitle34 = new MaterialTitle , $setText_12(f_MaterialTitle34.paragraph, 'Adding events on chip is easy, you can get the secondary icon by calling getIcon() then addClickHandles etc.') , $setInnerHTML($getElement(f_MaterialTitle34.header), (new SafeHtmlString(htmlEscape('Events'))).html_0) , f_MaterialTitle34)) , $add_14(f_MaterialRow33, (chip = new MaterialChip , $setIconType_1(chip, CLOSE) , $setText_6(chip.span_0, \"Yunalis Mat Zara'ai\") , $add_14(chip, chip.span_0) , $setUrl_0(chip.image, 'http://b.vimeocdn.com/ps/339/488/3394886_300.jpg') , $add_14(chip, chip.image) , this$static.owner.chip = chip , chip)) , $add_14(f_MaterialRow33, (chipClick = new MaterialChip , $setText_6(chipClick.span_0, 'Click Me') , $add_14(chipClick, chipClick.span_0) , $addClickHandler(chipClick, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , chipClick)) , $add_14(f_MaterialRow33, (f_PrettyPre35 = new PrettyPre , $setHTML_0(f_PrettyPre35, (sb_3 = new StringBuilder , sb_3.string += '\\u2003&lt;m:MaterialChip ui:field=\"chip\" url=\"http://b.vimeocdn.com/ps/339/488/3394886_300.jpg\" text=\"Yunalis Mat Zara\\'ai\" iconType=\"CLOSE\"/&gt;<br> &lt;m:MaterialChip ui:field=\"chipClick\" text=\"Click Me\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_3.string)).html_0) , setStyleName(f_PrettyPre35.element_0, 'lang-xml', true) , f_PrettyPre35)) , $add_14(f_MaterialRow33, (f_PrettyPre36 = new PrettyPre , $setHTML_0(f_PrettyPre36, (sb_4 = new StringBuilder , sb_4.string += '\\u2003@UiField MaterialChip chip;<br><br>  chip.getIcon().addClickHandler(new ClickHandler() {<br> @Override<br> \\u2003public void onClick(ClickEvent event) {<br> \\u2003\\u2003MaterialToast.fireToast(chip.getText());<br> \\u2003}<br> });<br><br>  @UiHandler(\"chipClick\")<br> void onClickChip(ClickEvent e) {<br> \\u2003MaterialToast.fireToast(\"You clicked me\");<br> }' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_4.string)).html_0) , setStyleName(f_PrettyPre36.element_0, 'lang-java', true) , f_PrettyPre36)) , setStyleName(f_MaterialRow33.element_0, 'code', true) , f_MaterialRow33), $get_0(this$static.domId4Element));\n  return f_HTMLPanel1;\n}\n\nfunction ChipsView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new ChipsView_BinderImpl$Widgets$1;\n  this.owner = owner;\n  this.domId0 = $createUniqueId($doc);\n  this.domId1 = $createUniqueId($doc);\n  this.domId2 = $createUniqueId($doc);\n  this.domId3 = $createUniqueId($doc);\n  this.domId4 = $createUniqueId($doc);\n  this.domId0Element = new LazyDomElement(this.domId0);\n  this.domId1Element = new LazyDomElement(this.domId1);\n  this.domId2Element = new LazyDomElement(this.domId2);\n  this.domId3Element = new LazyDomElement(this.domId3);\n  this.domId4Element = new LazyDomElement(this.domId4);\n}\n\ndefineClass(1416, 1, {}, ChipsView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl/Widgets', 1416);\nfunction ChipsView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1417, 1, $intern_67, ChipsView_BinderImpl$Widgets$1);\n_.onClick = function onClick_118(event_0){\n  $toast(new MaterialToast_0(stampJavaTypeInfo(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 21, 0, [])), 'You clicked me', $intern_69, null);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_chips_ChipsView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.chips', 'ChipsView_BinderImpl/Widgets/1', 1417);\nfunction $html7_0(arg0, arg1, arg2, arg3, arg4){\n  var sb;\n  sb = new StringBuilder;\n  sb.string += \"<span id='\";\n  $append_4(sb, htmlEscape(arg0));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg1));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg2));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg3));\n  sb.string += \"'><\\/span>  <span id='\";\n  $append_4(sb, htmlEscape(arg4));\n  sb.string += \"'><\\/span>\";\n  return new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string);\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$) {\n    result0 = new ChipsPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$) {\n    result = new ChipsView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsView$_annotation$$none$$;\n}\n\ndefineClass(734, 1, $intern_107);\n_.onSuccess_0 = function onSuccess_18(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$chips$ChipsPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(17);\n\n//# sourceURL=gwtmaterialdemo-17.js\n")