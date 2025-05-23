import React from "react";

const lorem = `Lorem ipsum dolor sit amet, consectetur adipiscing elit. 
Suspendisse varius enim in eros elementum tristique.`;

function generateParagraphs(count: number) {
  return Array.from({ length: count }, (_, i) => (
    <p
      key={i}
      style={{
        fontSize: `${Math.random() * 1.5 + 0.8}em`,
        fontStyle: Math.random() > 0.5 ? "italic" : "normal",
        fontWeight: Math.random() > 0.5 ? "bold" : "normal",
        color: `hsl(${Math.floor(Math.random() * 360)}, 80%, 60%)`,
        margin: `${Math.random() * 1.5}em 0`
      }}
    >
      {lorem.repeat(Math.floor(Math.random() * 10) + 1)}
    </p>
  ));
}

export const IpsumBombPage: React.FC = () => {
  return (
    <div style={{ padding: "2em", maxHeight: "100vh", overflowY: "scroll" }}>
      <h2>💥 Lorem Ipsum Overkill 💥</h2>
      {generateParagraphs(200)}
    </div>
  );
};
