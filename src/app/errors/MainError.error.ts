import { ErrorHandler } from "@angular/core";


// SERVICES
import { CentralService } from "../services/central.service";


export class MainError extends ErrorHandler {
  private service: CentralService = new CentralService();

  handleError() {
    console.log("MainError Class!!!!!");
    // this.service.throwUnexpectedError();
    return;
  }
} 