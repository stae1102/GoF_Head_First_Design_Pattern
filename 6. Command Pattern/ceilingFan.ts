export class CeilingFan {
  location: string;
  speed: string | null;

  public constructor(location: string) {
    this.location = location;
  }

  public high(): void {
    this.speed = 'HIGH';
    console.log(
      `${this.location} 선풍기의 속도가 ${this.speed}로 설정되었습니다.`
    );
  }

  public medium(): void {
    this.speed = 'MEDIUM';
    console.log(
      `${this.location} 선풍기의 속도가 ${this.speed}로 설정되었습니다.`
    );
  }

  public low(): void {
    this.speed = 'LOW';
    console.log(
      `${this.location} 선풍기의 속도가 ${this.speed}로 설정되었습니다.`
    );
  }

  public off(): void {
    this.speed = null;
    console.log(`${this.location} 선풍기가 꺼졌습니다.`);
  }

  public getSpeed(): void {
    console.log(`${this.location} 선풍기의 속도는 ${this.speed}입니다.`);
  }
}
