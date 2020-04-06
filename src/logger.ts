export class Logger {
  constructor(private readonly type: string) {}
  public log(message: string): void {
    const now = new Date().getTime();
    console.log(`[${this.type}] [${now}] ${message}`);
  }
}
