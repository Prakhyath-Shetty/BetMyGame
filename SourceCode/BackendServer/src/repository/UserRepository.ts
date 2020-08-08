import { injectable } from "inversify";

@injectable()
export class UserRepository {
  findAll() {
    //
    return { firstName: "Prakhyath shetty", phone: "9844986072" };
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
