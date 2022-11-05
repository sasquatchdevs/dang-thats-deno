import { Database, PostgresConnector } from "denodb";
import "https://deno.land/x/dotenv@v3.2.0/load.ts";
import { User } from "./models/User.ts";

// config();

const connection = new PostgresConnector({
  host: Deno.env.get("DB_HOST")!,
  username: Deno.env.get("DB_USER")!,
  password: Deno.env.get("DB_PASS")!,
  database: Deno.env.get("DB_NAME")!,
});

const db = new Database(connection);
// establish relations between models
// eg: const BusinessOwner = Relationships.manyToMany(Business, Owner);

// link all models
// eg: db.link([BusinessOwner, Business, Owner]);
await db.link([User]);

// todo: sync to db
export default db;
