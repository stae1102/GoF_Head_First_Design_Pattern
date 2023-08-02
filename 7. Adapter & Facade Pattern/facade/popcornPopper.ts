export class PopcornPopper {
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

  public pop(): void {
    console.log(`${this.description} 팝콘이 튀어 오릅니다!`);
  }

  public toString(): string {
    return this.description;
  }
}
