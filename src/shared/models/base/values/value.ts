type ValueType = number | string;

export abstract class Value<T extends ValueType> {
  // eslint-disable-next-line no-useless-constructor
  protected constructor(protected value: T) {
    // noop
  }

  isSpecified(): boolean {
    return true;
  }

  toString(): string {
    return this.value.toString();
  }

  valueOf(): T {
    return this.value;
  }

  eq(other: Value<T>): boolean {
    return this.value === other.value;
  }
}
