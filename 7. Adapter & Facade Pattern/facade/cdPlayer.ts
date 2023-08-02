import { Amplifier } from './amplifier';

export class CdPlayer {
  description: string;
  currentTrack: number;
  amplifier: Amplifier;
  title: string | null;

  public constructor(description: string, amplifier: Amplifier) {
    this.description = description;
    this.amplifier = amplifier;
  }

  public on(): void {
    console.log(`${this.description} ON`);
  }

  public off(): void {
    console.log(`${this.description} OFF`);
  }

  public eject(): void {
    this.title = null;
    console.log(`${this.description} CD를 꺼냅니다.`);
  }

  public play(titleOrTrack: string | number): void {
    if (typeof titleOrTrack === 'string') {
      const title = titleOrTrack;
      this.title = title;
      this.currentTrack = 0;
      console.log(`${this.description} ${this.title} 타이틀을 실행중입니다.`);
      return;
    }

    const track = titleOrTrack;
    if (this.title === null) {
      console.log(
        `${this.description} CD가 없어 ${track} 트랙을 실행할 수 없습니다.`
      );
    } else {
      this.currentTrack = track;
      console.log(
        `${this.description} ${this.currentTrack} 트랙을 실행합니다.`
      );
    }
  }

  public stop(): void {
    this.currentTrack = 0;
    console.log(`${this.description} 정지합니다.`);
  }

  public pause(): void {
    console.log(`${this.description} ${this.title} 타이틀을 일시정지합니다.`);
  }

  public toString(): string {
    return this.description;
  }
}
