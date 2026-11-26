"use client";

import { useMemo, useState } from "react";
import { demoContacts } from "@/content/demo-data";

export function CrmDemo() {
  const [query, setQuery] = useState("");
  const [status, setStatus] = useState("Todos");
  const [selectedId, setSelectedId] = useState(demoContacts[0]?.id);

  const filtered = useMemo(() => {
    return demoContacts.filter((c) => {
      const matchQuery =
        !query ||
        c.name.toLowerCase().includes(query.toLowerCase()) ||
        c.id.toLowerCase().includes(query.toLowerCase());
      const matchStatus = status === "Todos" || c.status === status;
      return matchQuery && matchStatus;
    });
  }, [query, status]);

  const selected =
    filtered.find((c) => c.id === selectedId) ?? filtered[0] ?? null;

  return (
    <div className="grid gap-4 lg:grid-cols-[1.2fr_0.8fr]">
      <div>
        <div className="flex flex-wrap gap-2">
          <input
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Buscar cooperado demo…"
            className="min-w-[180px] flex-1 rounded-md border border-line bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
          />
          <select
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            className="rounded-md border border-line bg-white px-3 py-2 text-sm outline-none ring-accent focus:ring-2"
          >
            {["Todos", "Ativo", "Prospect", "Inativo"].map((s) => (
              <option key={s}>{s}</option>
            ))}
          </select>
        </div>

        <div className="mt-4 overflow-x-auto rounded-lg border border-line bg-white">
          <table className="w-full min-w-[520px] text-left text-sm">
            <thead className="border-b border-line bg-[color-mix(in_oklab,var(--accent-soft)_55%,white)] font-display text-xs uppercase tracking-wide text-ink-muted">
              <tr>
                <th className="px-3 py-2 font-semibold">ID</th>
                <th className="px-3 py-2 font-semibold">Nome</th>
                <th className="px-3 py-2 font-semibold">Documento</th>
                <th className="px-3 py-2 font-semibold">Status</th>
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  onClick={() => setSelectedId(c.id)}
                  className={`cursor-pointer border-b border-line/70 transition hover:bg-accent-soft/40 ${
                    selected?.id === c.id ? "bg-accent-soft/60" : ""
                  }`}
                >
                  <td className="px-3 py-2 font-display text-xs">{c.id}</td>
                  <td className="px-3 py-2">{c.name}</td>
                  <td className="px-3 py-2 text-ink-muted">{c.document}</td>
                  <td className="px-3 py-2">{c.status}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <aside className="rounded-lg border border-line bg-white p-4">
        {selected ? (
          <>
            <p className="font-display text-xs font-semibold tracking-wide text-accent uppercase">
              Detalhe mascarado
            </p>
            <h2 className="font-display mt-2 text-xl font-bold text-ink">
              {selected.name}
            </h2>
            <dl className="mt-4 space-y-2 text-sm">
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">Documento</dt>
                <dd className="font-display">{selected.document}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">Agência</dt>
                <dd>{selected.agency}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">Segmento</dt>
                <dd>{selected.segment}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">Telefone</dt>
                <dd>{selected.phone}</dd>
              </div>
              <div className="flex justify-between gap-3">
                <dt className="text-ink-muted">E-mail</dt>
                <dd className="truncate">{selected.email}</dd>
              </div>
            </dl>
          </>
        ) : (
          <p className="text-sm text-ink-muted">Nenhum registro.</p>
        )}
      </aside>
    </div>
  );
}
