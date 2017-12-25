// @flow
/* eslint-disable no-console */
import express from 'express';
import type { $Request, $Response } from 'express';

const app = express();
app.get('/', (req: $Request, res: $Response) => res.send('Hello World!'));
app.listen(3000, () => console.log('Example app listening on port 3000!'));
