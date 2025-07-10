// src/graphql/resolvers/Mutation/createExampleMutation.js

// JIRA: PROJ-1234
// Implementation:
//   1) Validate input against `schemas.args`
//   2) Persist via `insertExample`
//   3) Publish `ExampleCreated` event
//   4) Return the created Example

import joi from 'joi';
import { insertExample } from '../../../repositories/exampleRepository.js';
import { publishEvent } from '../../../utils/eventPublisher.js';
import { logError } from '../../../utils/logger.js';

export const requiresScopesForTwoLegged = [];    // TODO: define scopes if needed
export const allowThreeLegged = false;           // TODO: adjust auth flags

export const schemas = {
    transformationEnabled: true,                   // stub: enable to auto‑cast args
    args: joi.object({
        input: joi.object({
            example: joi.object({
                id: joi.string().guid().optional(),      // optional client ID
                name: joi.string().max(255).required(),  // mandatory example name
            }).required(),
        }).required(),
    }),
};

export const handler = async (_, { input }) => {
    try {
        // 1) persist the new example
        const newExample = await insertExample(input.example);

        // 2) emit an event for downstream subscribers
        await publishEvent('ExampleCreated', newExample);

        // 3) return the newly created Example
        return newExample;
    } catch (err) {
        logError(err, { input });
        throw err;
    }
};

export { allowThreeLegged, handler, requiresScopesForTwoLegged, schemas };
