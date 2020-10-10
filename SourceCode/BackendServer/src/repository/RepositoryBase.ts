import { injectable, unmanaged } from "inversify";
import { Document, Model, QueryFindOneAndUpdateOptions, Types } from "mongoose";
import "reflect-metadata";
import { IRepositoryBase } from "./";

@injectable()
export abstract class RepositoryBase<T extends Document> implements IRepositoryBase<T> {
  private _model: Model<Document>;

  constructor(@unmanaged() schemaModel: Model<Document>) {
    this._model = schemaModel;
  }

  // getName(): string {
  //     return 'Base';
  // }

  create(item: any, callback?: (error: any, result: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      self._model.create(item, (err: any, res: T) => {
        if (callback) {
          callback(err, <T>res);
        }
        if (err) {
          reject(err);
        } else {
          resolve(<T>res);
        }
      });
    });

    return p;
  }

  retrieve(callback: (error: any, result: T[]) => void): Promise<T[]> {
    let self = this;
    let p = new Promise<T[]>((resolve, reject) => {
      self._model.find({}, (err: any, res: T[]) => {
        if (callback) {
          callback(err, <T[]>res);
        }
        if (err) {
          reject(err);
        } else {
          resolve(<T[]>res);
        }
      });
    });

    return p;
  }

  findById(id: string, callback?: (error: any, result: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      self._model.findById(id, (err: any, res: T) => {
        if (callback) {
          callback(err, <T>res);
        }
        if (err) {
          reject(err);
        } else {
          resolve(<T>res);
        }
      });
    });

    return p;
  }

  findOne(cond: any, fields: any, options: any, callback?: (err: any, res: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      self._model.findOne(cond, fields, options).exec((err: any, res: T) => {
        if (callback) {
          callback(err, <T>res);
        }
        if (err) {
          reject(err);
        } else {
          resolve(<T>res);
        }
      });
    });

    return p;
  }

  find(cond: any, fields: any, options: any, sortOptions?: any, callback?: (err: any, res: T[]) => void): Promise<T[]> {
    let p = new Promise<T[]>((resolve, reject) => {
      let query = this._model.find(cond, fields, options);
      if (sortOptions) {
        query = query.sort(sortOptions);
      }

      query.exec((err: any, res: T[]) => {
        if (callback) {
          callback(err, <T[]>res);
        }
        if (err) {
          reject(err);
        } else {
          resolve(<T[]>res);
        }
      });
    });

    return p;
  }

  count(cond?: any): Promise<number> {
    let self = this;
    let p = new Promise<number>((resolve, reject) => {
      self._model.count(cond, (err: any, count: number | PromiseLike<number> | undefined) => {
        if (err) {
          reject(err);
        } else {
          resolve(count);
        }
      });
    });

    return p;
  }

  save(item: T, callback?: (error: any, result: T) => void): Promise<T> {
    let p = new Promise<T>((resolve, reject) => {
      item.save((err: any, result: T) => {
        if (callback) {
          callback(err, <T>result);
        }

        if (err) {
          reject(err);
        } else {
          resolve(<T>result);
        }
      });
      resolve();
    });

    return p;
  }

  upsert(cond: any, item: any, callback?: (error: any, result: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      let options: QueryFindOneAndUpdateOptions = {
        upsert: true,
      };
      self._model.findOneAndUpdate(cond, item, options, (err: any, result: any) => {
        if (err) {
          reject(err);
        } else {
          resolve(<T>result);
        }
      });
    });

    return p;
  }

  findByIdAndPush(_id: string, item: any, callback?: (error: any, result: T) => void): Promise<T> {
    let self = this;
    let p = new Promise<T>((resolve, reject) => {
      let options: QueryFindOneAndUpdateOptions = {
        new: true,
      };
      self._model.findByIdAndUpdate(_id, { $push: item }, options, (err: any, result: any) => {
        console.log(item);
        if (err) {
          reject(err);
        } else {
          resolve(<T>result);
        }
      });
    });

    return p;
  }

  delete(_id: string, callback?: (error: any) => void): Promise<boolean> {
    let self = this;
    let p = new Promise<boolean>((resolve, reject) => {
      self._model.remove({ _id: this.toObjectId(_id) }, (err: any) => {
        if (callback) {
          callback(err);
        }
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });

    return p;
  }

  deleteAll(callback?: (error: any) => void): Promise<boolean> {
    let self = this;
    let p = new Promise<boolean>((resolve, reject) => {
      self._model.remove({}, (err: any) => {
        if (callback) {
          callback(err);
        }
        if (err) {
          reject(err);
        } else {
          resolve(true);
        }
      });
    });

    return p;
  }

  toObjectId(_id: string): Types.ObjectId {
    return Types.ObjectId.createFromHexString(_id);
  }
}
