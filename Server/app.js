import express from 'express';
import bodyParser from 'body-parser';
import fileUpload from 'express-fileupload';
import cookieParser from 'cookie-parser';
import dotenv from 'dotenv';
import path from 'path';
import appRoot from 'app-root-path';

import product from './routes/productRoute.js';
import user from './routes/userRoute.js';
import order from './routes/orderRoute.js';
import payment from './routes/paymentRoute.js';
import { errorMiddleware } from './middleware/error.js';

// config
if (process.env.NODE_ENV !== 'PRODUCTION') {
    dotenv.config({ path: 'Server/config/config.env' });
}

const app = express();
app.use(cookieParser());

app.use(bodyParser.json()); // for parsing application/json
app.use(bodyParser.urlencoded({ extended: true })); // for parsing application/x-www-form-urlencoded
app.use(fileUpload());

app.use('/api/v1', product);
app.use('/api/v1', user);
app.use('/api/v1', order);
app.use('/api/v1', payment);

// deploy
app.use(express.static(path.join(appRoot.path, 'client/build')));

app.get('*', (req, res) => {
    res.sendFile(path.join(appRoot.path, 'client/build/index.html'));
});

// middleware
app.use(errorMiddleware);

export default app;
