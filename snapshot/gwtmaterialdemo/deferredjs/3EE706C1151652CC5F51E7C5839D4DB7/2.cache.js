$wnd.gwtmaterialdemo.runAsyncCallback2("defineClass(1276, 1, {});\nvar Lgwt_material_design_addins_client_base_mixin_AbstractMixin_2_classLit = createForClass('gwt.material.design.addins.client.base.mixin', 'AbstractMixin', 1276);\nfunction $setActive(this$static, active){\n  var obj;\n  obj = this$static.uiObject;\n  if (active) {\n    setStyleName(($clinit_DOM() , obj.element), 'inactive', false);\n    setStyleName(obj.element, 'active', true);\n  }\n   else {\n    setStyleName(($clinit_DOM() , obj.element), 'active', false);\n    setStyleName(obj.element, 'inactive', true);\n  }\n}\n\nfunction ActiveMixin(widget){\n  this.uiObject = widget;\n}\n\ndefineClass(1277, 1276, {}, ActiveMixin);\nvar Lgwt_material_design_addins_client_base_mixin_ActiveMixin_2_classLit = createForClass('gwt.material.design.addins.client.base.mixin', 'ActiveMixin', 1277);\nfunction $add_14(this$static, child){\n  $add_13(this$static.divBody, child);\n}\n\nfunction $setActive_0(this$static, active){\n  $setActive(this$static.activeMixin, active);\n}\n\nfunction $setDescription(this$static, description){\n  $setStyleName(this$static.divDescription, 'description');\n  $setInnerHTML($getElement(this$static.divDescription), description);\n  $insert_4(this$static.conBody, this$static.divDescription, 1);\n}\n\nfunction MaterialStep(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.conCircle = new Div;\n  this.conBody = new Div;\n  this.divCircle = new Div;\n  this.divLine = new Div;\n  this.divTitle = new Div;\n  this.divDescription = new Div;\n  this.divBody = new Div;\n  this.activeMixin = new ActiveMixin(this);\n  $setClassName(($clinit_DOM() , this.element), 'step');\n  $add_13(this, this.conCircle);\n  $add_13(this.conCircle, this.divCircle);\n  $add_13(this.conCircle, this.divLine);\n  $add_13(this, this.conBody);\n  $add_13(this.conBody, this.divTitle);\n  $add_13(this.conBody, this.divBody);\n  $setStyleName(this.divCircle, 'circle');\n  $setStyleName(this.divLine, 'line');\n  $setStyleName(this.divTitle, 'title');\n  $setStyleName(this.divBody, 'body');\n}\n\ndefineClass(102, 44, {24:1, 10:1, 23:1, 33:1, 22:1, 28:1, 13:1, 20:1, 17:1, 102:1, 37:1, 34:1}, MaterialStep);\n_.add_0 = function add_14(child){\n  $add_14(this, child);\n}\n;\n_.onLoad = function onLoad_8(){\n  var stepper;\n  if (instanceOf(this.parent_1, 215)) {\n    stepper = dynamicCast(this.parent_1, 215);\n    dynamicCast(stepper.axisMixin.style_0, 221) == ($clinit_Axis() , HORIZONTAL)?$add_13(this.conCircle, this.divTitle):$insert_4(this.conBody, this.divTitle, 0);\n    $add_13(this.conCircle, this.divLine);\n  }\n}\n;\nvar Lgwt_material_design_addins_client_ui_MaterialStep_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialStep', 102);\nfunction $goToStep(this$static){\n  var i, w, w0;\n  this$static.totalSteps = this$static.children.size_0;\n  for (i = 0; i < this$static.totalSteps; i++) {\n    w0 = $get_3(this$static.children, i);\n    instanceOf(w0, 102) && $setActive_0(dynamicCast(w0, 102), false);\n  }\n  w = $get_3(this$static.children, 0);\n  instanceOf(w, 102) && $setActive_0(dynamicCast(w, 102), true);\n  this$static.currentStep = 0;\n}\n\nfunction $nextStep(this$static){\n  var nextStep, nextStepIndex, step, w;\n  if (this$static.currentStep >= this$static.children.size_0 - 1)\n  ;\n  else {\n    w = $getWidget(this$static, this$static.currentStep);\n    if (instanceOf(w, 102)) {\n      step = dynamicCast(w, 102);\n      $setActive(step.activeMixin, false);\n      nextStepIndex = $indexOf(this$static.children, step) + 1;\n      nextStep = dynamicCast($get_3(this$static.children, nextStepIndex), 102);\n      $setActive(nextStep.activeMixin, true);\n    }\n    ++this$static.currentStep;\n  }\n}\n\nfunction $prevStep(this$static){\n  var prevStep, prevStepIndex, step, w;\n  if (this$static.currentStep > 0) {\n    w = $getWidget(this$static, this$static.currentStep);\n    if (instanceOf(w, 102)) {\n      step = dynamicCast(w, 102);\n      $setActive(step.activeMixin, false);\n      prevStepIndex = $indexOf(this$static.children, step) - 1;\n      prevStep = dynamicCast($get_3(this$static.children, prevStepIndex), 102);\n      $setActive(prevStep.activeMixin, true);\n    }\n    --this$static.currentStep;\n  }\n}\n\nfunction MaterialStepper(){\n  ComplexWidget_0.call(this, $doc.createElement('div'));\n  this.totalSteps = 0;\n  this.currentStep = 0;\n  this.axisMixin = new CssNameMixin(this);\n  $setClassName(($clinit_DOM() , this.element), 'stepper');\n}\n\ndefineClass(215, 44, {24:1, 10:1, 23:1, 33:1, 22:1, 28:1, 13:1, 20:1, 17:1, 215:1, 37:1, 34:1}, MaterialStepper);\n_.onLoad = function onLoad_9(){\n  $goToStep(this);\n}\n;\n_.currentStep = 0;\n_.totalSteps = 0;\nvar Lgwt_material_design_addins_client_ui_MaterialStepper_2_classLit = createForClass('gwt.material.design.addins.client.ui', 'MaterialStepper', 215);\nfunction SteppersPresenter(eventBus, view, proxy){\n  $clinit_SteppersPresenter();\n  Presenter.call(this, eventBus, view, proxy, ($clinit_ApplicationPresenter() , SLOT_MainContent));\n}\n\ndefineClass(548, 52, $intern_40, SteppersPresenter);\n_.onReveal = function onReveal_3(){\n  $clinit_SetPageTitleEvent();\n  $fireEvent_1(this, new SetPageTitleEvent('Steppers', 'Steppers convey progress through numbered steps. They may also be used for navigation.'));\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersPresenter_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersPresenter', 548);\nfunction $onFinish(this$static){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 17, 0, [])), 'All done.', $intern_56, null);\n  $goToStep(this$static.stepper);\n}\n\nfunction $onFinish1(this$static){\n  $toast(new MaterialToast_0(initValues(getClassLiteralForArray(Lcom_google_gwt_user_client_ui_Widget_2_classLit, 1), $intern_4, 17, 0, [])), 'All done.', $intern_56, null);\n  $goToStep(this$static.stepperCard);\n}\n\nfunction SteppersView(){\n  ViewImpl.call(this);\n  $initWidget_0(this, $build_f_MaterialPanel1_0(new SteppersView_BinderImpl$Widgets(this)));\n}\n\ndefineClass(685, 56, $intern_41, SteppersView);\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView', 685);\nfunction SteppersView_BinderImpl(){\n}\n\ndefineClass(856, 1, {}, SteppersView_BinderImpl);\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl', 856);\nfunction $build_f_MaterialPanel1_0(this$static){\n  var f_MaterialPanel1, f_MaterialTitle2, f_PrettyPre3, f_MaterialTitle4, stepper, f_PrettyPre11, f_PrettyPre12, f_MaterialTitle13, stepperCard, f_PrettyPre20, sb, f_MaterialStep5, f_MaterialPanel6, btnContinue1, btnPrev1, f_MaterialStep7, f_MaterialPanel8, btnContinue2, btnPrev2, f_MaterialStep9, f_MaterialPanel10, btnContinue3, btnPrev3, sb_0, sb_1, f_MaterialStep14, f_MaterialPanel15, btnContinue11, btnPrev11, f_MaterialStep16, f_MaterialPanel17, btnContinue21, btnPrev21, f_MaterialStep18, f_MaterialPanel19, btnContinue31, btnPrev31, sb_2;\n  f_MaterialPanel1 = new MaterialPanel;\n  $add_13(f_MaterialPanel1, (f_MaterialTitle2 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle2.header), 'Addins Usage') , $setText_4(f_MaterialTitle2.paragraph, 'In every gwt-material-addins components you may require to add the following namespace to the <ui:UIBinder> element') , f_MaterialTitle2));\n  $add_13(f_MaterialPanel1, (f_PrettyPre3 = new PrettyPre , $setHTML(f_PrettyPre3, (sb = new StringBuilder , sb.string += \"xmlns:m.addins='urn:import:gwt.material.design.addins.client.ui'\" , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb.string)).html) , setStyleName(($clinit_DOM() , f_PrettyPre3.element), 'lang-xml', true) , setStyleName(f_PrettyPre3.element, 'z-depth-1', true) , f_PrettyPre3));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle4 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle4.header), 'Vertical Steppers') , $setText_4(f_MaterialTitle4.paragraph, 'Vertical steppers are designed for narrow screen sizes. They are ideal for mobile.') , f_MaterialTitle4));\n  $add_13(f_MaterialPanel1, (stepper = new MaterialStepper , $add_13(stepper, (f_MaterialStep5 = new MaterialStep , $add_14(f_MaterialStep5, (f_MaterialPanel6 = new MaterialPanel , f_MaterialPanel6.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel6.colorsMixin && (f_MaterialPanel6.colorsMixin = new ColorsMixin(f_MaterialPanel6)) , f_MaterialPanel6.colorsMixin), 'grey lighten-2') , f_MaterialPanel6.element.style['width'] = '100%' , f_MaterialPanel6)) , $add_14(f_MaterialStep5, (btnContinue1 = new MaterialButton , btnContinue1.span_0.setText('Continue to Step 2') , $add_13(btnContinue1, btnContinue1.span_0) , $setTextColor((!btnContinue1.colorsMixin && (btnContinue1.colorsMixin = new ColorsMixin(btnContinue1)) , btnContinue1.colorsMixin), 'white') , $setBackgroundColor((!btnContinue1.colorsMixin && (btnContinue1.colorsMixin = new ColorsMixin(btnContinue1)) , btnContinue1.colorsMixin), 'blue') , btnContinue1.element.style['marginTop'] = ($clinit_Style$Unit() , '12.0px') , $setWaves(btnContinue1, ($clinit_WavesType() , DEFAULT_6)) , $setGrid((!btnContinue1.gridMixin && (btnContinue1.gridMixin = new GridMixin(btnContinue1)) , btnContinue1.gridMixin), 'l4') , $addDomHandler(btnContinue1, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, ($clinit_ClickEvent() , $clinit_ClickEvent() , TYPE_1)) , btnContinue1)) , $add_14(f_MaterialStep5, (btnPrev1 = new MaterialButton , btnPrev1.span_0.setText('Cancel') , $add_13(btnPrev1, btnPrev1.span_0) , btnPrev1.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev1, DEFAULT_6) , $setGrid((!btnPrev1.gridMixin && (btnPrev1.gridMixin = new GridMixin(btnPrev1)) , btnPrev1.gridMixin), 'l4') , $setType(btnPrev1, ($clinit_ButtonType() , FLAT)) , $addDomHandler(btnPrev1, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnPrev1)) , $setInnerHTML($getElement(f_MaterialStep5.divTitle), 'Name of Step 1') , $setDescription(f_MaterialStep5, 'Description of Step 1') , $setInnerHTML($getElement(f_MaterialStep5.divCircle), '1') , f_MaterialStep5)) , $add_13(stepper, (f_MaterialStep7 = new MaterialStep , $add_14(f_MaterialStep7, (f_MaterialPanel8 = new MaterialPanel , f_MaterialPanel8.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel8.colorsMixin && (f_MaterialPanel8.colorsMixin = new ColorsMixin(f_MaterialPanel8)) , f_MaterialPanel8.colorsMixin), 'grey lighten-2') , f_MaterialPanel8.element.style['width'] = '100%' , f_MaterialPanel8)) , $add_14(f_MaterialStep7, (btnContinue2 = new MaterialButton , btnContinue2.span_0.setText('Continue to Step 3') , $add_13(btnContinue2, btnContinue2.span_0) , $setTextColor((!btnContinue2.colorsMixin && (btnContinue2.colorsMixin = new ColorsMixin(btnContinue2)) , btnContinue2.colorsMixin), 'white') , $setBackgroundColor((!btnContinue2.colorsMixin && (btnContinue2.colorsMixin = new ColorsMixin(btnContinue2)) , btnContinue2.colorsMixin), 'blue') , btnContinue2.element.style['marginTop'] = '12.0px' , $setWaves(btnContinue2, DEFAULT_6) , $setGrid((!btnContinue2.gridMixin && (btnContinue2.gridMixin = new GridMixin(btnContinue2)) , btnContinue2.gridMixin), 'l4') , $addDomHandler(btnContinue2, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_1)) , btnContinue2)) , $add_14(f_MaterialStep7, (btnPrev2 = new MaterialButton , btnPrev2.span_0.setText('Cancel') , $add_13(btnPrev2, btnPrev2.span_0) , btnPrev2.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev2, DEFAULT_6) , $setGrid((!btnPrev2.gridMixin && (btnPrev2.gridMixin = new GridMixin(btnPrev2)) , btnPrev2.gridMixin), 'l4') , $setType(btnPrev2, FLAT) , $addDomHandler(btnPrev2, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnPrev2)) , $setInnerHTML($getElement(f_MaterialStep7.divTitle), 'Name of Step 2') , $setDescription(f_MaterialStep7, 'Description of Step 2') , $setInnerHTML($getElement(f_MaterialStep7.divCircle), '2') , f_MaterialStep7)) , $add_13(stepper, (f_MaterialStep9 = new MaterialStep , $add_14(f_MaterialStep9, (f_MaterialPanel10 = new MaterialPanel , f_MaterialPanel10.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel10.colorsMixin && (f_MaterialPanel10.colorsMixin = new ColorsMixin(f_MaterialPanel10)) , f_MaterialPanel10.colorsMixin), 'grey lighten-2') , f_MaterialPanel10.element.style['width'] = '100%' , f_MaterialPanel10)) , $add_14(f_MaterialStep9, (btnContinue3 = new MaterialButton , btnContinue3.span_0.setText('Finish') , $add_13(btnContinue3, btnContinue3.span_0) , $setTextColor((!btnContinue3.colorsMixin && (btnContinue3.colorsMixin = new ColorsMixin(btnContinue3)) , btnContinue3.colorsMixin), 'white') , $setBackgroundColor((!btnContinue3.colorsMixin && (btnContinue3.colorsMixin = new ColorsMixin(btnContinue3)) , btnContinue3.colorsMixin), 'blue') , btnContinue3.element.style['marginTop'] = '12.0px' , $setWaves(btnContinue3, DEFAULT_6) , $setGrid((!btnContinue3.gridMixin && (btnContinue3.gridMixin = new GridMixin(btnContinue3)) , btnContinue3.gridMixin), 'l4') , $addDomHandler(btnContinue3, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1, (null , TYPE_1)) , $addDomHandler(btnContinue3, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3, (null , TYPE_1)) , btnContinue3)) , $add_14(f_MaterialStep9, (btnPrev3 = new MaterialButton , btnPrev3.span_0.setText('Cancel') , $add_13(btnPrev3, btnPrev3.span_0) , btnPrev3.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev3, DEFAULT_6) , $setGrid((!btnPrev3.gridMixin && (btnPrev3.gridMixin = new GridMixin(btnPrev3)) , btnPrev3.gridMixin), 'l4') , $setType(btnPrev3, FLAT) , $addDomHandler(btnPrev3, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2, (null , TYPE_1)) , btnPrev3)) , $setInnerHTML($getElement(f_MaterialStep9.divTitle), 'Name of Step 3') , $setDescription(f_MaterialStep9, 'Description of Step 3') , $setInnerHTML($getElement(f_MaterialStep9.divCircle), '3') , f_MaterialStep9)) , this$static.owner.stepper = stepper , stepper));\n  $add_13(f_MaterialPanel1, (f_PrettyPre11 = new PrettyPre , $setHTML(f_PrettyPre11, (sb_0 = new StringBuilder , sb_0.string += '\\u2003&lt;m.addins:MaterialStepper ui:field=\"stepper\"&gt;<br> \\u2003&lt;m.addins:MaterialStep step=\"1\" title=\"Name of Step 1\" description=\"Description of Step 1\"&gt;<br> \\u2003\\u2003&lt;m:MaterialPanel width=\"100%\" height=\"300px\" backgroundColor=\"grey lighten-2\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnContinue1\" text=\"Continue to Step 2\" grid=\"l4\" marginTop=\"12\" backgroundColor=\"blue\" textColor=\"white\" waves=\"DEFAULT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnPrev1\" text=\"Cancel\" grid=\"l4\" marginTop=\"12\" type=\"FLAT\" waves=\"DEFAULT\"/&gt;<br> \\u2003&lt;/m.addins:MaterialStep&gt;<br> \\u2003&lt;m.addins:MaterialStep step=\"2\" title=\"Name of Step 2\" description=\"Description of Step 1\"&gt;<br> \\u2003\\u2003&lt;m:MaterialPanel width=\"100%\" height=\"300px\" backgroundColor=\"grey lighten-2\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnContinue2\" text=\"Continue to Step 3\" grid=\"l4\" marginTop=\"12\" backgroundColor=\"blue\" textColor=\"white\" waves=\"DEFAULT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnPrev2\" text=\"Cancel\" grid=\"l4\" marginTop=\"12\" type=\"FLAT\" waves=\"DEFAULT\"/&gt;<br> \\u2003&lt;/m.addins:MaterialStep&gt;<br> \\u2003&lt;m.addins:MaterialStep step=\"3\" title=\"Name of Step 3\" description=\"Description of Step 1\"&gt;<br> \\u2003\\u2003&lt;m:MaterialPanel width=\"100%\" height=\"300px\" backgroundColor=\"grey lighten-2\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnContinue3\" text=\"Finish\" grid=\"l4\" marginTop=\"12\" backgroundColor=\"blue\" textColor=\"white\" waves=\"DEFAULT\"/&gt;<br> \\u2003\\u2003&lt;m:MaterialButton ui:field=\"btnPrev3\" text=\"Cancel\" grid=\"l4\" marginTop=\"12\" type=\"FLAT\" waves=\"DEFAULT\"/&gt;<br> \\u2003&lt;/m.addins:MaterialStep&gt;<br> &lt;/m.addins:MaterialStepper&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_0.string)).html) , setStyleName(f_PrettyPre11.element, 'lang-xml', true) , setStyleName(f_PrettyPre11.element, 'z-depth-1', true) , f_PrettyPre11));\n  $add_13(f_MaterialPanel1, (f_PrettyPre12 = new PrettyPre , $setHTML(f_PrettyPre12, (sb_1 = new StringBuilder , sb_1.string += '\\u2003@UiHandler({\"btnContinue1\", \"btnContinue2\", \"btnContinue3\"})<br> void onNextStep(ClickEvent e){<br> \\u2003stepper.nextStep();<br> }<br><br> @UiHandler({\"btnPrev1\", \"btnPrev2\", \"btnPrev3\"})<br> void onPrevStep(ClickEvent e){<br> \\u2003stepper.prevStep();<br> }<br><br> @UiHandler(\"btnContinue3\")<br> void onFinish(ClickEvent e){<br> \\u2003MaterialToast.fireToast(\"All done.\");<br> }<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_1.string)).html) , setStyleName(f_PrettyPre12.element, 'lang-xml', true) , setStyleName(f_PrettyPre12.element, 'z-depth-1', true) , f_PrettyPre12));\n  $add_13(f_MaterialPanel1, (f_MaterialTitle13 = new MaterialTitle , $setInnerHTML($getElement(f_MaterialTitle13.header), 'Card Steppers') , $setText_4(f_MaterialTitle13.paragraph, \"You can put your Steppers inside a card component by adding shadow='1'\") , f_MaterialTitle13));\n  $add_13(f_MaterialPanel1, (stepperCard = new MaterialStepper , $add_13(stepperCard, (f_MaterialStep14 = new MaterialStep , $add_14(f_MaterialStep14, (f_MaterialPanel15 = new MaterialPanel , f_MaterialPanel15.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel15.colorsMixin && (f_MaterialPanel15.colorsMixin = new ColorsMixin(f_MaterialPanel15)) , f_MaterialPanel15.colorsMixin), 'grey lighten-2') , f_MaterialPanel15.element.style['width'] = '100%' , f_MaterialPanel15)) , $add_14(f_MaterialStep14, (btnContinue11 = new MaterialButton , btnContinue11.span_0.setText('Continue to Step 2') , $add_13(btnContinue11, btnContinue11.span_0) , $setTextColor((!btnContinue11.colorsMixin && (btnContinue11.colorsMixin = new ColorsMixin(btnContinue11)) , btnContinue11.colorsMixin), 'white') , $setBackgroundColor((!btnContinue11.colorsMixin && (btnContinue11.colorsMixin = new ColorsMixin(btnContinue11)) , btnContinue11.colorsMixin), 'blue') , btnContinue11.element.style['marginTop'] = '12.0px' , $setWaves(btnContinue11, DEFAULT_6) , $setGrid((!btnContinue11.gridMixin && (btnContinue11.gridMixin = new GridMixin(btnContinue11)) , btnContinue11.gridMixin), 'l4') , $addDomHandler(btnContinue11, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , btnContinue11)) , $add_14(f_MaterialStep14, (btnPrev11 = new MaterialButton , btnPrev11.span_0.setText('Cancel') , $add_13(btnPrev11, btnPrev11.span_0) , btnPrev11.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev11, DEFAULT_6) , $setGrid((!btnPrev11.gridMixin && (btnPrev11.gridMixin = new GridMixin(btnPrev11)) , btnPrev11.gridMixin), 'l4') , $setType(btnPrev11, FLAT) , $addDomHandler(btnPrev11, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_1)) , btnPrev11)) , $setInnerHTML($getElement(f_MaterialStep14.divTitle), 'Name of Step 1') , $setDescription(f_MaterialStep14, 'Description of Step 1') , $setInnerHTML($getElement(f_MaterialStep14.divCircle), '1') , f_MaterialStep14)) , $add_13(stepperCard, (f_MaterialStep16 = new MaterialStep , $add_14(f_MaterialStep16, (f_MaterialPanel17 = new MaterialPanel , f_MaterialPanel17.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel17.colorsMixin && (f_MaterialPanel17.colorsMixin = new ColorsMixin(f_MaterialPanel17)) , f_MaterialPanel17.colorsMixin), 'grey lighten-2') , f_MaterialPanel17.element.style['width'] = '100%' , f_MaterialPanel17)) , $add_14(f_MaterialStep16, (btnContinue21 = new MaterialButton , btnContinue21.span_0.setText('Continue to Step 3') , $add_13(btnContinue21, btnContinue21.span_0) , $setTextColor((!btnContinue21.colorsMixin && (btnContinue21.colorsMixin = new ColorsMixin(btnContinue21)) , btnContinue21.colorsMixin), 'white') , $setBackgroundColor((!btnContinue21.colorsMixin && (btnContinue21.colorsMixin = new ColorsMixin(btnContinue21)) , btnContinue21.colorsMixin), 'blue') , btnContinue21.element.style['marginTop'] = '12.0px' , $setWaves(btnContinue21, DEFAULT_6) , $setGrid((!btnContinue21.gridMixin && (btnContinue21.gridMixin = new GridMixin(btnContinue21)) , btnContinue21.gridMixin), 'l4') , $addDomHandler(btnContinue21, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , btnContinue21)) , $add_14(f_MaterialStep16, (btnPrev21 = new MaterialButton , btnPrev21.span_0.setText('Cancel') , $add_13(btnPrev21, btnPrev21.span_0) , btnPrev21.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev21, DEFAULT_6) , $setGrid((!btnPrev21.gridMixin && (btnPrev21.gridMixin = new GridMixin(btnPrev21)) , btnPrev21.gridMixin), 'l4') , $setType(btnPrev21, FLAT) , $addDomHandler(btnPrev21, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_1)) , btnPrev21)) , $setInnerHTML($getElement(f_MaterialStep16.divTitle), 'Name of Step 2') , $setDescription(f_MaterialStep16, 'Description of Step 1') , $setInnerHTML($getElement(f_MaterialStep16.divCircle), '2') , f_MaterialStep16)) , $add_13(stepperCard, (f_MaterialStep18 = new MaterialStep , $add_14(f_MaterialStep18, (f_MaterialPanel19 = new MaterialPanel , f_MaterialPanel19.setHeight_0('300px') , $setBackgroundColor((!f_MaterialPanel19.colorsMixin && (f_MaterialPanel19.colorsMixin = new ColorsMixin(f_MaterialPanel19)) , f_MaterialPanel19.colorsMixin), 'grey lighten-2') , f_MaterialPanel19.element.style['width'] = '100%' , f_MaterialPanel19)) , $add_14(f_MaterialStep18, (btnContinue31 = new MaterialButton , btnContinue31.span_0.setText('Finish') , $add_13(btnContinue31, btnContinue31.span_0) , $setTextColor((!btnContinue31.colorsMixin && (btnContinue31.colorsMixin = new ColorsMixin(btnContinue31)) , btnContinue31.colorsMixin), 'white') , $setBackgroundColor((!btnContinue31.colorsMixin && (btnContinue31.colorsMixin = new ColorsMixin(btnContinue31)) , btnContinue31.colorsMixin), 'blue') , btnContinue31.element.style['marginTop'] = '12.0px' , $setWaves(btnContinue31, DEFAULT_6) , $setGrid((!btnContinue31.gridMixin && (btnContinue31.gridMixin = new GridMixin(btnContinue31)) , btnContinue31.gridMixin), 'l4') , $addDomHandler(btnContinue31, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4, (null , TYPE_1)) , $addDomHandler(btnContinue31, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6, (null , TYPE_1)) , btnContinue31)) , $add_14(f_MaterialStep18, (btnPrev31 = new MaterialButton , btnPrev31.span_0.setText('Cancel') , $add_13(btnPrev31, btnPrev31.span_0) , btnPrev31.element.style['marginTop'] = '12.0px' , $setWaves(btnPrev31, DEFAULT_6) , $setGrid((!btnPrev31.gridMixin && (btnPrev31.gridMixin = new GridMixin(btnPrev31)) , btnPrev31.gridMixin), 'l4') , $setType(btnPrev31, FLAT) , $addDomHandler(btnPrev31, this$static.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5, (null , TYPE_1)) , btnPrev31)) , $setInnerHTML($getElement(f_MaterialStep18.divTitle), 'Name of Step 3') , $setDescription(f_MaterialStep18, 'Description of Step 1') , $setInnerHTML($getElement(f_MaterialStep18.divCircle), '3') , f_MaterialStep18)) , $setShadow((!stepperCard.shadowMixin && (stepperCard.shadowMixin = new ShadowMixin(stepperCard)) , stepperCard.shadowMixin), 1) , this$static.owner.stepperCard = stepperCard , stepperCard));\n  $add_13(f_MaterialPanel1, (f_PrettyPre20 = new PrettyPre , $setHTML(f_PrettyPre20, (sb_2 = new StringBuilder , sb_2.string += '\\u2003&lt;m.addins:MaterialStepper ui:field=\"stepperCard\" shadow=\"1\"&gt;<br> \\u2003&lt;!-- Step components here --&gt;<br> &lt;/m.addins:MaterialStepper&gt;<br>' , new OnlyToBeUsedInGeneratedCodeStringBlessedAsSafeHtml(sb_2.string)).html) , setStyleName(f_PrettyPre20.element, 'lang-xml', true) , setStyleName(f_PrettyPre20.element, 'z-depth-1', true) , f_PrettyPre20));\n  return f_MaterialPanel1;\n}\n\nfunction SteppersView_BinderImpl$Widgets(owner){\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames1 = new SteppersView_BinderImpl$Widgets$1(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames2 = new SteppersView_BinderImpl$Widgets$2(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames3 = new SteppersView_BinderImpl$Widgets$3(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames4 = new SteppersView_BinderImpl$Widgets$4(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames5 = new SteppersView_BinderImpl$Widgets$5(this);\n  this.handlerMethodWithNameVeryUnlikelyToCollideWithUserFieldNames6 = new SteppersView_BinderImpl$Widgets$6(this);\n  this.owner = owner;\n}\n\ndefineClass(857, 1, {}, SteppersView_BinderImpl$Widgets);\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets', 857);\nfunction SteppersView_BinderImpl$Widgets$1(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(858, 1, $intern_50, SteppersView_BinderImpl$Widgets$1);\n_.onClick = function onClick_13(event_0){\n  $nextStep(this.this$11.owner.stepper);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$1_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/1', 858);\nfunction SteppersView_BinderImpl$Widgets$2(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(859, 1, $intern_50, SteppersView_BinderImpl$Widgets$2);\n_.onClick = function onClick_14(event_0){\n  $prevStep(this.this$11.owner.stepper);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$2_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/2', 859);\nfunction SteppersView_BinderImpl$Widgets$3(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(860, 1, $intern_50, SteppersView_BinderImpl$Widgets$3);\n_.onClick = function onClick_15(event_0){\n  $onFinish(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$3_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/3', 860);\nfunction SteppersView_BinderImpl$Widgets$4(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(861, 1, $intern_50, SteppersView_BinderImpl$Widgets$4);\n_.onClick = function onClick_16(event_0){\n  $nextStep(this.this$11.owner.stepperCard);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$4_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/4', 861);\nfunction SteppersView_BinderImpl$Widgets$5(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(862, 1, $intern_50, SteppersView_BinderImpl$Widgets$5);\n_.onClick = function onClick_17(event_0){\n  $prevStep(this.this$11.owner.stepperCard);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$5_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/5', 862);\nfunction SteppersView_BinderImpl$Widgets$6(this$1){\n  this.this$11 = this$1;\n}\n\ndefineClass(863, 1, $intern_50, SteppersView_BinderImpl$Widgets$6);\n_.onClick = function onClick_18(event_0){\n  $onFinish1(this.this$11.owner);\n}\n;\nvar Lgwt_material_design_demo_client_application_addins_steppers_SteppersView_1BinderImpl$Widgets$6_2_classLit = createForClass('gwt.material.design.demo.client.application.addins.steppers', 'SteppersView_BinderImpl/Widgets/6', 863);\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$) {\n    result = new SteppersPresenter($get_Key$type$com$google$web$bindery$event$shared$EventBus$_annotation$$none$$($getFragment_com_google_web_bindery_event_shared(this$static.injector)), $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$(this$static), $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$MyProxy$_annotation$$none$$(this$static));\n    $automaticBind(($getFragment_com_gwtplatform_mvp_client(this$static.injector) , result), $get_Key$type$com$gwtplatform$mvp$client$AutobindDisable$_annotation$$none$$($getFragment_com_gwtplatform_mvp_client(this$static.injector)));\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$;\n}\n\nfunction $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$(this$static){\n  var result;\n  if (!this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$) {\n    result = new SteppersView(new SteppersView_BinderImpl);\n    this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$ = result;\n  }\n  return this$static.singleton_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersView$_annotation$$none$$;\n}\n\ndefineClass(474, 1, $intern_55);\n_.onSuccess_0 = function onSuccess_1(){\n  $onSuccess_0(this.val$callback2, $get_Key$type$gwt$material$design$demo$client$application$addins$steppers$SteppersPresenter$_annotation$$none$$(this.this$11.this$01));\n}\n;\n$entry(onLoad_0)(2);\n\n//# sourceURL=gwtmaterialdemo-2.js\n")
