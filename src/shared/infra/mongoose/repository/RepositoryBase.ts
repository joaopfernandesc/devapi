import * as mongoose from 'mongoose';

import IRead from '../interfaces/IRead';
import IWrite from '../interfaces/IWrite';

export default class RepositoryBase<T extends mongoose.Document>
  implements IRead<T>, IWrite<T> {
  private _model: mongoose.Model<mongoose.Document>;

  constructor(schemaModel: mongoose.Model<mongoose.Document>) {
    this._model = schemaModel;
  }

  create(item: T, callback: (error: unknown, result: T) => void): void {
    this._model.create(item, callback);
  }

  retrieve(callback: (error: unknown, result: T) => void): void {
    this._model.find({}, callback);
  }

  update(
    _id: mongoose.Types.ObjectId,
    item: T,
    callback: (error: unknown, result: unknown) => void,
  ): void {
    this._model.updateOne({ _id }, item, callback);
  }

  delete(
    _id: string,
    callback: (error: unknown, result: unknown) => void,
  ): void {
    this._model.remove({ _id: this.toObjectId(_id) }, err =>
      callback(err, null),
    );
  }

  find(
    filters?: Record<string, unknown>,
    callback?: (err: any, res: T[]) => void,
  ): mongoose.Query<T[]> {
    return this._model.find(filters || {}, callback);
  }

  private toObjectId(_id: string): mongoose.Types.ObjectId {
    return mongoose.Types.ObjectId.createFromHexString(_id);
  }
}
