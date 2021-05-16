import { ApplicationRef, enableProdMode } from '@angular/core';
import { enableDebugTools } from '@angular/platform-browser';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { environment } from '@env/environment';
import { APP_CONFIG } from '@env/ienvironment';
import { AppModule } from './app/app.module';

if (environment.production) {
  enableProdMode();
  // disableDebugTools();
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetch(environment.REMOTE_CONFIG_URL);
    const config = await data.json();

    const module = await platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config.baseUrl }])
      .bootstrapModule(AppModule);

    if (environment.enableDebugTools) {
      // enables DebugTools to profile `Change Detection` cycles.
      // run app for for 500ms
      // then in dev tools run: ng.profiler.timeChangeDetection();
      enableDebugTools(module.injector.get(ApplicationRef).components[0]);
    }
  } catch (error) {
    console.error(error);
  }
});
