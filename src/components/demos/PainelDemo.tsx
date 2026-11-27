"use client";

import { useState } from "react";
import {
  demoDashboardKpis,
  demoIndicatorMonths,
  demoPortfolioSegments,
} from "@/content/demo-data";

export function PainelDemo() {
  const [period, setPeriod] = useState("6m");

  const maxCredito = Math.max(...demoIndicatorMonths.map((m) => m.credito));

  return (
    <div className="space-y-5">
      <div className="flex flex-wrap items-end justify-between gap-3">
        <div>
          <p className="font-display text-xs font-semibold tracking-[0.12em] text-accent uppercase">
            Resumo geral
          </p>
          <h2 className="font-display mt-1 text-lg font-bold text-ink">
            Dashboard de operações
          </h2>
          <p className="mt-1 text-sm text-ink-muted">
            Indicadores demonstrativos — valores 100% inventados.
          </p>
        </div>
        <select
          value={period}
          onChange={(e) => setPeriod(e.target.value)}
          className="rounded-md border border-line bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
        >
          <option value="30d">Últimos 30 dias</option>
          <option value="6m">Últimos 6 meses</option>
          <option value="12m">Últimos 12 meses</option>
        </select>
      </div>

      <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
        {demoDashboardKpis.map((kpi) => (
          <div
            key={kpi.id}
            className="rounded-xl border border-line bg-white p-4 shadow-[0_8px_20px_rgba(15,28,36,0.04)]"
          >
            <p className="font-display text-xs font-semibold tracking-wide text-ink-muted uppercase">
              {kpi.label}
            </p>
            <p className="font-display mt-2 text-2xl font-bold text-ink">
              {kpi.value}
            </p>
            <p className="mt-1 text-sm text-ink-muted">{kpi.detail}</p>
            {kpi.id === "metas" ? (
              <div className="mt-3 h-2 overflow-hidden rounded-full bg-accent-soft">
                <div className="h-full w-[87%] rounded-full bg-accent" />
              </div>
            ) : null}
            <p className="mt-3 text-xs text-ink-muted">{kpi.footnote}</p>
          </div>
        ))}
      </div>

      <div className="grid gap-4 lg:grid-cols-2">
        <div className="rounded-xl border border-line bg-white p-4 md:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-bold text-ink">
                Carteira por segmento
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Distribuição fictícia · total R$ 128,7 Mi
              </p>
            </div>
            <span className="rounded-md bg-accent-soft px-2 py-1 font-display text-[11px] font-semibold text-accent">
              Demo
            </span>
          </div>

          <ul className="mt-5 space-y-3">
            {demoPortfolioSegments.map((segment) => (
              <li
                key={segment.name}
                className="flex items-center justify-between gap-3 border-b border-line/70 pb-3 last:border-0 last:pb-0"
              >
                <div className="min-w-0">
                  <p className="font-display text-sm font-semibold text-ink">
                    {segment.name}
                  </p>
                  <div className="mt-2 h-1.5 w-40 max-w-full overflow-hidden rounded-full bg-[#e8eef1]">
                    <div
                      className="h-full rounded-full bg-accent"
                      style={{ width: segment.share }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-display text-sm font-bold text-ink">
                    {segment.share}
                  </p>
                  <p className="text-xs text-ink-muted">{segment.amount}</p>
                </div>
              </li>
            ))}
          </ul>
          <p className="mt-4 rounded-md bg-accent-soft/60 px-3 py-2 text-xs text-ink-muted">
            Carteira total cresceu 2,4% nos últimos 30 dias (dado inventado).
          </p>
        </div>

        <div className="rounded-xl border border-line bg-white p-4 md:p-5">
          <div className="flex items-start justify-between gap-3">
            <div>
              <h3 className="font-display text-base font-bold text-ink">
                Evolução de indicadores
              </h3>
              <p className="mt-1 text-sm text-ink-muted">
                Metas (% atingido) e crédito (R$ Mi) · período {period}
              </p>
            </div>
          </div>

          <div className="mt-6 flex h-44 items-end gap-2 sm:gap-3">
            {demoIndicatorMonths.map((point) => (
              <div
                key={point.month}
                className="flex min-w-0 flex-1 flex-col items-center gap-2"
              >
                <div className="flex h-32 w-full items-end justify-center gap-1">
                  <div
                    className="w-2.5 rounded-t bg-accent sm:w-3"
                    style={{ height: `${point.metas}%` }}
                    title={`Metas ${point.metas}%`}
                  />
                  <div
                    className="w-2.5 rounded-t bg-[#4a5c67]/35 sm:w-3"
                    style={{
                      height: `${(point.credito / maxCredito) * 100}%`,
                    }}
                    title={`Crédito ${point.credito} Mi`}
                  />
                </div>
                <span className="font-display text-[11px] font-semibold text-ink-muted">
                  {point.month}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-4 flex flex-wrap gap-4 text-xs text-ink-muted">
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-accent" />
              Metas (% atingido)
            </span>
            <span className="inline-flex items-center gap-1.5">
              <span className="h-2 w-2 rounded-full bg-[#4a5c67]/35" />
              Crédito (R$ Mi)
            </span>
          </div>
          <p className="mt-3 rounded-md bg-[#e8eef1] px-3 py-2 text-xs text-ink-muted">
            Tendência geral positiva nos últimos 6 meses (série fictícia).
          </p>
        </div>
      </div>
    </div>
  );
}
