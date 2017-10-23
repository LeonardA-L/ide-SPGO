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
    this.initSpatialized();

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
    if (this.playloop && !this.playing && new Date().getTime() - this.lastPlay.getTime() > 15000) {
      const rand = Math.floor(Math.random() * this.audios.length);
      console.log('Playing sound', rand);
      let audio = this.audios[rand];
      if (audio) {
        this.playing = true;
        audio.dom.currentTime = 0;
        audio.dom.play();

      }
    }
  }

  private initSpatialized() {
    const sources = [
      {
        src: CONFIG.root + '/assets/sounds/amb_lake.mp3',
        x: 600,
        y: 450,
        fac: 0.2,
        elem: null,
        audio: null
      },
      {
        src: CONFIG.root + '/assets/sounds/amb_forest.mp3',
        x: 50,
        y: 500,
        fac: 1,
        elem: null,
        audio: null
      },
    ];
    for (let i in sources) {
      if (sources.hasOwnProperty(i)) {
        let source = sources[i];
        let elem = document.createElement('div');
        source.elem = elem;
        let audio = document.createElement('audio');
        audio.src = source.src;
        audio.loop = true;
        audio.currentTime = 0;
        audio.play();
        audio.volume = 0.1;
        source.audio = audio;
        document.getElementById('elements-wrapper').appendChild(elem);
      }
    }
    let distanceMax = 600;
    let decrease = 1 / (distanceMax * distanceMax);
    document.body.onmousemove = function(e) {
      for (let i in sources) {
        if (sources.hasOwnProperty(i)) {
          let source = sources[i];
          let distance = Math.sqrt((e.clientX - source.x) * (e.clientX - source.x) + (e.clientY - source.y) * (e.clientY - source.y));
          let newVal = 1 - Math.min(1, distance * distance * decrease);
          newVal = Math.min(1, source.fac * newVal);
          source.audio.volume = newVal;
        }
      }
    };
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
