import { useEffect, useState } from "react";

const formatter = new Intl.DateTimeFormat("pt-BR", {
  timeZone: "America/Sao_Paulo",
  hour: "2-digit",
  minute: "2-digit",
  second: "2-digit",
  hourCycle: "h23",
});

/**
 * Retorna o horário local de Criciúma (America/Sao_Paulo) em tempo real,
 * no formato HH:MM:SS. Atualiza a cada segundo.
 */
export default function useLocalTime() {
  const [time, setTime] = useState(() => formatter.format(new Date()));

  useEffect(() => {
    const id = window.setInterval(() => {
      setTime(formatter.format(new Date()));
    }, 1000);

    return () => window.clearInterval(id);
  }, []);

  return time;
}