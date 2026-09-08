import { JourneyEntry } from "@/types";

export const DEMO_JOURNEYS: JourneyEntry[] = [
  {
    id: "j1",
    builderId: "b1",
    title: "Initial Concept & Paper Mockups",
    description: "Sketched the first low-power solar telemetry board on grid paper after visiting 3 agricultural cooperatives in Eastern Ghana.",
    date: "JAN 2025",
    type: "milestone",
    createdAt: "2025-01-15T00:00:00Z",
  },
  {
    id: "j2",
    builderId: "b1",
    title: "First Field Hardware Prototype",
    description: "Deployed breadboard prototype solar tracker in a cassava mill. Discovered heat degradation issue on voltage regulators.",
    date: "MAR 2025",
    type: "update",
    createdAt: "2025-03-10T00:00:00Z",
  },
  {
    id: "j3",
    builderId: "b1",
    title: "First 100 Active Agricultural Users",
    description: "Reached 100 farmers connected across 4 solar micro-grids. Power uptime increased from 42% to 99.4%.",
    date: "JUN 2025",
    type: "milestone",
    createdAt: "2025-06-01T00:00:00Z",
  },
  {
    id: "j4",
    builderId: "b1",
    title: "KubeSolar MVP Public Launch",
    description: "Unveiled KubeSolar V1 smart micro-grid controller with automated mobile money pay-as-you-go metering.",
    date: "SEP 2025",
    type: "launch",
    createdAt: "2025-09-01T00:00:00Z",
  },
  {
    id: "j5",
    builderId: "b1",
    title: "Scaling Across West Africa",
    description: "Currently manufacturing batch 2 (50 units) and expanding into northern Ivory Coast.",
    date: "NOW",
    type: "update",
    createdAt: "2026-01-01T00:00:00Z",
  },
];
