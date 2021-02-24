import { Value } from './value';

export abstract class NumberValue extends Value<number> {
  constructor(protected value: number) {
    super(value);
  }
}
