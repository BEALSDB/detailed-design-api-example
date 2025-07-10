import config from 'config';
import { getSqlHealth, initialize, destroy } from '@pella/postgres-adapter';

/**
 * This function is called after the server stops.
 */
/**
 * This function is called after the server stops.
 */
const afterServerStops = async () => {
  await destroy();
};

/**
 * This function is called before the server starts.
 */
/**
 * This function is called before the server starts.
 */
const beforeServerStarts = () => {
  initialize(config.get('db'));
};

/**
 * Healthz handler
 * @param {import('express').Request} request
 * @param {import('express').Response} response
 */
const healthzHandler = async (request, response) => {
  const sql = await getSqlHealth();

  return response.json({ sql });
};

export { afterServerStops, beforeServerStarts, healthzHandler };
