"use client";

import { demoProposals, type DemoProposal } from "@/content/demo-data";

const stages: DemoProposal["stage"][] = [
  "Entrada",
  "Análise",
  "Aprovação",
  "Formalização",
  "Concluída",
];

export function CreditoDemo() {
  return (
    <div className="space-y-4">
      <p className="text-sm text-ink-muted">
        Pipeline de propostas CCB com valores e clientes fictícios.
      </p>
      <div className="flex gap-3 overflow-x-auto pb-2 md:grid md:grid-cols-5 md:overflow-visible md:pb-0">
        {stages.map((stage) => {
          const items = demoProposals.filter((p) => p.stage === stage);
          return (
            <div
              key={stage}
              className="min-h-[220px] w-[220px] shrink-0 rounded-lg border border-line bg-white p-3 md:w-auto"
            >
              <div className="flex items-center justify-between gap-2">
                <h3 className="font-display text-xs font-semibold tracking-wide text-ink uppercase">
                  {stage}
                </h3>
                <span className="rounded bg-accent-soft px-1.5 py-0.5 font-display text-[10px] font-semibold text-accent">
                  {items.length}
                </span>
              </div>
              <ul className="mt-3 space-y-2">
                {items.map((p) => (
                  <li
                    key={p.id}
                    className="rounded-md border border-line bg-bg-elevated/80 p-2 transition hover:border-accent"
                  >
                    <p className="font-display text-[11px] font-semibold text-accent">
                      {p.id}
                    </p>
                    <p className="mt-1 text-xs leading-snug text-ink">
                      {p.client}
                    </p>
                    <p className="mt-1 font-display text-xs font-semibold">
                      {p.amount}
                    </p>
                    <p className="mt-1 text-[10px] text-ink-muted">
                      Agência {p.agency}
                    </p>
                  </li>
                ))}
              </ul>
            </div>
          );
        })}
      </div>
    </div>
  );
}
