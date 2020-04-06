import http from "http";
import { Logger } from "./logger";

class Client {
  private readonly logger = new Logger("client");
  constructor(private readonly port: number) {}

  public request(): void {
    const req = http.request(`http://localhost:${this.port}`, res => {
      const body: any[] = [];
      res
        .on("data", chunk => {
          body.push(chunk);
        })
        .on("end", () => {
          this.logger.log(Buffer.concat(body).toString());
        });
    });

    req.setTimeout(1000, () => {
      this.logger.log("timeout");
      req.abort();
    });
    this.logger.log("request");
    req.end();
  }
}

async function main(): Promise<void> {
  await new Promise(resolve => {
    setTimeout(resolve, 1000);
  });
  new Client(3000).request();
}

main().catch(e => console.error(e));

process.on("unhandledRejection", reason => {
  console.error(reason);
  process.exit(1);
});
