export interface ChartType {
    label: string;
    maxValue: number;
    value: number;
}

export interface ExpenseType {
    id?: string; 
    title: string; 
    amount: number; 
    date: Date;
  }