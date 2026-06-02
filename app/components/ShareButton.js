"use client";

import { useState } from "react";

export default function ShareButton({ verse, reference, meditation }) {
  const [saving, setSaving] = useState(false);

  async function handleShare() {
    setSaving(true);

    const w = 1080;
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = w;
    tempCanvas.height = 100;
    const tempCtx = tempCanvas.getContext("2d");

    /* Measure verse lines */
    tempCtx.font = 'italic 36px "Georgia", serif';
    const verseClean = verse.replace(/^"|"$/g, "");
    const cardInner = w - 240;
    const verseLines = wrapText(tempCtx, verseClean, cardInner);

    /* Measure meditation lines */
    tempCtx.font = '28px "Georgia", serif';
    const medLines = wrapText(tempCtx, meditation, w - 200);

    /* Calculate dynamic height */
    const verseLineH = 52;
    const medLineH = 44;
    const versePad = 70;
    const refGap = 40;
    const cardH = versePad + verseLines.length * verseLineH + refGap + 30 + versePad;
    const cardY = 220;
    const dividerY = cardY + cardH + 50;
    const medStartY = dividerY + 50;
    const divider2Y = medStartY + medLines.length * medLineH + 40;
    const h = divider2Y + 110;

    /* Create final canvas */
    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");

    /* Parchment background */
    ctx.fillStyle = "#FAF8F4";
    ctx.fillRect(0, 0, w, h);

    /* Logo text — WHERE */
    ctx.fillStyle = "#C9A84C";
    ctx.font = '24px "Georgia", serif';
    ctx.textAlign = "center";
    ctx.letterSpacing = "6px";
    ctx.fillText("WHERE", w / 2, 100);

    /* Logo text — Christ Is */
    ctx.fillStyle = "#1A3A6B";
    ctx.font = 'italic 52px "Georgia", serif';
    ctx.letterSpacing = "0px";
    ctx.fillText("Christ Is", w / 2, 160);

    /* Gold line under logo */
    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 1;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 40, 180);
    ctx.lineTo(w / 2 + 40, 180);
    ctx.stroke();
    ctx.globalAlpha = 1;

    /* Dawn-light glow card */
    const cardX = 80;
    const cardW = w - 160;
    const radius = 16;
    ctx.fillStyle = "#F4E7C9";
    ctx.beginPath();
    ctx.moveTo(cardX + radius, cardY);
    ctx.lineTo(cardX + cardW - radius, cardY);
    ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + radius);
    ctx.lineTo(cardX + cardW, cardY + cardH - radius);
    ctx.quadraticCurveTo(cardX + cardW, cardY + cardH, cardX + cardW - radius, cardY + cardH);
    ctx.lineTo(cardX + radius, cardY + cardH);
    ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - radius);
    ctx.lineTo(cardX, cardY + radius);
    ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
    ctx.closePath();
    ctx.fill();

    /* Verse text */
    ctx.fillStyle = "#1A3A6B";
    ctx.font = 'italic 36px "Georgia", serif';
    ctx.textAlign = "center";
    const verseStartY = cardY + versePad;
    verseLines.forEach((line, i) => {
      ctx.fillText(line, w / 2, verseStartY + i * verseLineH);
    });

    /* Reference */
    ctx.fillStyle = "#9A8A6A";
    ctx.font = '24px "Georgia", serif';
    const refY = verseStartY + verseLines.length * verseLineH + refGap;
    ctx.fillText(reference, w / 2, refY);

    /* Gold divider between card and meditation */
    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 24, dividerY);
    ctx.lineTo(w / 2 + 24, dividerY);
    ctx.stroke();

    /* Meditation text */
    ctx.fillStyle = "#6B5E4A";
    ctx.font = '28px "Georgia", serif';
    ctx.textAlign = "center";
    medLines.forEach((line, i) => {
      ctx.fillText(line, w / 2, medStartY + i * medLineH);
    });

    /* Gold divider below meditation */
    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 1;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 24, divider2Y);
    ctx.lineTo(w / 2 + 24, divider2Y);
    ctx.stroke();

    /* Site URL */
    ctx.fillStyle = "#9A8A6A";
    ctx.font = '22px "Georgia", serif';
    ctx.globalAlpha = 0.6;
    ctx.fillText("wherechristis.com", w / 2, h - 52);
    ctx.globalAlpha = 1;

    /* Tagline */
    ctx.fillStyle = "#9A8A6A";
    ctx.font = 'italic 20px "Georgia", serif';
    ctx.globalAlpha = 0.4;
    ctx.fillText("\u201CSet your mind on things above.\u201D", w / 2, h - 22);
    ctx.globalAlpha = 1;

    /* Download */
    const link = document.createElement("a");
    link.download = "where-christ-is-today.png";
    link.href = canvas.toDataURL("image/png");
    link.click();

    setSaving(false);
  }

  return (
    <button
      onClick={handleShare}
      disabled={saving}
      style={{
        background: "none",
        border: "none",
        color: "var(--gold)",
        fontSize: "12px",
        fontFamily: "inherit",
        cursor: "pointer",
        padding: "8px 16px",
        marginTop: "12px",
        letterSpacing: "0.5px",
        textDecoration: "underline",
        textUnderlineOffset: "3px",
      }}
    >
      {saving ? "Saving..." : "Share this as an image"}
    </button>
  );
}

/* Helper: wrap text into lines that fit a max width */
function wrapText(ctx, text, maxWidth) {
  const words = text.split(" ");
  const lines = [];
  let current = "";

  for (const word of words) {
    const test = current ? current + " " + word : word;
    if (ctx.measureText(test).width > maxWidth) {
      lines.push(current);
      current = word;
    } else {
      current = test;
    }
  }
  if (current) lines.push(current);
  return lines;
}