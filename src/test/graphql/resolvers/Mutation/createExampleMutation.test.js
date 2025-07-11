// JIRA: PROJ-1234

// import { handler, schemas } from '../../../../graphql/resolvers/Mutation/createExampleMutation';
// import { insertExample } from '../../../../repositories/exampleRepository';
// import { publishEvent } from '../../../../utils/eventPublisher';

jest.mock('../../../../repositories/exampleRepository');
jest.mock('../../../../utils/eventPublisher');

describe('createExampleMutation', () => {
  test.todo('should validate input against schemas.args (invalid payload)');           // PROJ-1234
  test.todo('should call insertExample with correct args and return the new Example'); // PROJ-1234
  test.todo('should publish ExampleCreated event after insert');                       // PROJ-1234
  test.todo('should propagate error if insertExample throws');                         // PROJ-1234
});
