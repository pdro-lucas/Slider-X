/**
 *
 * @param {string} type The type of query to run.
 * @param {string} columns Specify the columns to be selected. If more than one, separate them by commas. Default: "*"
 * @param {string} table Specify the table to be queried.  Default is "image"
 * @param {string} where Specify the where clause.  Default is ""
 * @param {*} orderBy Specify the order by clause.  Default is ""
 * @param {*} limit Specify the limit clause.  Default is ""
 * @returns string The SQL query
 * @description Generate a SQL query based on the parameters
 */
const generateSqlQuery = (
  type,
  columns = "*",
  table = "image",
  where,
  orderBy,
  limit
) => {
  let sqlQuery = `${type} ${columns} FROM ${table}`;
  if (where) {
    sqlQuery += " WHERE " + where;
  }
  if (orderBy) {
    sqlQuery += " ORDER BY " + orderBy;
  }
  if (limit) {
    sqlQuery += " LIMIT " + limit;
  }
  return sqlQuery;
};

// TODO: update the code above to more clear and readable

exports.generateSqlQuery = generateSqlQuery;
