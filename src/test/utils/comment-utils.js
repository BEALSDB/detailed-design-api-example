import { randomUUID } from 'node:crypto';

import { format } from 'date-fns';

const dateFormat = 'yyyy-MM-dd';

const generateComment = (base) => ({
  id: randomUUID(),
  orderId: randomUUID(),
  comment: chance.sentence(),
  commentedBy: chance.name(),
  creationDate: format(chance.date(), dateFormat),
  lineId: randomUUID(),
  ...base,
});

export { generateComment };
