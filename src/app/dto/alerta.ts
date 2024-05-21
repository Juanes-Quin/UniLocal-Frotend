import { bootstrapApplication } from "@angular/platform-browser";
import { AppComponent } from "../app.component";
import { appConfig } from "../app.config";

bootstrapApplication(AppComponent, appConfig)
  .catch((err) => console.error(err));
export interface Alerta {
  mensaje: string;
  tipo: string;
}
