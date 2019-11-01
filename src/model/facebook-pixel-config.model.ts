import { Injectable } from '@angular/core';

@Injectable()
export class FacebookPixelConfig {
  constructor(
    public pixelId: string
  ) {}
}
