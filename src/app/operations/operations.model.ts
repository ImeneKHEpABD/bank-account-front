import { Guid } from 'guid-typescript';
import { Validator } from 'validator.ts/Validator';
import { MinLength, IsInt, IsFloat } from 'validator.ts/decorator/Validation';

export class Operations {

    Value = 0;
    Message = '';
    @MinLength(1)
    Date = '';
    @MinLength(1)
    Position = 0;
    Description = '';
    @MinLength(1)
    Debit = 0;
    Credit = 0;
    Balance = 0;
    
    validate() {
        const errors = new Validator().validate(this);
        console.log('Invalid operation : errors=', JSON.stringify(errors));
        return errors.length === 0;
    }
}
