export class Singleton {
  private static uniqueInstance: Singleton = new Singleton();

  private constructor() {}

  public static getInstance(): Singleton {
    return this.uniqueInstance;
  }
}
