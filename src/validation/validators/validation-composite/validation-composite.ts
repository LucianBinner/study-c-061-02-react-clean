import { Validation } from '@/presentation/protocols/validation'
import { FieldValidation } from '@/validation/protocols/field-validation'

export class ValidationComposite implements Validation {
  constructor(private readonly validatiors: FieldValidation[]) { }
  validate(fieldName: string, fieldValue: string): string {
    const validators = this.validatiors.filter(validator => validator.field === fieldName)
    for (const validator of validators) {
      const error = validator.validate(fieldValue)
      if (error) {
        return error.message
      }
    }
  }
}
