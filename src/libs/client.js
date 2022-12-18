import { createClient } from 'microcms-js-sdk';

export const client = createClient({
  serviceDomain: 'service-domain',  // service-domain は XXXX.microcms.io の XXXX 部分
  apiKey: 'api-key',
});