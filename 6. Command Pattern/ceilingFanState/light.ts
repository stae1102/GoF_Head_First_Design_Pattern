export class Light {
  location: string;

  constructor(location: string) {
    this.location = location;
  }

  public on(): void {
    console.log(`${this.location} 조명이 켜졌습니다.`);
  }

  public off(): void {
    console.log(`${this.location} 조명이 꺼졌습니다.`);
  }
}
