import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import css from "./index.css?inline";
import { MusicApp } from "./components/MusicApp.tsx";

const rootElement = document.getElementById("root")!;
const playlistUrl = rootElement.dataset.playlistUrl!;

const style = document.createElement("style");
style.textContent = css;
document.head.appendChild(style);

createRoot(rootElement).render(
  <StrictMode>
    <MusicApp playlistUrl={playlistUrl} />
  </StrictMode>
);
