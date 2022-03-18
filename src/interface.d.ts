export interface ChartType {
    label: string;
    value: number;
    maxValue?: number;
}


export interface ExpenseType {
    id?: string; 
    title: string; 
    amount: number; 
    date: Date;
  }