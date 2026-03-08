import { RadialBarChart, RadialBar, PolarAngleAxis } from "recharts"
import { Play, RotateCcw, Settings, CheckCircle2 } from "lucide-react"

const chartData = [{ name: "progress", value: 0, fill: "#86A788" }]

export default function Timer() {
  return (
    <div className="bg-white rounded-3xl p-7 w-300px">

      {/* Header */}
      <div className="flex justify-between items-start mb-6">
        <div>
          <p className="text-xs text-accent/60 mb-0.5">Focus Session</p>
          <h3 className="text-md font-bold text-accent-dark">Classic Pomodoro</h3>
        </div>
        <button className="text-accent/40 hover:text-accent transition-colors p-1">
          <Settings size={18} />
        </button>
      </div>

      {/* Timer Circle */}
      <div className="flex justify-center mb-6">
        <div className="relative w-160px h-160px">
          <RadialBarChart
            width={160}
            height={160}
            cx={80}
            cy={80}
            innerRadius={58}
            outerRadius={74}
            barSize={13}
            data={chartData}
            startAngle={90}
            endAngle={-270}
          >
            <PolarAngleAxis type="number" domain={[0, 100]} angleAxisId={0} tick={false} />
            <RadialBar
              background={{ fill: "#FFE2E2" }}
              dataKey="value"
              cornerRadius={10}
              angleAxisId={0}
            />
          </RadialBarChart>

          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <span className="font-mono text-2xl font-bold text-accent-dark tracking-tight">
              25:00
            </span>
            <span className="text-xs text-accent/50 mt-0.5">remaining</span>
          </div>
        </div>
      </div>

      {/* Controls */}
      <div className="flex items-center justify-center gap-4 mb-6">
        <button className="w-10 h-10 rounded-full border border-primary bg-white flex items-center justify-center text-accent/50 hover:text-accent hover:border-accent transition-colors">
          <RotateCcw size={15} />
        </button>

        <button className="btn-secondary w-14 h-14 rounded-full flex items-center justify-center">
          <Play size={22} fill="white" className="translate-x-0.5" />
        </button>

        <button className="w-10 h-10 rounded-full border border-primary bg-white flex items-center justify-center text-accent/50 hover:text-accent hover:border-accent transition-colors">
          <Settings size={15} />
        </button>
      </div>

      {/* Up Next */}
      <div>
        <p className="text-xs font-bold uppercase tracking-widest text-accent/40 mb-3">
          Up Next
        </p>

        <div className="flex flex-col gap-2">
          <div className="flex items-center gap-3 bg-primary/40 rounded-2xl px-3 py-2.5">
            <CheckCircle2 size={18} className="text-accent shrink-0" />
            <span className="text-sm font-semibold text-accent-dark flex-1">
              Review design mockups
            </span>
            <span className="text-xs font-bold bg-primary text-accent-dark rounded-lg px-2 py-0.5">
              25m
            </span>
          </div>

          <div className="flex items-center gap-3 border border-primary/50 rounded-2xl px-3 py-2.5 bg-white">
            <div className="w-18px h-18px rounded-full border-2 border-primary shrink-0" />
            <span className="text-sm text-accent/50 flex-1">Write weekly report</span>
            <span className="text-xs bg-background text-accent/40 rounded-lg px-2 py-0.5">
              45m
            </span>
          </div>
        </div>
      </div>

    </div>
  )
}