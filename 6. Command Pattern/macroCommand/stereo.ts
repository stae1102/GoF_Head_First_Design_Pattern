export class Stereo {
  location: string;

  public constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(`${this.location} 오디오가 켜졌습니다.`);
  }

  public off(): void {
    console.log(`${this.location} 오디오가 꺼졌습니다.`);
  }

  public setCD(): void {
    console.log(`${this.location} CD를 설정합니다.`);
  }

  public setDVD(): void {
    console.log(`${this.location} DVD를 설정합니다.`);
  }

  public setRadio(): void {
    console.log(`${this.location} 라디오를 설정합니다.`);
  }

  public setVolume(volume: number): void {
    console.log(`${this.location} 볼륨을 ${volume}(으)로 설정합니다.`);
  }
}
