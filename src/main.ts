import { NestFactory } from "@nestjs/core";
import { AppModule } from "./app.module";
import { registerMiddleware } from "./middleware/index";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("api");

  // registerMiddleware(app)

  await app.listen(3000);
}
bootstrap();
