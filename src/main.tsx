import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import { MusicApp } from "./components/MusicApp.tsx";

const rootElement = document.getElementById("root")!;
const playlistUrl = rootElement.dataset.playlistUrl!;

createRoot(rootElement).render(
  <StrictMode>
    <MusicApp playlistUrl={playlistUrl} />
  </StrictMode>
);
