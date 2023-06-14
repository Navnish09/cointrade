import { Activity, Briefcase } from "@icons";

export const data = [
  {
    title: "Realised Profits",
    value: "$9,458",
    metricDifference: 37.8,
    metricUnit: "%",
    timeSpan: "this week",
    icons: [
      {
        icon: <Activity width={24} height={24} color="#FCFCFC" />,
        iconBackground: "#1A1D1F",
      },
    ],
    cardColor: "rgba(181, 228, 202, 0.25)",
  },
  {
    title: "Unrealised Profits",
    value: "$1,254",
    metricDifference: -37.8,
    metricUnit: "%",
    timeSpan: "this week",
    icons: [
      {
        icon: <Activity width={24} height={24} color="#FCFCFC" />,
        iconBackground: "#1A1D1F",
      },
    ],
    cardColor: "rgba(177, 229, 252, 0.25)",
  },
  {
    title: "Capital",
    value: "$53,546",
    metricDifference: 37.8,
    metricUnit: "%",
    timeSpan: "this week",
    icons: [
      {
        icon: <Briefcase width={24} height={24} color="#FCFCFC" />,
        iconBackground: "#1A1D1F",
      },
    ],
    cardColor: "rgba(202, 189, 255, 0.25)",
  },
];
