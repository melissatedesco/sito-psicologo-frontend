import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { CalendarCheck, CircleX } from "lucide-react";
import api from "../api";

export default function GestioneAppuntamento() {
  const { token } = useParams();
  const [appuntamento, setAppuntamento] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [disdetto, setDisdetto] = useState(false);

  useEffect(() => {
    const load = async () => {
      try {
        const res = await api.get(`/manage/${token}`);
        setAppuntamento(res.data);
      } catch {
        setError("Appuntamento non trovato o link non valido");
      } finally {
        setLoading(false);
      }
    };
    load();
  }, [token]);

  const handleDisdici = async () => {
    if (!confirm("Vuoi davvero disdire questo appuntamento?")) return;
    try {
      await api.delete(`/manage/${token}`);
      setDisdetto(true);
    } catch {
      alert("Errore durante la disdetta");
    }
  };

  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4">
        <div className="w-full max-w-md bg-white border border-line rounded-2xl p-8 text-center">
          {loading ? (
            <p className="text-ink/60">Caricamento...</p>
          ) : error ? (
            <>
              <CircleX
                className="w-14 h-14 text-red-500 mx-auto mb-4"
                strokeWidth={1.5}
              />
              <p className="text-ink/70">{error}</p>
            </>
          ) : disdetto ? (
            <>
              <CircleX
                className="w-14 h-14 text-ink/40 mx-auto mb-4"
                strokeWidth={1.5}
              />
              <p className="text-ink/70 mb-6">
                La tua prenotazione è stata annullata
              </p>
              <Link
                to="/"
                className="rounded-full bg-primary px-6 py-3 font-medium text-white
                hover:bg-primary-hover transition-colors inline-block"
              >
                Torna al sito
              </Link>
            </>
          ) : (
            <>
              <CalendarCheck
                className="w-14 h-14 text-primary mx-auto mb-4"
                strokeWidth={1.5}
              />
              <h1 className="font-serif text-3xl font-bold text-ink mb-4">
                Il tuo appuntamento
              </h1>
              <div className="text-ink/80 mb-6 space-y-1">
                <p>
                  <strong>Data:</strong>{" "}
                  {appuntamento.date}
                </p>
                <p>
                  <strong>Ora:</strong>{" "}
                  {appuntamento.startTime}
                </p>
                <p>
                  <strong>Intestatario:</strong>{" "}
                  {appuntamento.clientName}
                </p>
              </div>
              <button
                onClick={handleDisdici}
                className="rounded-full border border-red-200 text-red-600 px-6 py-3 font-medium hover:bg-red-50 transition-colors"
              >
                Disdici appuntamento
              </button>
            </>
          )}
        </div>
      </div>
    </>
  );
}
