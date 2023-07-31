export class Singleton {
  private static uniqueInstance: Singleton;

  private constructor() {}

  public static getInstance(): Singleton {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
}
