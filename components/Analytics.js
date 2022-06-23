import {
  ResponsiveContainer,
  AreaChart,
  Area,
  YAxis,
  XAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";
import { subDays, parseISO, format } from "date-fns";
import TopStats from "./TopStats";

export default function Analytics() {
  const data = [];
  for (let num = 30; num >= 1; num--) {
    data.push({
      date: subDays(new Date(), num).toISOString().slice(0, 10),
      value: 1000 * Math.random(),
    });
  }

  return (
    <>
      <TopStats />
      <ResponsiveContainer width="100%" height={400}>
        <AreaChart data={data}>
          <Legend />
          <Area dataKey="value" stoke="#003049" />
          <YAxis
            dataKey="value"
            tickLine={false}
            tickFormatter={(number) => `R${number.toFixed()}`}
          />
          <XAxis
            dataKey="date"
            tickLine={false}
            tickFormatter={(str) => {
              const d = parseISO(str);
              if (d.getDate() % 7) {
                return format(d, "MMM, d");
              } else {
                return "";
              }
            }}
          />
          <Tooltip content={<CustomToolTip />} />
          <CartesianGrid opacity={0.2} vertical={false} />
        </AreaChart>
      </ResponsiveContainer>
    </>
  );
}
function CustomToolTip({ active, payload, label }) {
  if (active) {
    return (
      <div className="toolkit">
        <h4>{format(parseISO(label), "eeee, d MMM, yyyy")}</h4>
        <p>R{payload[0].value.toFixed()}</p>
      </div>
    );
  }
  return null;
}
