export abstract class DomainPrimitive<T extends string> {
  abstract readonly type: T;

  eq(that: DomainPrimitive<T>): boolean {
    return Object.entries(this)
      .filter<[keyof typeof that, unknown]>(
        (entry): entry is [keyof typeof that, unknown] => typeof entry[1] !== "function"
      )
      .every(([key]) => {
        return this[key].toString() === that[key].toString();
      });
  }

  abstract toPrimitive(): unknown;
}
