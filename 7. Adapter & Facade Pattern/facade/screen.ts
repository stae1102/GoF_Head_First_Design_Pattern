export class Screen {
  description: string;

  public constructor(description: string) {
    this.description = description;
  }

  public up(): void {
    console.log(`${this.description} 막이 올라갑니다.`);
  }

  public down(): void {
    console.log(`${this.description} 막이 내려갑니다.`);
  }

  public toString(): string {
    return this.description;
  }
}
