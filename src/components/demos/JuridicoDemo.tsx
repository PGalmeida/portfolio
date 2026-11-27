"use client";

import { useMemo, useState } from "react";
import { demoLegalCases } from "@/content/demo-data";

export function JuridicoDemo() {
  const [status, setStatus] = useState("Todos");
  const [type, setType] = useState("Todos");

  const filtered = useMemo(
    () =>
      demoLegalCases.filter((item) => {
        const matchStatus = status === "Todos" || item.status === status;
        const matchType = type === "Todos" || item.type === type;
        return matchStatus && matchType;
      }),
    [status, type],
  );

  const abertos = demoLegalCases.filter((c) => c.status === "Aberto").length;
  const emAcordo = demoLegalCases.filter((c) => c.status === "Em acordo").length;

  return (
    <div className="space-y-4">
      <div className="grid gap-3 sm:grid-cols-3">
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="font-display text-xs text-ink-muted uppercase">
            Processos
          </p>
          <p className="font-display mt-1 text-2xl font-bold">
            {demoLegalCases.length}
          </p>
        </div>
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="font-display text-xs text-ink-muted uppercase">
            Em cobrança
          </p>
          <p className="font-display mt-1 text-2xl font-bold text-accent">
            {abertos}
          </p>
        </div>
        <div className="rounded-lg border border-line bg-white p-4">
          <p className="font-display text-xs text-ink-muted uppercase">
            Em acordo
          </p>
          <p className="font-display mt-1 text-2xl font-bold">{emAcordo}</p>
        </div>
      </div>

      <div className="flex flex-wrap justify-end gap-2">
        <select
          value={type}
          onChange={(e) => setType(e.target.value)}
          className="rounded-md border border-line bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        >
          {["Todos", "Cobrança", "Acordo", "Judicial"].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
        <select
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          className="rounded-md border border-line bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        >
          {["Todos", "Aberto", "Em acordo", "Encerrado"].map((option) => (
            <option key={option}>{option}</option>
          ))}
        </select>
      </div>

      <div className="overflow-x-auto rounded-lg border border-line bg-white">
        <table className="w-full min-w-[720px] text-left text-sm">
          <thead className="border-b border-line bg-[color-mix(in_oklab,var(--accent-soft)_55%,white)] font-display text-xs uppercase tracking-wide text-ink-muted">
            <tr>
              <th className="px-3 py-2 font-semibold">Processo</th>
              <th className="px-3 py-2 font-semibold">Cooperado</th>
              <th className="px-3 py-2 font-semibold">Tipo</th>
              <th className="px-3 py-2 font-semibold">Valor</th>
              <th className="px-3 py-2 font-semibold">Agência</th>
              <th className="px-3 py-2 font-semibold">Abertura</th>
              <th className="px-3 py-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody>
            {filtered.map((item) => (
              <tr key={item.id} className="border-b border-line/70">
                <td className="px-3 py-2 font-display text-xs text-accent">
                  {item.id}
                </td>
                <td className="px-3 py-2">{item.client}</td>
                <td className="px-3 py-2">{item.type}</td>
                <td className="px-3 py-2 font-display text-xs font-semibold">
                  {item.amount}
                </td>
                <td className="px-3 py-2 text-ink-muted">{item.agency}</td>
                <td className="px-3 py-2 text-ink-muted">{item.openedAt}</td>
                <td className="px-3 py-2">
                  <span
                    className={`inline-flex rounded-full px-2 py-0.5 text-xs font-semibold ${
                      item.status === "Aberto"
                        ? "bg-[#f3e6c8] text-[#8a5a12]"
                        : item.status === "Em acordo"
                          ? "bg-accent-soft text-accent"
                          : "bg-[#e8eef1] text-ink-muted"
                    }`}
                  >
                    {item.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
