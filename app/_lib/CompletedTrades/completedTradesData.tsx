import { Activity, Briefcase, Chart, TrendDown, TrendUp } from "@/app/_icons";

export const data = [
  {
    title: "Total Trades",
    value: 36,
    metricDifference: 12,
    metricUnit: "",
    timeSpan: "more this week",
    icons: [
      {
        icon: <Briefcase width={24} height={24} />,
        iconBackground: "#B1E5FC",
      },
    ],
  },
  {
    title: "Winning Trades",
    value: 24,
    metricDifference: -37.8,
    metricUnit: "%",
    timeSpan: "this week",
    icons: [
      {
        icon: <TrendUp width={24} height={24} />,
        iconBackground: "#B5E4CA",
      },
    ],
  },
  {
    title: "Losing Trades",
    value: 12,
    metricDifference: 37.8,
    metricUnit: "%",
    timeSpan: "this week",
    icons: [
      {
        icon: <TrendDown width={24} height={24} />,
        iconBackground: "#FFBC99",
      },
    ],
  },
  {
    title: "Win/Loss Ratio",
    value: "2:3",
    icons: [
      {
        icon: <Chart width={24} height={24} />,
        iconBackground: "#CABDFF",
      },
    ],
  },
];
