import { Value } from './value';

export abstract class StringValue extends Value<string> {
  constructor(protected value: string) {
    super(value);
  }
}
