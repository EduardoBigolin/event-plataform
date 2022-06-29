import { CheckCircle, Lock } from "phosphor-react";
import { isPast, format } from "date-fns";
import ptBR from "date-fns/esm/locale/pt-BR/index.js";
import { Link } from "react-router-dom";
interface LessonProps {
  title: string;
  slug: string;
  available: Date;
  type: "live" | "class";
}
export function Lesson(props: LessonProps) {
  const isLessonAvailable = isPast(props.available);
  const avaliableDateFormat = format(
    props.available,
    "EEEE' • ' d ' de ' MMMM ' • ' k'h'mm",
    {
      locale: ptBR,
    }
  );
  return (
    <Link to={`/event/lesson/${props.slug}`} className="group">
      <span className="text-gray-300">{avaliableDateFormat}</span>
      <div className=" rounded border border-gray-500 group-hover:border-green-500 transition-colors p-4 mt-2">
        <header className="flex items-center justify-between">
          {isLessonAvailable ? (
            <span className="text-blue-500 text-sm font-medium flex align-center gap-2">
              <CheckCircle size={20} />
              Conteúdo liberado
            </span>
          ) : (
            <span className="text-orange-500 text-sm font-medium flex align-center gap-2">
              <Lock size={20} />
              Em Breve
            </span>
          )}
          <span className="text-xs rounded py[0.125rem] px-2 text-white  border border-green-300 font-bold">
            {props.type === "live" ? "AO VIVO" : "AULA PRATICA"}
          </span>
        </header>
        <strong className="text-gray-200 mt-5 block">{props.title}</strong>
      </div>
    </Link>
  );
}
