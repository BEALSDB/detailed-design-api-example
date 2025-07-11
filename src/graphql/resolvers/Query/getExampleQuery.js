// JIRA: PROJ-1235
// Implementation:
//   1) Validate `id` against `schemas.args`
//   2) Fetch via `fetchExampleById`
//   3) Return Example or `null` if not found

import joi from 'joi';
import { fetchExampleById } from '../../../repositories/exampleRepository.js';
import { logError } from '../../../utils/logger.js';

export const requiresScopesForTwoLegged = [];    // TODO: define scopes if needed (PROJ-1235)
export const allowThreeLegged = false;           // TODO: adjust auth flags (PROJ-1235)

export const schemas = {
    transformationEnabled: true,
    args: joi.object({
        id: joi.string().guid().required(),          // must be a valid UUID
    }),
};

export const handler = async (_, { id }) => {
    try {
        // perform the lookup
        return await fetchExampleById(id);
    } catch (err) {
        logError(err, { id });
        throw err;
    }
};

export { allowThreeLegged, handler, requiresScopesForTwoLegged, schemas };
