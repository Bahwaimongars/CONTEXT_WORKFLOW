import { PrismaClient } from "@prisma/client";
import dotenv from "dotenv";

// Load environment variables
dotenv.config({ path: ".env.local" });

async function testDatabaseConnection() {
  const prisma = new PrismaClient();

  try {
    console.log("🔍 Testing database connection...");
    console.log(
      "📍 Database URL:",
      process.env.DATABASE_URL ? "Set" : "Not set"
    );

    // Test basic connection
    await prisma.$connect();
    console.log("✅ Database connection successful!");

    // Test query execution
    const result = await prisma.$queryRaw`SELECT 1 as test`;
    console.log("✅ Query execution successful:", result);

    // Check if tables exist (this will fail if migrations haven't been run)
    try {
      const userCount = await prisma.user.count();
      console.log(`✅ User table accessible. Current count: ${userCount}`);
    } catch (tableError) {
      console.log("⚠️  User table not found. You may need to run migrations.");
      console.log("   Run: npx prisma migrate dev");
      console.log("   Error:", tableError.message);
    }
  } catch (error) {
    console.error("❌ Database connection failed:");
    console.error("Error:", error.message);

    if (error.message.includes("Environment variable not found")) {
      console.log("\n💡 Make sure to set your DATABASE_URL in .env.local");
      console.log(
        '   Example: DATABASE_URL="postgresql://user:password@localhost:5432/dbname"'
      );
    }

    if (error.message.includes("connect ECONNREFUSED")) {
      console.log("\n💡 Database server is not running or not accessible");
      console.log("   - Check if PostgreSQL is running");
      console.log("   - Verify the connection string");
      console.log("   - Check network connectivity");
    }

    if (error.message.includes("authentication failed")) {
      console.log("\n💡 Authentication failed");
      console.log("   - Check your username and password");
      console.log("   - Verify the database credentials");
    }
  } finally {
    await prisma.$disconnect();
    console.log("🔌 Database connection closed.");
  }
}

// Run the test
testDatabaseConnection()
  .catch(console.error)
  .finally(() => process.exit());
