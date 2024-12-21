/** @type { import("drizzle-kit").Config } */
export default {
  schema: "./utils/schema.js",
  dialect: "postgresql",
  dbCredentials: {
    url: "postgresql://accounts:fGEscg5qT8aU@ep-raspy-star-a5f0mi2q.us-east-2.aws.neon.tech/ai-interview-mocker?sslmode=require",
  },
};
