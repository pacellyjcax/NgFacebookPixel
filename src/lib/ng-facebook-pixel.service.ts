/**
 * @author [Pacelly J. C. A. Xavier]
 * @email [pacellyjcax@gmail.com]
 * @create date 2019-10-30 21:48:13
 * @modify date 2019-10-30 21:50:01
 * @desc Facebook Pixel Tracking integration service for Angular
 */
import { Injectable } from '@angular/core';
import { FacebookPixelConfig } from '../model/facebook-pixel-config.model';

@Injectable({
  providedIn: 'root'
})
export class NgFacebookPixelService {

  constructor(private facebookPixelConfig: FacebookPixelConfig) {
    // tslint:disable-next-line: only-arrow-functions
    (function(f: any, b, e, v, n, t, s) {
          // tslint:disable-next-line: only-arrow-functions
          if (f.fbq) { return; } n = f.fbq = function() {
              n.callMethod ?
                  n.callMethod.apply(n, arguments) : n.queue.push(arguments);
          // tslint:disable-next-line: align
          }; if (!f._fbq) { f._fbq = n; }
          n.push = n; n.loaded = !0; n.version = '2.0'; n.queue = []; t = b.createElement(e); t.async = !0;
          t.src = v; s = b.getElementsByTagName(e)[0]; s.parentNode.insertBefore(t, s);
      })(window, document, 'script', 'https://connect.facebook.net/en_US/fbevents.js');
    (window as any).fbq('init', facebookPixelConfig.pixelId);
  }

  eventTrack(type: string, value: any) {
    (window as any).fbq('trackCustom', type, {detail: value});
  }
}
