import * as mongoose from 'mongoose';

/* eslint-disable @typescript-eslint/no-explicit-any */
export default interface IWrite<T> {
  create: (item: T, callback: (error: any, result: any) => void) => void;
  update: (
    _id: mongoose.Types.ObjectId,
    item: T,
    callback: (error: any, result: any) => void,
  ) => void;
  delete: (_id: string, callback: (error: any, result: any) => void) => void;
}
/* eslint-enable @typescript-eslint/no-explicit-any */
