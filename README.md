# BINGGLESHOP - Libraries Management App

## Migrations

1. Init migration

   ```
   npx sequelize init
   ```

2. Create migration

   ```
   npx sequelize migration:generate --name <name-tabel-or-action>

   # example

   npx sequelize migration:generate --name create-roles
   ```

3. Running Migration

npx sequelize db:migrate

4. Undo Migration

npx sequelize db:migrate:undo
