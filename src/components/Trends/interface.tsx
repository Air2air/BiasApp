export interface TrendsProps {
  id: number;
  title: string;
  subtitle: string;
  description: string;
  height: number;
  dataKey?: string;
  baseUrl: string;
  params: string;
  resultLimit?: string;
  chartType: string;
  horizontal: boolean;
  keyLabel?: string;
  keySeries?: string;
  cap: string;
  time: string;
  cagr:  string;
  textColor?: string;
  seriesColor?: string;
  backgroundColor?: string;
}
