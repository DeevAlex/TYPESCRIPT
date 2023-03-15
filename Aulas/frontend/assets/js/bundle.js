/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it uses a non-standard name for the exports (exports).
(() => {
var exports = __webpack_exports__;
/*!****************************************!*\
  !*** ./src/VideoPlayer/VideoPlayer.ts ***!
  \****************************************/

Object.defineProperty(exports, "__esModule", ({ value: true }));
class VideoPlayer {
    constructor(videoPlayerElements) {
        this.videoPlayer = videoPlayerElements.videoPlayer;
        this.play = videoPlayerElements.play;
        this.back = videoPlayerElements.back;
        this.volume = videoPlayerElements.volume;
        this.advance = videoPlayerElements.advance;
        this.fullscreen = videoPlayerElements.fullscreen;
    }
    iniciarEventos() {
        this.play.addEventListener('click', () => {
            this.playToggle();
        });
        this.back.addEventListener('click', () => {
            this.backToggle();
        });
        this.advance.addEventListener('click', () => {
            this.advanceToggle();
        });
        this.volume.addEventListener('click', () => {
            this.volumeLigarDesligar();
        });
        this.fullscreen.addEventListener('click', () => {
            this.fullscreenToggle();
        });
    }
    playToggle() {
        if (this.videoPlayer.paused) {
            this.videoPlayer.play();
            this.play.removeAttribute('class');
            this.play.setAttribute('class', 'icons pause fa-solid fa-pause');
        }
        else {
            this.play.removeAttribute('class');
            this.play.setAttribute('class', 'icons pause fa-solid fa-play');
            this.videoPlayer.pause();
        }
    }
    backToggle() {
        if (this.videoPlayer.currentTime > 0) {
            this.videoPlayer.currentTime -= 5;
            this.back.classList.add('animacaoVoltar');
            setTimeout(() => {
                this.back.classList.remove('animacaoVoltar');
            }, 600);
        }
        else {
            return;
        }
    }
    advanceToggle() {
        if (this.videoPlayer.currentTime > 0) {
            this.advance.classList.add('animacaoAvancar');
            setTimeout(() => {
                this.advance.classList.remove('animacaoAvancar');
            }, 600);
            this.videoPlayer.currentTime += 5;
        }
        else {
            return;
        }
    }
    fullscreenToggle() {
        var _a;
        (_a = this.videoPlayer) === null || _a === void 0 ? void 0 : _a.requestFullscreen();
    }
    volumeLigarDesligar() {
        if (this.videoPlayer.muted) {
            this.videoPlayer.muted = false;
            this.volume.removeAttribute('class');
            this.volume.setAttribute('class', 'icons volumeOn fa-solid fa-volume-high');
        }
        else {
            this.videoPlayer.muted = true;
            this.volume.removeAttribute('class');
            this.volume.setAttribute('class', 'icons fa-solid volumeOn fa-volume-off');
        }
    }
}
exports["default"] = VideoPlayer;
const videoplayer = new VideoPlayer({
    videoPlayer: document.querySelector('.video'),
    play: document.querySelector('.play'),
    back: document.querySelector('.back'),
    advance: document.querySelector('.advance'),
    volume: document.querySelector('.volumeOn'),
    fullscreen: document.querySelector('.fullscreen'),
});
videoplayer.iniciarEventos();

})();

/******/ })()
;
//# sourceMappingURL=bundle.js.map