"use client";

import { useMemo, useState } from "react";
import { demoPolicies } from "@/content/demo-data";

export function SegurosDemo() {
  const [status, setStatus] = useState("Todos");

  const filtered = useMemo(
    () =>
      demoPolicies.filter((p) => status === "Todos" || p.status === status),
    [status],
  );

  const vigentes = demoPolicies.filter((p) => p.status === "Vigente").length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="font-display text-xs text-ink-muted uppercase">Apólices</p>
          <p className="font-display mt-1 text-2xl font-bold">{demoPolicies.length}</p>
        </div>
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="font-display text-xs text-ink-muted uppercase">Vigentes</p>
          <p className="font-display mt-1 text-2xl font-bold text-accent">
            {vigentes}
          </p>
        </div>
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="font-display text-xs text-ink-muted uppercase">
            Prêmio (demo)
          </p>
          <p className="font-display mt-1 text-2xl font-bold">R$ 5.660</p>
        </div>
      </div>

      <div className="flex justify-end">
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-md border border-line bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        >
          {["Todos", "Vigente", "Pendente", "Cancelada"].map((s) => (
            <option key={s}>{s}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg border border-line bg-white">
        <table className="w-full min-w-[640px] text-left text-sm">
          <thead className="border-b border-line bg-[color-mix(in_oklab,var(--accent-soft)_55%,white)] font-display text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-3 py-2 font-semibold">Apólice</th>
              <th className="px-3 py-2 font-semibold">Cliente</th>
              <th className="px-3 py-2 font-semibold">Produto</th>
              <th className="px-3 py-2 font-semibold">Prêmio</th>
              <th className="px-3 py-2 font-semibold">Vigência</th>
              <th className="px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((p) => (
              <tr key={p.id} className="border-b border-line/70">
                <td className="px-3 py-2 font-display text-xs">{p.id}</td>
                <td className="px-3 py-2">{p.client}</td>
                <td className="px-3 py-2">{p.product}</td>
                <td className="px-3 py-2">{p.premium}</td>
                <td className="px-3 py-2 text-ink-muted">
                  {p.start} — {p.end}
                </td>
                <td className="px-3 py-2">{p.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
