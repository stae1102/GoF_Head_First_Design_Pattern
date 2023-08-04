export abstract class MenuComponent {
  public add(menuComponent: MenuComponent): void {
    throw new Error();
  }

  public remove(menuComponent: MenuComponent): void {
    throw new Error();
  }

  public getChild(i: number): MenuComponent | undefined {
    throw new Error();
  }

  public getName(): string {
    throw new Error();
  }

  public getDescription(): string {
    throw new Error();
  }

  public getPrice(): number {
    throw new Error();
  }

  public isVegetarian(): boolean {
    throw new Error();
  }

  public print(): void {
    throw new Error();
  }
}
