import { enableProdMode } from '@angular/core';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';
import { environment } from '@env/environment';
import { APP_CONFIG } from '@env/ienvironment';

if (environment.production) {
  enableProdMode();
}

document.addEventListener('DOMContentLoaded', async () => {
  try {
    const data = await fetch(environment.REMOTE_CONFIG_URL);
    const config = await data.json();

    await platformBrowserDynamic([{ provide: APP_CONFIG, useValue: config.baseUrl }]).bootstrapModule(AppModule);
  } catch (error) {
    console.error(error);
  }
});
