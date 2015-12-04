package gwt.material.design.demo.client.application.addins.steppers;

import com.google.gwt.event.dom.client.ClickEvent;
import com.google.gwt.uibinder.client.UiBinder;
import com.google.gwt.uibinder.client.UiField;
import com.google.gwt.uibinder.client.UiHandler;
import com.google.gwt.user.client.ui.Widget;
import com.gwtplatform.mvp.client.ViewImpl;
import gwt.material.design.addins.client.ui.MaterialStepper;
import gwt.material.design.client.ui.MaterialModal;
import gwt.material.design.client.ui.MaterialToast;

import javax.inject.Inject;


public class SteppersView extends ViewImpl implements SteppersPresenter.MyView {
    interface Binder extends UiBinder<Widget, SteppersView> {
    }

    @UiField
    MaterialStepper stepper, stepperCard, stepperModal, stepperHori;

    @UiField
    MaterialModal modalStepper;

    @Inject
    SteppersView(Binder uiBinder) {
        initWidget(uiBinder.createAndBindUi(this));
    }

    @UiHandler({"btnContinue1", "btnContinue2", "btnContinue3"})
    void onNextStep(ClickEvent e){
        stepper.nextStep();
    }

    @UiHandler({"btnPrev1", "btnPrev2", "btnPrev3"})
    void onPrevStep(ClickEvent e){
        stepper.prevStep();
    }

    @UiHandler("btnContinue3")
    void onFinish(ClickEvent e){
        MaterialToast.fireToast("All done.");
        stepper.goToStep(1);
    }

    @UiHandler({"btnContinue01", "btnContinue02", "btnContinue03"})
    void onNextStep0(ClickEvent e){
        stepperHori.nextStep();
    }

    @UiHandler({"btnPrev01", "btnPrev02", "btnPrev03"})
    void onPrevStep0(ClickEvent e){
        stepperHori.prevStep();
    }

    @UiHandler("btnContinue03")
    void onFinish0(ClickEvent e){
        MaterialToast.fireToast("All done.");
        stepperHori.goToStep(1);
    }

    @UiHandler({"btnContinue11", "btnContinue12", "btnContinue13"})
    void onNextStep1(ClickEvent e){
        stepperCard.nextStep();
    }

    @UiHandler({"btnPrev11", "btnPrev12", "btnPrev13"})
    void onPrevStep1(ClickEvent e){
        stepperCard.prevStep();
    }

    @UiHandler("btnContinue13")
    void onFinish1(ClickEvent e){
        MaterialToast.fireToast("All done.");
        stepperCard.goToStep(1);
    }

    @UiHandler("btnModal")
    void onOpenModal(ClickEvent e){
        modalStepper.openModal();
    }

    @UiHandler({"btnContinue31", "btnContinue32", "btnContinue33"})
    void onNextStep2(ClickEvent e){
        stepperModal.nextStep();
    }

    @UiHandler({"btnPrev31", "btnPrev32", "btnPrev33"})
    void onPrevStep2(ClickEvent e){
        stepperModal.prevStep();
    }

    @UiHandler("btnContinue33")
    void onFinish3(ClickEvent e){
        MaterialToast.fireToast("All done.");
        modalStepper.closeModal();
    }
}
