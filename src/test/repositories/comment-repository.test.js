// src/tests/repositories/exampleRepository.test.js
// JIRA: PROJ-1234, PROJ-1235

// import { query } from '@your-org/postgres-adapter';
// import {
//   insertExample,
//   fetchExampleById,
// } from '../../../repositories/exampleRepository';
// import {
//   insertExampleQuery,
//   selectExampleByIdQuery,
// } from '../../../repositories/queries/exampleQueries';

jest.mock('@your-org/postgres-adapter');

describe('exampleRepository', () => {
  describe('insertExample', () => {
    test.todo('should call query(insertExampleQuery, [...]) and return rows[0]'); // PROJ-1234
    test.todo('should throw if query rejects');                                  // PROJ-1234
  });

  describe('fetchExampleById', () => {
    test.todo('should call query(selectExampleByIdQuery, [id]) and return rows[0]'); // PROJ-1235
    test.todo('should throw if query rejects');                                      // PROJ-1235
  });
});
