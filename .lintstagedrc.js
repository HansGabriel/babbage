module.exports = {
  '*.sql': (filenames) =>
    filenames.map(
      (filename) => `pg_format -c pg_format.conf '${filename}' -o ${filename}`
    ),
  '**/*.!{sql,prettierignore}': 'prettier --write --ignore-unknown',
}
