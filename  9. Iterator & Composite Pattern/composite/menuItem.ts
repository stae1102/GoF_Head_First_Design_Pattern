import { MenuComponent } from './menuComponent';

// 컴포지트 패턴 다이어그램에서 잎에 해당하는 클래스
export class MenuItem extends MenuComponent {
  name: string;
  description: string;
  vegetarian: boolean;
  price: number;

  public constructor(
    name: string,
    description: string,
    vegetarian: boolean,
    price: number
  ) {
    super();
    this.name = name;
    this.description = description;
    this.vegetarian = vegetarian;
    this.price = price;
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public getPrice(): number {
    return this.price;
  }

  public isVegetarian(): boolean {
    return this.vegetarian;
  }

  public print(): void {
    console.log(
      `  ${this.getName()}${
        this.isVegetarian() && '(v)'
      }, ${this.getPrice()}     -- ${this.getDescription()}`
    );
  }
}
