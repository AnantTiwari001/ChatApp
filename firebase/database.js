import { getDatabase } from 'firebase/database';
import app from './config';

const database = getDatabase(app);
export default database;