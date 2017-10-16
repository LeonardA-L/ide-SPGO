// Crapette game service

import { Injectable, Inject } from '@angular/core';

import { AppState } from './../app.service';
import { CONFIG } from './../environment';
import { Broadcaster } from './broadcast.service';

@Injectable()
export class AudioService {
  public audios;

  public init() {
    this.audios = [];
    this.addAudio(CONFIG.root + '/assets/sounds/SPGO - 15_10_2017 02.16.wav');
  }

  private addAudio(_src) {
    let audio = {
      src: _src,
      dom: document.createElement('audio') as any,
    };
    audio.dom.src = _src;
    audio.dom.volume = 0;

    audio.dom.ontimeupdate = function() {
      if (this.currentTime >= this.duration - CONFIG.audio.ramp) {
        this.volume = (this.duration - this.currentTime) / CONFIG.audio.ramp;
      } else if (this.currentTime <= CONFIG.audio.ramp) {
        this.volume = this.currentTime / CONFIG.audio.ramp;
      } else {
        this.volume = 1;
      }
      this.volume *= CONFIG.audio.master;
    };
    audio.dom.play();

    this.audios.push(audio);
  }
}
