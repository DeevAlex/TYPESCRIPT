interface VideoPlayerElements {
  videoPlayer: HTMLVideoElement;
  play: HTMLElement;
  back: HTMLElement;
  volume: HTMLElement;
  advance: HTMLElement;
  fullscreen: HTMLElement;
}

interface VideoPlayerProtocol {
  playToggle(): void;
  backToggle(): void;
  advanceToggle(): void;
  volumeLigarDesligar(): void;
  fullscreenToggle(): void;
  iniciarEventos(): void;
}

export default class VideoPlayer implements VideoPlayerProtocol {
  private videoPlayer: HTMLVideoElement;
  private play: HTMLElement;
  private back: HTMLElement;
  private volume: HTMLElement;
  private advance: HTMLElement;
  private fullscreen: HTMLElement;

  constructor(videoPlayerElements: VideoPlayerElements) {
    this.videoPlayer = videoPlayerElements.videoPlayer;
    this.play = videoPlayerElements.play;
    this.back = videoPlayerElements.back;
    this.volume = videoPlayerElements.volume;
    this.advance = videoPlayerElements.advance;
    this.fullscreen = videoPlayerElements.fullscreen;
  }

  iniciarEventos(): void {
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

  playToggle(): void {
    if (this.videoPlayer.paused) {
      this.videoPlayer.play();
      this.play.removeAttribute('class');
      this.play.setAttribute('class', 'icons pause fa-solid fa-pause');
    } else {
      this.play.removeAttribute('class');
      this.play.setAttribute('class', 'icons pause fa-solid fa-play');
      this.videoPlayer.pause();
    }
  }
  backToggle(): void {
    if (this.videoPlayer.currentTime > 0) {
      this.videoPlayer.currentTime -= 5;
      this.back.classList.add('animacaoVoltar');
      setTimeout(() => {
        this.back.classList.remove('animacaoVoltar');
      }, 600);
    } else {
      return;
    }
  }
  advanceToggle(): void {
    if (this.videoPlayer.currentTime > 0) {
      this.advance.classList.add('animacaoAvancar');
      setTimeout(() => {
        this.advance.classList.remove('animacaoAvancar');
      }, 600);
      this.videoPlayer.currentTime += 5;
    } else {
      return;
    }
  }
  fullscreenToggle(): void {
    this.videoPlayer?.requestFullscreen();
  }

  volumeLigarDesligar(): void {
    if (this.videoPlayer.muted) {
      this.videoPlayer.muted = false;
      this.volume.removeAttribute('class');
      this.volume.setAttribute(
        'class',
        'icons volumeOn fa-solid fa-volume-high',
      );
    } else {
      this.videoPlayer.muted = true;
      this.volume.removeAttribute('class');
      this.volume.setAttribute(
        'class',
        'icons fa-solid volumeOn fa-volume-off',
      );
    }
  }
}

const videoplayer = new VideoPlayer({
  videoPlayer: document.querySelector('.video') as HTMLVideoElement,
  play: document.querySelector('.play') as HTMLElement,
  back: document.querySelector('.back') as HTMLElement,
  advance: document.querySelector('.advance') as HTMLElement,
  volume: document.querySelector('.volumeOn') as HTMLElement,
  fullscreen: document.querySelector('.fullscreen') as HTMLElement,
});

videoplayer.iniciarEventos();
