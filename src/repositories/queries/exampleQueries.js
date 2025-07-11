// JIRA: PROJ-1234
const exampleAttributes = `
  id
  # add more fields here
`;

// JIRA: PROJ-1234
export const insertExampleQuery = `
  INSERT INTO your_schema.example_table (
    id
    -- other columns
  ) VALUES (
    $1
    -- other values
  )
  RETURNING ${exampleAttributes};
`;

// JIRA: PROJ-1235
export const selectExampleByIdQuery = `
  SELECT ${exampleAttributes}
  FROM your_schema.example_table
  WHERE id = $1;
`;
