export class TheaterLights {
  description: string;

  public constructor(description: string) {
    this.description = description;
  }

  public on(): void {
    console.log(`${this.description} ON`);
  }

  public off(): void {
    console.log(`${this.description} OFF`);
  }

  public dim(level: number): void {
    console.log(`${this.description} 밝기를 ${level}%로 변경합니다.`);
  }

  public toString(): string {
    return this.description;
  }
}
