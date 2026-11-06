import { CircleCheck } from "lucide-react";
import { Link } from "react-router-dom";

export default function PagamentoOk() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div className="max-w-md">
          <CircleCheck className="w-16 h-16 text-primary mx-auto mb-4" strokeWidth={1.5} />
          <h1 className="font-serif text-3xl font-bold text-ink mb-3">
            Pagamento riuscito
          </h1>
          <p className="text-ink/70 mb-6">
            Grazie, il pagamento è stato completato con successo. Riceverai
            conferma via email.
          </p>
          <Link
            to="/"
            className="rounded-full bg-primary px-6 py-3 font-medium text-white hover:bg-primary-hover transition-colors"
          >
            Torna al sito
          </Link>
        </div>
      </div>
    </>
  );
}
