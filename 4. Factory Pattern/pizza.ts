export abstract class Pizza {
  name: string;
  dough: string;
  sauce: string;
  toppings: string[] = [];

  public getName(): string {
    return this.name;
  }

  public prepare(): void {
    console.log(`Preparing ${this.name}`);
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

  public toString(): string {
    // code to display pizza name and ingredients
    let display = '';
    display += `---- ${this.name} ----\n`;
    display += `${this.dough}\n`;
    display += `${this.sauce}\n`;
    for (const topping of this.toppings) {
      display += `${topping}\n`;
    }
    return display;
  }
}
