import { Amplifier } from './amplifier';

export class StreamingPlayer {
  description: string;
  currentChapter: number;
  amplifier: Amplifier;
  movie: string;

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

  public play(movieOrChapter: string | number): void {
    if (typeof movieOrChapter === 'string') {
      const movie = movieOrChapter;
      this.movie = movie;
      this.currentChapter = 0;
      console.log(`${this.description} 재생중 "${movieOrChapter}"`);
      return;
    }

    const chapter = movieOrChapter;
    if (this.movie === null) {
      console.log(
        `${this.description} 영화가 선택되지 않아 ${chapter} 챕터를 실행할 수 없습니다.`
      );
    } else {
      this.currentChapter = chapter;
      console.log(
        `${this.description} ${this.movie} 영화의 ${this.currentChapter} 챕터를 실행중입니다.`
      );
    }
  }

  public stop(): void {
    this.currentChapter = 0;
    console.log(`${this.description} ${this.movie} 영화를 정지했습니다.}`);
  }

  public pause(): void {
    console.log(`${this.description} ${this.movie} 영화를 일시정지했습니다.`);
  }

  public setTwoChannelAudio(): void {
    console.log(`${this.description} 2채널 오디오를 설정했습니다.`);
  }

  public setSurroundAudio(): void {
    console.log(`${this.description} 서라운드 오디오를 설정했습니다.`);
  }

  public toString(): string {
    return this.description;
  }
}
