export class Singleton {
  private static uniqueInstance: Singleton | null = null;

  private constructor() {}

  public static getInstance(): Singleton {
    if (this.uniqueInstance === null) {
      this.uniqueInstance = new Singleton();
    }
    return this.uniqueInstance;
  }
}
