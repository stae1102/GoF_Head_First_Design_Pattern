export class TV {
  location: string;
  channel: number;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(`${this.location} TV를 켰습니다.`);
  }

  public off(): void {
    console.log(`${this.location} TV를 껐습니다.`);
  }

  public setInputChannel(): void {
    this.channel = 3;
    console.log(`${this.location} TV 채널을 DVD로 설정했습니다.`);
  }
}
