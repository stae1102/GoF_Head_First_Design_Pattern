import { StreamingPlayer } from './streamingPlayer';
import { Tuner } from './tuner';

export class Amplifier {
  description: string;
  tuner: Tuner;
  player: StreamingPlayer;

  public constructor(description: string) {
    this.description = description;
  }

  public on(): void {
    console.log(`${this.description} ON`);
  }

  public off(): void {
    console.log(`${this.description} OFF`);
  }

  public setStereoSound(): void {
    console.log(`${this.description} 스테레오 모드 ON`);
  }

  public setSurroundSound(): void {
    console.log(
      `${this.description} 서라운드 사운드 ON(5개의 스피커와 1개의 서브 우퍼)`
    );
  }

  public setVolume(level: number): void {
    console.log(`${this.description} 볼륨을 ${level}로 설정합니다.`);
  }

  public setTuner(tuner: Tuner): void {
    console.log(`${this.description} 튜너를 ${this.player}로 설정합니다.`);
    this.tuner = tuner;
  }

  public setStreamingPlayer(player: StreamingPlayer): void {
    console.log(`${this.description} 재생기를 ${player}로 설정합니다.`);
    this.player = player;
  }

  public toString(): string {
    return this.description;
  }
}
