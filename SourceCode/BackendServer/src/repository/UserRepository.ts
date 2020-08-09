import { injectable } from "inversify";

@injectable()
export class UserRepository {
  findOne(username: string) {
    //
    return {
      id: 1,
      username: "Prakhyath shetty",
      phone: "9844986072",
      password: "prakhyth@123",
    };
  }
  findAll() {
    //
    return {
      id: 1,
      username: "Prakhyath shetty",
      phone: "9844986072",
      password: "prakhyth@123",
    };
  }

  create(post: any) {
    //
  }

  findById(id: number) {
    //
  }

  update(id: number, post: any) {
    //
  }

  delete(id: number) {
    //
  }
}
