export abstract class CaffeinBeverage {
  prepareRecipe(): void {
    this.boilWater();
    this.brew();
    this.pourInCup();
    this.addCondiments();
  }

  abstract brew(): void;
  abstract addCondiments(): void;

  boilWater(): void {
    console.log('물 끓이는 중');
  }

  pourInCup(): void {
    console.log('컵에 따르는 중');
  }
}
