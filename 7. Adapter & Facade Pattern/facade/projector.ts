import { StreamingPlayer } from './streamingPlayer';

export class Projector {
  description: string;
  player: StreamingPlayer;

  public constructor(description: string, player: StreamingPlayer) {
    this.description = description;
    this.player = player;
  }

  public on(): void {
    console.log(`${this.description} ON`);
  }

  public off(): void {
    console.log(`${this.description} OFF`);
  }

  public wideScreenMode(): void {
    console.log(
      `${this.description} 와이드 스크린 모드로 설정합니다. (16x9 비율)`
    );
  }

  public tvMode(): void {
    console.log(`${this.description} 티비 모드로 설정합니다. (4x3 비율)`);
  }

  public toString(): string {
    return this.description;
  }
}
