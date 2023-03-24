import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { LoggerService } from "./Services/logger.service";
import { AdduserComponent } from "./adduser/adduser.component";

@NgModule({
  declarations: [AppComponent, AdduserComponent],
  imports: [BrowserModule, FormsModule],
  providers: [LoggerService],
  bootstrap: [AppComponent]
})
export class AppModule {}
