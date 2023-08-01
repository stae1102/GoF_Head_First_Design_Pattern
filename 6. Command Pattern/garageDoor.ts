export class GarageDoor {
  location: string;

  public constructor(location: string) {
    this.location = location;
  }

  public up(): void {
    console.log(`${this.location} 차고 문이 열렸습니다.`);
  }

  public down(): void {
    console.log(`${this.location} 차고 문이 닫혔습니다.`);
  }

  public stop(): void {
    console.log(`${this.location} 차고 문이 멈췄습니다.`);
  }

  public lightOn(): void {
    console.log(`${this.location} 차고 불이 켜졌습니다.`);
  }

  public lightOff(): void {
    console.log(`${this.location} 차고 불이 꺼졌습니다.`);
  }
}
