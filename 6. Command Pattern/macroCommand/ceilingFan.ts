export class CeilingFan {
  public static HIGH: number = 3;
  public static MEDIUM: number = 2;
  public static LOW: number = 1;
  public static OFF: number = 0;
  location: string;
  speed: number;

  public constructor(location: string) {
    this.location = location;
  }

  public high(): void {
    this.speed = CeilingFan.HIGH;
    console.log(`${this.location} 선풍기의 속도가 HIGH로 설정되었습니다.`);
  }

  public medium(): void {
    this.speed = CeilingFan.MEDIUM;
    console.log(`${this.location} 선풍기의 속도가 MEDIUM으로 설정되었습니다.`);
  }

  public low(): void {
    this.speed = CeilingFan.LOW;
    console.log(`${this.location} 선풍기의 속도가 LOW로 설정되었습니다.`);
  }

  public off(): void {
    this.speed = CeilingFan.OFF;
    console.log(`${this.location} 선풍기가 꺼졌습니다.`);
  }

  public getSpeed(): number {
    return this.speed;
  }
}
