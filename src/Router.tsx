import { Routes, Route } from "react-router-dom";
import { Event } from "./pages/Event";

export function Rotas() {
  return (
    <Routes>
      <Route path="/" element={<h1>oi</h1>} />
      <Route path="/event" element={<Event />} />
      <Route path="/event/lesson/:slug" element={<Event />} />
    </Routes>
  );
}
