export class ChocolateBoiler {
  private empty: boolean;
  private boiled: boolean;

  private constructor() {
    this.empty = true;
    this.boiled = false;
  }

  public fill(): void {
    if (this.isEmpty()) {
      this.empty = false;
      this.boiled = false;
      // 보일러에 우유와 초콜릿을 혼합한 재료를 넣음
    }
  }

  public drain(): void {
    if (!this.isEmpty() && this.isBoiled()) {
      // 끓인 재료를 다음 단계로 넘김
      this.empty = true;
    }
  }

  public boil(): void {
    if (!this.isEmpty() && !this.isBoiled()) {
      // 재료를 끓임
      this.boiled = true;
    }
  }

  public isEmpty(): boolean {
    return this.empty;
  }

  public isBoiled(): boolean {
    return this.boiled;
  }
}
