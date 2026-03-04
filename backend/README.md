# CarbonCalc — Backend

## Overview

This Spring Boot (Java) backend implements the API and business logic for the Personal Carbon Footprint application. It handles authentication (JWT access + refresh tokens), user management, surveys, carbon calculations, goals, gamification, marketplace transactions, and integrations with external carbon-data APIs.

## Tech stack

- Java 17+ with Spring Boot (REST controllers, Spring Data JPA)
- Build: Maven (default)
- Database: MySQL
- Authentication: JWT (access + refresh tokens)
- External APIs: Carbon Interface API, Open Energy Data, UN Carbon datasets

## Prerequisites

- JDK 17+
- Maven 3.6+
- Running MySQL instance
- (Optional) Docker for local MySQL

## Configuration

Set environment variables or application properties for database and security:

- `SPRING_DATASOURCE_URL` (e.g. jdbc:mysql://localhost:3306/carboncalc)
- `SPRING_DATASOURCE_USERNAME`
- `SPRING_DATASOURCE_PASSWORD`
- `JWT_SECRET`
- `JWT_ACCESS_EXP_MS` (access token lifetime)
- `JWT_REFRESH_EXP_MS` (refresh token lifetime)
- `CARBON_INTERFACE_API_KEY` (if using Carbon Interface)

## Run (development)

```bash
# start MySQL and ensure DB is created (see db_scripts)
mvn spring-boot:run
```

## Build and run

```bash
mvn clean package
java -jar target/*.jar
```

## Database migrations

SQL schema and seed scripts are in the `db_scripts/` folder. Use them to create the schema or integrate Flyway/Liquibase.

## Key API endpoints (examples)

- `POST /api/auth/register` — register user
- `POST /api/auth/login` — login, returns access + refresh tokens
- `POST /api/surveys` — submit lifestyle survey
- `GET /api/carbon/logs` — get carbon logs / history
- `POST /api/goals` — create a goal
- `GET /api/marketplace` — list items
- `POST /api/transactions` — purchase offset

## Testing

```bash
mvn test
```

## Notes

- Use strong `JWT_SECRET` in production and secure DB credentials.
- Configure HTTPS, rate limiting, and logging for production.
- Connect external API keys via secure vault or env vars.
