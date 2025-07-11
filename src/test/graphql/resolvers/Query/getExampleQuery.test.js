// JIRA: PROJ-1235

// import { handler, schemas } from '../../../../graphql/resolvers/Query/getExampleQuery';
// import { fetchExampleById } from '../../../../repositories/exampleRepository';

jest.mock('../../../../repositories/exampleRepository');

describe('getExampleQuery', () => {
  test.todo('should validate id against schemas.args (non‑UUID)');     // PROJ-1235
  test.todo('should call fetchExampleById and return an Example');    // PROJ-1235
  test.todo('should return null if fetchExampleById returns undefined'); // PROJ-1235
  test.todo('should propagate error if fetchExampleById throws');      // PROJ-1235
});
