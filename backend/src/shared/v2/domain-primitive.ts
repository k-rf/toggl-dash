export interface DomainPrimitive<T extends string> {
  readonly type: T;

  equals(that: DomainPrimitive<T>): boolean;
}
