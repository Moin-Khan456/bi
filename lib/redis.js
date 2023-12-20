import { Redis } from "ioredis";

export const rediss = new Redis(
  "rediss://default:7385c173b742439483965a7dba05cb1f@us1-pure-gecko-41806.upstash.io:41806"
);
