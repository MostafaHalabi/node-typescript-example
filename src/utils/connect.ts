import mongoose from 'mongoose';
import config from 'config';
import logger from './logger';
function connect() {
  const dbUri = config.get<string>('dbUri');

  return mongoose
    .connect(dbUri)
    .then(() => {
      mongoose.connect(dbUri);
      logger.info('connected to mongodb successfully');
    })
    .catch((err) => {
      logger.error('[e] error connecting to mongodb');
      process.exit(1);
    });
}

export default connect;
