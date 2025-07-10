import config from 'config';
import { initialize, getSqlHealth, destroy } from '@pella/postgres-adapter';

import { afterServerStops, beforeServerStarts, healthzHandler } from '../../src/infrastructure/server.js';
import { initialize as snsInit } from '@pella/sns-publisher';
import { expect } from '@jest/globals';

jest.mock('config');

describe('server', () => {
  test('should initialize the postgres adapter', async () => {
    const dbConfig = {
      database: chance.word(),
    };

    const awsConfig = {
      credentials: {
        accessKeyId: chance.word(),
        secretAccessKey: chance.word(),
      },
      endpoint: chance.url(),
    };

    config.get.mockImplementation((arg) => {
      if (arg === 'db') {
        return dbConfig;
      } else if (arg === 'aws') {
        return awsConfig;
      }

      return null;
    });

    await beforeServerStarts();

    expect(initialize).toHaveBeenCalledTimes(1);
    expect(initialize).toHaveBeenCalledWith(dbConfig);
    expect(snsInit).toHaveBeenCalledTimes(1);
    expect(snsInit).toHaveBeenCalledWith({ ...awsConfig, region: 'us-east-2' });
  });

  test('should destroy the connection pool when the server stops', async () => {
    await afterServerStops();

    expect(destroy).toHaveBeenCalledTimes(1);
    expect(destroy).toHaveBeenCalledWith();
  });

  test('should check the sql health and return ok response', async () => {
    const sqlResponse = chance.pickone(['ok', 'failed']);

    getSqlHealth.mockResolvedValue(sqlResponse);

    const response = {
      json: jest.fn(),
    };

    await healthzHandler({}, response);

    expect(getSqlHealth).toHaveBeenCalledTimes(1);
    expect(getSqlHealth).toHaveBeenCalledWith();

    expect(response.json).toHaveBeenCalledTimes(1);
    expect(response.json).toHaveBeenCalledWith({
      sql: sqlResponse,
    });
  });
});
