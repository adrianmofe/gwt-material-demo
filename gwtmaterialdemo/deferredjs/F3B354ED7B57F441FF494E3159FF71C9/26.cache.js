$wnd.gwtmaterialdemo.runAsyncCallback26("function $createInputRadioElement(doc, name_0){\n  var elem = doc.createElement('INPUT');\n  elem.type = 'radio';\n  elem.name = name_0;\n  elem.value = 'on';\n  return elem;\n}\n\nfunction $setAccessKey(this$static, accessKey){\n  this$static.accessKey = accessKey;\n}\n\nfunction $addValueChangeHandler_0(this$static, handler){\n  this$static.valueChangeHandlerInitialized || (this$static.valueChangeHandlerInitialized = true);\n  return $addHandler(this$static, handler, (!TYPE_18 && (TYPE_18 = new GwtEvent$Type) , TYPE_18));\n}\n\nfunction $replaceInputElement(this$static, elem){\n  var accessKey, checked, enabled, formValue, newInputElem, sunkEvents, tabIndex, uid;\n  newInputElem = elem;\n  tabIndex = $getTabIndex(this$static.inputElem);\n  checked = checkNotNull(this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?true:false):($clinit_Boolean() , this$static.inputElem.defaultChecked?true:false));\n  enabled = !this$static.inputElem.disabled;\n  formValue = this$static.inputElem.value;\n  uid = this$static.inputElem.id;\n  accessKey = this$static.inputElem.accessKey;\n  sunkEvents = getEventsSunk(this$static.inputElem);\n  $clinit_DOM();\n  this$static.inputElem.__listener = null;\n  $replaceChild(this$static.element_0, newInputElem, this$static.inputElem);\n  sinkEvents_1(elem, getEventsSunk(this$static.inputElem));\n  sinkEvents_1(this$static.inputElem, 0);\n  this$static.inputElem = newInputElem;\n  sinkEvents_1(this$static.inputElem, sunkEvents);\n  $setId(this$static.inputElem, uid);\n  $equals_1('', accessKey) || $setAccessKey(this$static.inputElem, accessKey);\n  !!this$static.inputElem && $setTabIndex(this$static.inputElem, tabIndex);\n  $setValue_0(this$static, ($clinit_Boolean() , checked?true:false), false);\n  $setDisabled(this$static.inputElem, !enabled);\n  enabled?$setStyleName_0(this$static, getStylePrimaryName(this$static.element_0) + '-' + 'disabled', false):$setStyleName_0(this$static, getStylePrimaryName(this$static.element_0) + '-' + 'disabled', true);\n  $setAttribute(this$static.inputElem, 'value', formValue);\n  this$static.attached && setEventListener(this$static.inputElem, this$static);\n}\n\nfunction $setValue_0(this$static, value_0, fireEvents){\n  var oldValue;\n  value_0 == null && (value_0 = ($clinit_Boolean() , FALSE));\n  oldValue = this$static.attached?($clinit_Boolean() , this$static.inputElem.checked?true:false):($clinit_Boolean() , this$static.inputElem.defaultChecked?true:false);\n  $setChecked(this$static.inputElem, (checkCriticalNotNull(value_0) , value_0));\n  $setDefaultChecked(this$static.inputElem, (checkCriticalNotNull(value_0) , value_0));\n  checkCriticalNotNull(value_0);\n  if (value_0 == oldValue) {\n    return;\n  }\n  fireEvents && fire_5(this$static, value_0);\n}\n\nfunction CheckBox(elem){\n  var uid;\n  ButtonBase.call(this, ($clinit_DOM() , $doc.createElement('span')));\n  this.inputElem = elem;\n  this.labelElem = $doc.createElement('label');\n  $appendChild(this.element_0, this.inputElem);\n  $appendChild(this.element_0, this.labelElem);\n  uid = $createUniqueId($doc);\n  this.inputElem['id'] = uid;\n  $setHtmlFor(this.labelElem, uid);\n  this.directionalTextHelper = new DirectionalTextHelper(this.labelElem);\n  !!this.inputElem && (this.inputElem.tabIndex = 0 , undefined);\n}\n\ndefineClass(2191, 590, $intern_48);\n_.getValue = function getValue_0(){\n  return this.attached?($clinit_Boolean() , this.inputElem.checked?true:false):($clinit_Boolean() , this.inputElem.defaultChecked?true:false);\n}\n;\n_.setValue_0 = function setValue(value_0){\n  $setValue_0(this, value_0, false);\n}\n;\n_.getTabIndex = function getTabIndex_0(){\n  return $getTabIndex(this.inputElem);\n}\n;\n_.isEnabled = function isEnabled_0(){\n  return !this.inputElem.disabled;\n}\n;\n_.onLoad = function onLoad_2(){\n  $clinit_DOM();\n  this.inputElem.__listener = this;\n}\n;\n_.onUnload = function onUnload_0(){\n  $clinit_DOM();\n  this.inputElem.__listener = null;\n  $setValue_0(this, this.attached?($clinit_Boolean() , this.inputElem.checked?true:false):($clinit_Boolean() , this.inputElem.defaultChecked?true:false), false);\n}\n;\n_.setEnabled = function setEnabled_0(enabled){\n  $setDisabled(this.inputElem, !enabled);\n  enabled?$setStyleName_0(this, getStylePrimaryName(($clinit_DOM() , this.element_0)) + '-' + 'disabled', false):$setStyleName_0(this, getStylePrimaryName(($clinit_DOM() , this.element_0)) + '-' + 'disabled', true);\n}\n;\n_.setTabIndex = function setTabIndex_0(index_0){\n  !!this.inputElem && $setTabIndex(this.inputElem, index_0);\n}\n;\n_.sinkEvents = function sinkEvents_2(eventBitsToAdd){\n  this.eventsToSink == -1?sinkEvents_1(this.inputElem, eventBitsToAdd | getEventsSunk(this.inputElem)):this.eventsToSink == -1?sinkEvents_0(($clinit_DOM() , this.element_0), eventBitsToAdd | (this.element_0.__eventBits || 0)):(this.eventsToSink |= eventBitsToAdd);\n}\n;\n_.valueChangeHandlerInitialized = false;\nvar Lcom_google_gwt_user_client_ui_CheckBox_2_classLit = createForClass('com.google.gwt.user.client.ui', 'CheckBox', 2191);\nfunction $sinkEvents(this$static, eventBitsToAdd){\n  if (this$static.eventsToSink == -1) {\n    sinkEvents_1(this$static.inputElem, eventBitsToAdd | getEventsSunk(this$static.inputElem));\n    sinkEvents_1(this$static.labelElem, eventBitsToAdd | getEventsSunk(this$static.labelElem));\n  }\n   else {\n    this$static.eventsToSink == -1?sinkEvents_1(this$static.inputElem, eventBitsToAdd | getEventsSunk(this$static.inputElem)):this$static.eventsToSink == -1?sinkEvents_0(($clinit_DOM() , this$static.element_0), eventBitsToAdd | (this$static.element_0.__eventBits || 0)):(this$static.eventsToSink |= eventBitsToAdd);\n  }\n}\n\ndefineClass(2192, 2191, $intern_48);\n_.onBrowserEvent = function onBrowserEvent_2(event_0){\n  var target;\n  switch ($clinit_DOM() , $eventGetTypeInt(event_0.type)) {\n    case 8:\n    case 4096:\n    case 128:\n      this.oldValue = this.attached?($clinit_Boolean() , this.inputElem.checked?true:false):($clinit_Boolean() , this.inputElem.defaultChecked?true:false);\n      break;\n    case 1:\n      target = $eventGetTarget(event_0);\n      if (is_0(target) && $isOrHasChild(this.labelElem, target)) {\n        this.oldValue = this.attached?($clinit_Boolean() , this.inputElem.checked?true:false):($clinit_Boolean() , this.inputElem.defaultChecked?true:false);\n        return;\n      }\n\n      $onBrowserEvent(this, event_0);\n      fireIfNotEqual(this, this.oldValue, this.attached?($clinit_Boolean() , this.inputElem.checked?true:false):($clinit_Boolean() , this.inputElem.defaultChecked?true:false));\n      return;\n  }\n  $onBrowserEvent(this, event_0);\n}\n;\n_.sinkEvents = function sinkEvents_3(eventBitsToAdd){\n  $sinkEvents(this, eventBitsToAdd);\n}\n;\nvar Lcom_google_gwt_user_client_ui_RadioButton_2_classLit = createForClass('com.google.gwt.user.client.ui', 'RadioButton', 2192);\nfunction TypeWidget(element){\n  MaterialWidget_0.call(this, element);\n}\n\ndefineClass(2324, 25, $intern_60, TypeWidget);\nvar Lgwt_material_design_client_base_TypeWidget_2_classLit = createForClass('gwt.material.design.client.base', 'TypeWidget', 2324);\nfunction $clinit_RadioButtonType(){\n  $clinit_RadioButtonType = emptyMethod;\n  NO_GAP = new RadioButtonType('NO_GAP', 0, '');\n  GAP = new RadioButtonType('GAP', 1, 'with-gap');\n}\n\nfunction RadioButtonType(enum$name, enum$ordinal, cssClass){\n  Enum.call(this, enum$name, enum$ordinal);\n  this.cssClass = cssClass;\n}\n\nfunction values_55(){\n  $clinit_RadioButtonType();\n  return stampJavaTypeInfo(getClassLiteralForArray(Lgwt_material_design_client_constants_RadioButtonType_2_classLit, 1), $intern_10, 361, 0, [NO_GAP, GAP]);\n}\n\ndefineClass(361, 28, {52:1, 133:1, 361:1, 113:1, 4:1, 38:1, 28:1}, RadioButtonType);\n_.getCssName = function getCssName_80(){\n  return this.cssClass;\n}\n;\nvar GAP, NO_GAP;\nvar Lgwt_material_design_client_constants_RadioButtonType_2_classLit = createForEnum('gwt.material.design.client.constants', 'RadioButtonType', 361, values_55);\nfunction $setType_14(this$static, type_0){\n  $setType_3((!this$static.typeMixin && (this$static.typeMixin = new CssTypeMixin(new TypeWidget(($clinit_DOM() , $getChild(this$static.element_0, 0))))) , this$static.typeMixin), type_0);\n}\n\nfunction MaterialRadioButton(){\n  $clinit_FocusWidget();\n  CheckBox.call(this, ($clinit_DOM() , $createInputRadioElement($doc, '')));\n  this.element_0.className = 'gwt-RadioButton';\n  $sinkEvents(this, 1);\n  $sinkEvents(this, 8);\n  $sinkEvents(this, 4096);\n  $sinkEvents(this, 128);\n}\n\ndefineClass(319, 2192, $intern_48, MaterialRadioButton);\nvar Lgwt_material_design_client_ui_MaterialRadioButton_2_classLit = createForClass('gwt.material.design.client.ui', 'MaterialRadioButton', 319);\nfunction RadioButtonPresenter(eventBus, view, proxy){\n  $clinit_PresenterWidget();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MAIN));\n}\n\ndefineClass(862, 60, $intern_53, RadioButtonPresenter);\n_.onReveal = function onReveal_46(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Radio Button', 'Radio buttons allow the user to select one option from a set. Use radio buttons for exclusive selection if you think that the user needs to see all available options side-by-side.', 'components/forms/radiobutton/RadioButtonView', 'https://material.io/guidelines/components/selection-controls.html#selection-controls-checkbox'));\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_radiobutton_RadioButtonPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.radiobutton', 'RadioButtonPresenter', 862);\nfunction RadioButtonView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialRow1_2(new RadioButtonView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(1196, 67, $intern_54, RadioButtonView);\nvar Lgwt_material_design_demo_client_application_components_forms_radiobutton_RadioButtonView_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.radiobutton', 'RadioButtonView', 1196);\nfunction $build_f_MaterialRow1_2(this$static){\n  var f_MaterialRow1, f_MaterialRow2, f_MaterialRow9, f_MaterialTitle3, f_MaterialRadioButton4, f_MaterialRadioButton5, f_MaterialRadioButton6, f_MaterialRadioButton7, f_PrettyPre8, sb, f_MaterialBadge10, f_MaterialTitle11, radioValue, f_MaterialRow12, btnRadioValue, btnRadioValueEvent, f_PrettyPre13, sb_0;\n  f_MaterialRow1 = new MaterialRow;\n  $add_9(f_MaterialRow1, (f_MaterialRow2 = new MaterialRow , $add_9(f_MaterialRow2, (f_MaterialTitle3 = new MaterialTitle , $setText_12(f_MaterialTitle3.paragraph, 'Radio Buttons are used when the user must make only one selection out of a group of items') , $setInnerHTML($getElement(f_MaterialTitle3.header), ($clinit_SafeHtmlUtils() , (new SafeHtmlString(htmlEscape('Radio Button'))).html_0)) , fire_5(f_MaterialTitle3, 'Radio Button') , f_MaterialTitle3)) , $add_9(f_MaterialRow2, (f_MaterialRadioButton4 = new MaterialRadioButton , setStyleName(($clinit_DOM() , f_MaterialRadioButton4.element_0), 'I3MS0VB-q-a', true) , $replaceInputElement(f_MaterialRadioButton4, $createInputRadioElement($doc, 'color')) , $setTextOrHtml(f_MaterialRadioButton4.directionalTextHelper, 'Red') , $setType_14(f_MaterialRadioButton4, ($clinit_RadioButtonType() , GAP)) , f_MaterialRadioButton4)) , $add_9(f_MaterialRow2, (f_MaterialRadioButton5 = new MaterialRadioButton , setStyleName(f_MaterialRadioButton5.element_0, 'I3MS0VB-q-a', true) , $replaceInputElement(f_MaterialRadioButton5, $createInputRadioElement($doc, 'color')) , $setTextOrHtml(f_MaterialRadioButton5.directionalTextHelper, 'Yellow') , f_MaterialRadioButton5)) , $add_9(f_MaterialRow2, (f_MaterialRadioButton6 = new MaterialRadioButton , setStyleName(f_MaterialRadioButton6.element_0, 'I3MS0VB-q-a', true) , $replaceInputElement(f_MaterialRadioButton6, $createInputRadioElement($doc, 'color')) , $setTextOrHtml(f_MaterialRadioButton6.directionalTextHelper, 'Green') , f_MaterialRadioButton6)) , $add_9(f_MaterialRow2, (f_MaterialRadioButton7 = new MaterialRadioButton , setStyleName(f_MaterialRadioButton7.element_0, 'I3MS0VB-q-a', true) , $replaceInputElement(f_MaterialRadioButton7, $createInputRadioElement($doc, 'color')) , $setTextOrHtml(f_MaterialRadioButton7.directionalTextHelper, 'Brown') , f_MaterialRadioButton7.inputElem.disabled = true , $setStyleName_0(f_MaterialRadioButton7, getStylePrimaryName(f_MaterialRadioButton7.element_0) + '-' + 'disabled', true) , f_MaterialRadioButton7)) , $add_9(f_MaterialRow2, (f_PrettyPre8 = new PrettyPre , $setHTML_0(f_PrettyPre8, (sb = new StringBuilder , sb.string += '\\u2003&lt;m:MaterialRadioButton name=\"color\" text=\"Red\" /&gt;<br> &lt;m:MaterialRadioButton name=\"color\" text=\"Yellow\" /&gt;<br> &lt;m:MaterialRadioButton name=\"color\" text=\"Green\" /&gt;<br> &lt;m:MaterialRadioButton name=\"color\" text=\"Brown\" enabled=\"false\" /&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html_0) , setStyleName(f_PrettyPre8.element_0, 'lang-xml', true) , f_PrettyPre8)) , setStyleName(f_MaterialRow2.element_0, 'code', true) , f_MaterialRow2));\n  $add_9(f_MaterialRow1, (f_MaterialRow9 = new MaterialRow , $add_9(f_MaterialRow9, (f_MaterialBadge10 = new MaterialBadge , $setBackgroundColor(f_MaterialBadge10, ($clinit_Color() , AMBER_LIGHTEN_5)) , $setShadow_0((!f_MaterialBadge10.shadowMixin && (f_MaterialBadge10.shadowMixin = new ShadowMixin(f_MaterialBadge10)) , f_MaterialBadge10.shadowMixin), 1) , $setLayoutPosition(f_MaterialBadge10, ($clinit_Style$Position() , RELATIVE)) , $setInnerHTML(f_MaterialBadge10.element_0, (new SafeHtmlString(htmlEscape('FEATURE UPDATE'))).html_0) , $setFloat(f_MaterialBadge10, ($clinit_Style$Float() , RIGHT)) , $setTextColor(f_MaterialBadge10, AMBER) , f_MaterialBadge10)) , $add_9(f_MaterialRow9, (f_MaterialTitle11 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle11.header), (new SafeHtmlString(htmlEscape('RadioButton : setValue(value, fireEvents)'))).html_0) , fire_5(f_MaterialTitle11, 'RadioButton : setValue(value, fireEvents)') , f_MaterialTitle11)) , $add_9(f_MaterialRow9, (radioValue = new MaterialRadioButton , $replaceInputElement(radioValue, $createInputRadioElement($doc, 'color')) , $setTextOrHtml(radioValue.directionalTextHelper, 'Radio Button') , $addValueChangeHandler_0(radioValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1) , this$static.owner.radioValue = radioValue , radioValue)) , $add_9(f_MaterialRow9, (f_MaterialRow12 = new MaterialRow , $add_9(f_MaterialRow12, (btnRadioValue = new MaterialButton , btnRadioValue.element_0.style['marginRight'] = ($clinit_Style$Unit() , '20.0px') , $setText_6(btnRadioValue.span_1, 'Set Value') , btnRadioValue.span_1.attached || $add_9(btnRadioValue, btnRadioValue.span_1) , $addClickHandler(btnRadioValue, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2) , btnRadioValue)) , $add_9(f_MaterialRow12, (btnRadioValueEvent = new MaterialButton , $setText_6(btnRadioValueEvent.span_1, 'Set Value with Event') , btnRadioValueEvent.span_1.attached || $add_9(btnRadioValueEvent, btnRadioValueEvent.span_1) , $addClickHandler(btnRadioValueEvent, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3) , btnRadioValueEvent)) , f_MaterialRow12)) , $add_9(f_MaterialRow9, (f_PrettyPre13 = new PrettyPre , $setHTML_0(f_PrettyPre13, (sb_0 = new StringBuilder , sb_0.string += '\\u2003// Set Value with firing the value change event <br> radio.setValue(true, true); <br> // Set Value without firing the value change event <br> radio.setValue(false);<br> radio.setValue(false, false);' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html_0) , setStyleName(f_PrettyPre13.element_0, 'lang-java', true) , f_PrettyPre13)) , setStyleName(f_MaterialRow9.element_0, 'code', true) , f_MaterialRow9));\n  return f_MaterialRow1;\n}\n\nfunction RadioButtonView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new RadioButtonView_BinderImpl$Widgets$1;\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new RadioButtonView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new RadioButtonView_BinderImpl$Widgets$3(this);\n  this.owner = owner;\n  this.style_0 = ($clinit_RadioButtonView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer() , style_16);\n  $ensureInjected_14(this.style_0);\n}\n\ndefineClass(1694, 1, {}, RadioButtonView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_components_forms_radiobutton_RadioButtonView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.radiobutton', 'RadioButtonView_BinderImpl/Widgets', 1694);\nfunction RadioButtonView_BinderImpl$Widgets$1(){\n}\n\ndefineClass(1695, 1, $intern_44, RadioButtonView_BinderImpl$Widgets$1);\n_.onValueChange = function onValueChange_33(event_0){\n  fireToast('Value : ' + event_0.value_0);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_radiobutton_RadioButtonView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.radiobutton', 'RadioButtonView_BinderImpl/Widgets/1', 1695);\nfunction RadioButtonView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1696, 1, $intern_63, RadioButtonView_BinderImpl$Widgets$2);\n_.onClick = function onClick_230(event_0){\n  $setValue_0(this.this$11.owner.radioValue, ($clinit_Boolean() , $clinit_Boolean() , true), false);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_radiobutton_RadioButtonView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.radiobutton', 'RadioButtonView_BinderImpl/Widgets/2', 1696);\nfunction RadioButtonView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(1697, 1, $intern_63, RadioButtonView_BinderImpl$Widgets$3);\n_.onClick = function onClick_231(event_0){\n  $setValue_0(this.this$11.owner.radioValue, ($clinit_Boolean() , $clinit_Boolean() , false), true);\n}\n;\nvar Lgwt_material_design_demo_client_application_components_forms_radiobutton_RadioButtonView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.radiobutton', 'RadioButtonView_BinderImpl/Widgets/3', 1697);\nvar style_16;\nfunction $ensureInjected_14(this$static){\n  if (!this$static.injected) {\n    this$static.injected = true;\n    $clinit_StyleInjector();\n    $push(toInject, '.I3MS0VB-q-a{display:block;margin-bottom:10px}');\n    schedule();\n    return true;\n  }\n  return false;\n}\n\nfunction RadioButtonView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1(){\n}\n\ndefineClass(2190, 1, {}, RadioButtonView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1);\n_.getName = function getName_130(){\n  return 'style';\n}\n;\n_.injected = false;\nvar Lgwt_material_design_demo_client_application_components_forms_radiobutton_RadioButtonView_1BinderImpl_1GenBundle_1default_1InlineClientBundleGenerator$1_2_classLit = createForClass('gwt.material.design.demo.client.application.components.forms.radiobutton', 'RadioButtonView_BinderImpl_GenBundle_default_InlineClientBundleGenerator/1', 2190);\nfunction $clinit_RadioButtonView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer(){\n  $clinit_RadioButtonView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$styleInitializer = emptyMethod;\n  style_16 = new RadioButtonView_BinderImpl_GenBundle_default_InlineClientBundleGenerator$1;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonPresenter$_annotation$$none$$(this$static){\n  var result, result0;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonPresenter$_annotation$$none$$) {\n    result0 = new RadioButtonPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), (result = $get_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonView$_annotation$$none$$(this$static) , result), $get_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result0), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonPresenter$_annotation$$none$$ = result0;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonView$_annotation$$none$$) {\n    result = new RadioButtonView;\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonView$_annotation$$none$$;\n}\n\ndefineClass(756, 1, $intern_102);\n_.onSuccess_0 = function onSuccess_27(){\n  $onSuccess(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$components$forms$radiobutton$RadioButtonPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_1)(26);\n\n//# sourceURL=gwtmaterialdemo-26.js\n")
