// DO NOT EDIT. This file is generated by fresh.
// This file SHOULD be checked into source version control.
// This file is automatically updated during development when running `dev.ts`.

import config from "./deno.json" assert { type: "json" };
import * as $0 from "./routes/[name].tsx";
import * as $1 from "./routes/_middleware.ts";
import * as $2 from "./routes/api/auth/login.ts";
import * as $3 from "./routes/api/auth/logout.ts";
import * as $4 from "./routes/api/auth/register.ts";
import * as $5 from "./routes/api/joke.ts";
import * as $6 from "./routes/auth/login.tsx";
import * as $7 from "./routes/auth/register.tsx";
import * as $8 from "./routes/index.tsx";
import * as $9 from "./routes/stores/[slug]/index.tsx";
import * as $10 from "./routes/stores/create.tsx";
import * as $$0 from "./islands/Counter.tsx";
import * as $$1 from "./islands/StoreList.tsx";

const manifest = {
  routes: {
    "./routes/[name].tsx": $0,
    "./routes/_middleware.ts": $1,
    "./routes/api/auth/login.ts": $2,
    "./routes/api/auth/logout.ts": $3,
    "./routes/api/auth/register.ts": $4,
    "./routes/api/joke.ts": $5,
    "./routes/auth/login.tsx": $6,
    "./routes/auth/register.tsx": $7,
    "./routes/index.tsx": $8,
    "./routes/stores/[slug]/index.tsx": $9,
    "./routes/stores/create.tsx": $10,
  },
  islands: {
    "./islands/Counter.tsx": $$0,
    "./islands/StoreList.tsx": $$1,
  },
  baseUrl: import.meta.url,
  config,
};

export default manifest;
