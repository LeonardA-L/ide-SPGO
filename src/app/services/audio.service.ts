// Crapette game service

import { Injectable, Inject } from '@angular/core';

import { AppState } from './../app.service';
import { CONFIG } from './../environment';
import { Broadcaster } from './broadcast.service';

@Injectable()
export class AudioService {
  public audios;
  public lastPlay = new Date();
  private inited = false;
  private playing = false;
  private playloop = false;

  constructor(
    private broadcaster: Broadcaster,
  ) {
    const service = this;
    this.broadcaster.on<any>('noOverlay').subscribe((event) => service.play());
  }

  public init() {
    if (this.inited) {
      return;
    }
    this.audios = [];
    this.addAudio(CONFIG.root + '/assets/sounds/ex1.mp3', 1);
    this.addAudio(CONFIG.root + '/assets/sounds/ex2.mp3', 1);
    this.addAudio(CONFIG.root + '/assets/sounds/ex3.mp3', 1);
    this.addAudio(CONFIG.root + '/assets/sounds/ex4.mp3', 0.7);
    this.addAudio(CONFIG.root + '/assets/sounds/ex5.mp3', 0.7);
    this.inited = true;
    const service = this;
  }

  public play() {
    if (this.playloop) {
      return;
    }
    console.log('audioPlay');
    this.playloop = true;

    const service = this;
    function time() {
      setTimeout(function() {
        service.update();
        time();
      }, 2000);
    }
    time();
  }

  private update() {
    if (this.playloop && !this.playing && new Date().getTime() - this.lastPlay.getTime() > 10000) {
      let audio = this.audios[Math.floor(Math.random() * this.audios.length)];
      if (audio) {
        this.playing = true;
        audio.dom.currentTime = 0;
        audio.dom.play();

      }
    }
  }

  private addAudio(_src, _master) {
    let audio = {
      src: _src,
      dom: document.createElement('audio') as any,
      master: _master,
    };
    audio.dom.src = _src;
    audio.dom.volume = CONFIG.audio.master * _master;
    const service = this;
    audio.dom.onended = function() {
      service.lastPlay = new Date();
      service.playing = false;
    };
    /*
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
    */

    this.audios.push(audio);
  }
}
