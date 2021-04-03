import * as mongoose from 'mongoose';

export default interface IRead<T> {
  retrieve: (callback: (error: any, result: any) => void) => void;
  find(
    filters: Record<string, unknown>,
    callback?: (err: any, res: T[]) => void,
  ): mongoose.Query<T[]>;
}
