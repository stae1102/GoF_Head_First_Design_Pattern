export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];

  public getName(): string {
    return this.name;
  }

  public prepare(): void {
    console.log(`준비 중: ${this.getName()}`);
    console.log('도우를 돌리는 중...');
    console.log('소스를 뿌리는 중...');
    console.log('토핑을 올리는 중: ');
    console.log(...this.toppings);
  }

  public bake(): void {
    console.log(`Baking ${this.name}`);
  }

  public cut(): void {
    console.log(`Cutting ${this.name}`);
  }

  public box(): void {
    console.log(`Boxing ${this.name}`);
  }
}
