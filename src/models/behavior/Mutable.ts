export interface Mutable<Mutator> {
    mutate(mutator: Mutator): void;
}