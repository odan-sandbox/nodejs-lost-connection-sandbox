import http from "http";
import { Logger } from "./logger";

class Server {
  private readonly logger = new Logger(Server.name);
  constructor(private readonly port: number) {}
  public start(): void {
    http
      .createServer((req, res) => {
        this.logger.log("on request");

        req.on("close", () => {
          this.logger.log("request close");
        });

        let counter = 0;
        const func = (): void => {
          if (counter === 10) {
            res.writeHead(200, { "Content-Type": "text/plain" });
            res.end("Hello!\n");
            return;
          }
          counter++;
          this.logger.log(`counter: ${counter}`);
          setTimeout(() => {
            func();
          }, 300);
        };
        func();
      })
      .listen(this.port, () => {
        this.logger.log("start listen");
      });
  }
}

async function main(): Promise<void> {
  new Server(3000).start();
}

main().catch(e => console.error(e));

process.on("unhandledRejection", reason => {
  console.error(reason);
  process.exit(1);
});
