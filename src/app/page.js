"use client";

import { useState } from "react";

export default function Home() {
  const [isResizeable, setIsResizeable] = useState(true);
  const itemDragStart = (e) => {
    e.preventDefault();
    e.dataTransfer.setData("text", e.target.id);
    setIsResizeable(false);
  };

  const itemDrag = (e) => e.preventDefault();

  const itemDragEnd = (e) => {
    e.preventDefault();
    setIsResizeable(true);
  };

  const dragOver = (e) => e.preventDefault();

  const dropZone = (e) => {
    e.preventDefault();
    const data = e.dataTransfer.getData("text");
    e.target.appendChild(document.getElementById(data));
  };
  return (
    <>
      <main>
        <div class="wrap" onDrop={dropZone} onDragOver={dragOver}>
          <div id="side">
            <div></div>
          </div>
          <div id="side"></div>
          <div id="side"></div>
        </div>
      </main>
      <div class="code"></div>
      <footer onDrop={dropZone} onDragOver={dragOver}>
        <div
          id="header"
          class="item"
          draggable
          onDragStart={itemDragStart}
          onDrag={itemDrag}
          onDragEnd={itemDragEnd}
        ></div>
        <div></div>
      </footer>
    </>
  );
}
