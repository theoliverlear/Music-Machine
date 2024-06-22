export interface Sortable {
    compareTo(item: any): number;
    sort(): void;
}