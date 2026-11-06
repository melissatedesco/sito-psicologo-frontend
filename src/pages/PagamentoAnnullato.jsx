import { CircleX } from "lucide-react";
import { Link } from "react-router-dom";

export default function PagamentoAnnullato() {
  return (
    <>
      <div className="min-h-screen flex items-center justify-center px-4 text-center">
        <div className="max-w-md">
          <CircleX
            className="w-16 h-16 text-red-500 mx-auto mb-4"
            strokeWidth={1.5}
          />
          <h1 className="font-serif text-3xl font-bold text-ink mb-3">
            Pagamento annullato
          </h1>
          <p className="text-ink/70 mb-6">
            Il pagamento non è stato completato. Puoi riprovare quando vuoi o
            contattare lo studio per assistenza
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
