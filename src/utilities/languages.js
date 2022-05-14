import {
    PLSQL,
    MySQL,
    PostgreSQL,
    SQLite,
    MariaSQL,
    StandardSQL,
    MSSQL,
    Cassandra,
} from "@codemirror/lang-sql";

export const languages = {
    SQL: StandardSQL,
    PLSQL: PLSQL,
    MySQL: MySQL,
    PostgreSQL: PostgreSQL,
    SQLite: SQLite,
    MariaSQL: MariaSQL,
    MSSQL: MSSQL,
    Cassandra: Cassandra,
};
