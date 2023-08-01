export class Stereo {
  public constructor() {}

  public on(): void {
    console.log('오디오가 켜졌습니다.');
  }

  public off(): void {
    console.log('오디오가 꺼졌습니다.');
  }

  public setCd(): void {
    console.log('CD를 설정합니다.');
  }

  public setDvd(): void {
    console.log('DVD를 설정합니다.');
  }

  public setRadio(): void {
    console.log('라디오를 설정합니다.');
  }

  public setVolume(): void {
    console.log('볼륨을 설정합니다.');
  }
}
