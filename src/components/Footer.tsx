import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="py-8 px-4 border-t border-white/5">
      <div className="max-w-6xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-text-muted text-sm">
          &copy; {new Date().getFullYear()} Kevin Coloma. Todos los derechos
          reservados.
        </p>
        <p className="text-text-muted text-sm flex items-center gap-1">
          Hecho con <Heart size={14} className="text-red-400 fill-red-400" /> y
          mucho caf&eacute;
        </p>
      </div>
    </footer>
  );
}
