import { Amplifier } from './amplifier';

export class Tuner {
  description: string;
  amplifier: Amplifier;
  frequency: number;

  public constructor(description: string, amplifier: Amplifier) {
    this.description = description;
  }

  public on(): void {
    console.log(`${this.description} ON`);
  }

  public off(): void {
    console.log(`${this.description} OFF`);
  }

  public setFrequency(frequency: number): void {
    console.log(`${this.description} 주파수를 ${frequency}로 설정합니다.`);
    this.frequency = frequency;
  }

  public setAm(): void {
    console.log(`${this.description} AM 모드로 설정합니다.`);
  }

  public setFm(): void {
    console.log(`${this.description} FM 모드로 설정합니다.`);
  }

  public toString(): string {
    return this.description;
  }
}
