import { Guid } from 'guid-typescript';
import { Validator } from 'validator.ts/Validator';
import { MinLength, IsInt, IsFloat } from 'validator.ts/decorator/Validation';
export class Operations {
    
    value: number;
    message: string;
    validate() {
        const errors = new Validator().validate(this);
        console.log('Invalid operation : errors=', JSON.stringify(errors));
        return errors.length === 0;
    }
}
