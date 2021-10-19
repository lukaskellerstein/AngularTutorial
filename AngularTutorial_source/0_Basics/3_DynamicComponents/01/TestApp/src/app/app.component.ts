import { Component, ViewChild, ElementRef, ViewContainerRef, ComponentFactoryResolver, ComponentRef } from '@angular/core';
import { SimpleAlertViewComponent } from './simple-alert-view/simple-alert-view.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  // TEMPLATE DRIVEN COMPONENT
  // @ViewChild(SimpleAlertViewComponent) alert: SimpleAlertViewComponent;

  // DYNAMIC COMPONENT
  @ViewChild("alert", {read:ViewContainerRef}) alertVC: ViewContainerRef;
  alertInstance: ComponentRef<SimpleAlertViewComponent> = null;

  constructor(private resolver: ComponentFactoryResolver){

  }

  showTimerEndAlert(){
    console.log("END");

    const factory = this.resolver.resolveComponentFactory(SimpleAlertViewComponent);
    this.alertInstance = this.alertVC.createComponent(factory)

    this.alertInstance.instance.show();
    this.alertInstance.instance.title = "Hello";
    this.alertInstance.instance.message = "from dynamic component";
    
    this.alertInstance.instance.onClose.subscribe(() => {
      this.alertInstance.destroy();
    });
    
  }

}
