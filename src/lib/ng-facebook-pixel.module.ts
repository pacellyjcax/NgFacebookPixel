/**
 * @author [Pacelly J. C. A. Xavier]
 * @email [pacellyjcax@gmail.com]
 * @create date 2019-10-30 21:48:13
 * @modify date 2019-10-30 21:50:01
 * @desc Facebook Pixel Tracking integration module for Angular
 */
import { NgModule, ModuleWithProviders, Provider } from '@angular/core';
import { NgFacebookPixelService } from './ng-facebook-pixel.service';
import { FacebookPixelConfig } from '../model/facebook-pixel-config.model';

@NgModule({
  declarations: [],
  imports: [],
  exports: [],
  providers: []
})
export class NgFacebookPixelModule {
    static forRoot(facebookPixelConfig: FacebookPixelConfig): ModuleWithProviders {
      return {
        ngModule: NgFacebookPixelModule,
        providers: [
          { provide: FacebookPixelConfig, useValue: facebookPixelConfig },
          { provide: NgFacebookPixelService, useValue: new NgFacebookPixelService(facebookPixelConfig) }
        ]
      };
    }
  }

