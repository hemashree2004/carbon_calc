@echo off
curl -s -X POST http://localhost:9599/api/auth/register -H "Content-Type: application/json" -d "{\"name\":\"Admin User\",\"email\":\"admin@carboncalc.com\",\"password\":\"Admin@123\"}"
echo.
echo ---
curl -s -X POST http://localhost:9599/api/auth/login -H "Content-Type: application/json" -d "{\"email\":\"admin@carboncalc.com\",\"password\":\"Admin@123\"}"
echo.
