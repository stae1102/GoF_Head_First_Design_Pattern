export class Hottub {
  onState: boolean;
  temperature: number;

  public constructor() {}

  public on(): void {
    this.onState = true;
    console.log('욕조를 세팅합니다.');
  }

  public off(): void {
    this.onState = false;
    console.log('욕조 세팅을 종료합니다.');
  }

  public circulate(): void {
    if (this.onState) {
      console.log('욕조 거품이 생기고 있습니다.');
    }
  }

  public jetsOn(): void {
    if (this.onState) {
      console.log('욕조 제트기 활성화 되었습니다.');
    }
  }

  public jetsOff(): void {
    if (this.onState) {
      console.log('욕조 제트가 종료되었습니다.');
    }
  }

  public setTemperature(temperature: number): void {
    if (temperature > this.temperature) {
      console.log(`욕조를 ${temperature}도로 높이는 중입니다.`);
    } else {
      console.log(`욕조를 ${temperature}도로 낮추는 중입니다.`);
    }
    this.temperature = temperature;
  }
}
