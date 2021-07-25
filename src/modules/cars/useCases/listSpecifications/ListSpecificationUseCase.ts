import Specification from "../../entities/Specification";
import { SpecificationsRepository } from "../../repositories/implementations/Specification";

class ListSpecificationUseCase {
  constructor(private specificationsRepository: SpecificationsRepository) {}

  execute(): Specification[] {
    return this.specificationsRepository.list();
  }
}

export default ListSpecificationUseCase;
