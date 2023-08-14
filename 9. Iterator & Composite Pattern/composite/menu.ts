import { MenuComponent } from './menuComponent';

// 컴포지트 패턴 다이어그램에서 복합 객체 클래스에 해당
export class Menu extends MenuComponent {
  menuComponents: MenuComponent[] = new Array<MenuComponent>();
  name: string;
  description: string;

  public constructor(name: string, description: string) {
    super();
    this.name = name;
    this.description = description;
  }

  public add(menuComponent: MenuComponent) {
    this.menuComponents.push(menuComponent);
  }

  public remove(menuComponent: MenuComponent) {
    this.menuComponents.filter(
      (_menuComponent) => _menuComponent !== menuComponent
    );
  }

  public getChild(i: number): MenuComponent | undefined {
    return this.menuComponents.at(i);
  }

  public getName(): string {
    return this.name;
  }

  public getDescription(): string {
    return this.description;
  }

  public print(): void {
    console.log(
      `\n${this.getName()}, ${this.getDescription()}\n------------------`
    );

    this.menuComponents.forEach((menuComponent) => menuComponent.print());
  }
}
