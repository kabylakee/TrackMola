import {NgModule} from "@angular/core";
import {MainComponent} from "./main.component";
import {MainRoutingModule} from "./main.routing";

@NgModule({
  declarations: [MainComponent],
  exports: [MainComponent],
  providers: [],
  imports: [
    MainRoutingModule
  ]
})
export class MainModule {}
