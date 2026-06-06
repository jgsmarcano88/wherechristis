"use client";

import { useState } from "react";

export default function ShareButton({
  verse,
  reference,
  meditation,
  shareLabel = "Share this as an image",
  preparingLabel = "Preparing...",
  tagline = "Set your mind on things above.",
  sendLabel = "Send this to someone",
}) {
  const [saving, setSaving] = useState(false);
  const [hover, setHover] = useState(false);

  async function handleShare() {
    setSaving(true);

    const w = 1080;
    const tempCanvas = document.createElement("canvas");
    tempCanvas.width = w;
    tempCanvas.height = 100;
    const tempCtx = tempCanvas.getContext("2d");

    tempCtx.font = 'italic 28px "Georgia", serif';
    const verseClean = verse.replace(/^"|"$/g, "");
    const cardInner = w - 300;
    const verseLines = wrapText(tempCtx, verseClean, cardInner);

    tempCtx.font = '22px "Georgia", serif';
    const medLines = wrapText(tempCtx, meditation, w - 260);

    const verseLineH = 42;
    const medLineH = 34;
    const versePad = 44;
    const refGap = 28;
    const cardH =
      versePad + verseLines.length * verseLineH + refGap + 20 + versePad - 10;
    const cardY = 168;
    const dividerY = cardY + cardH + 32;
    const medStartY = dividerY + 32;
    const divider2Y = medStartY + medLines.length * medLineH + 28;
    const h = divider2Y + 80;

    const canvas = document.createElement("canvas");
    canvas.width = w;
    canvas.height = h;
    const ctx = canvas.getContext("2d");

    ctx.fillStyle = "#FAF8F4";
    ctx.fillRect(0, 0, w, h);

    ctx.fillStyle = "#C9A84C";
    ctx.font = '18px "Georgia", serif';
    ctx.textAlign = "center";
    ctx.letterSpacing = "5px";
    ctx.fillText("WHERE", w / 2, 64);

    ctx.fillStyle = "#1A3A6B";
    ctx.font = 'italic 42px "Georgia", serif';
    ctx.letterSpacing = "0px";
    ctx.fillText("Christ Is", w / 2, 112);

    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 0.75;
    ctx.globalAlpha = 0.6;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 28, 128);
    ctx.lineTo(w / 2 + 28, 128);
    ctx.stroke();
    ctx.globalAlpha = 1;

    const cardX = 110;
    const cardW = w - 220;
    const radius = 12;
    ctx.fillStyle = "#F4E7C9";
    ctx.beginPath();
    ctx.moveTo(cardX + radius, cardY);
    ctx.lineTo(cardX + cardW - radius, cardY);
    ctx.quadraticCurveTo(cardX + cardW, cardY, cardX + cardW, cardY + radius);
    ctx.lineTo(cardX + cardW, cardY + cardH - radius);
    ctx.quadraticCurveTo(
      cardX + cardW,
      cardY + cardH,
      cardX + cardW - radius,
      cardY + cardH
    );
    ctx.lineTo(cardX + radius, cardY + cardH);
    ctx.quadraticCurveTo(cardX, cardY + cardH, cardX, cardY + cardH - radius);
    ctx.lineTo(cardX, cardY + radius);
    ctx.quadraticCurveTo(cardX, cardY, cardX + radius, cardY);
    ctx.closePath();
    ctx.fill();

    ctx.fillStyle = "#1A3A6B";
    ctx.font = 'italic 28px "Georgia", serif';
    ctx.textAlign = "center";
    const verseStartY = cardY + versePad;
    verseLines.forEach((line, i) => {
      ctx.fillText(line, w / 2, verseStartY + i * verseLineH);
    });

    ctx.fillStyle = "#9A8A6A";
    ctx.font = '18px "Georgia", serif';
    const refY = verseStartY + verseLines.length * verseLineH + refGap;
    ctx.fillText(reference, w / 2, refY);

    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 16, dividerY);
    ctx.lineTo(w / 2 + 16, dividerY);
    ctx.stroke();

    ctx.fillStyle = "#6B5E4A";
    ctx.font = '22px "Georgia", serif';
    ctx.textAlign = "center";
    medLines.forEach((line, i) => {
      ctx.fillText(line, w / 2, medStartY + i * medLineH);
    });

    ctx.strokeStyle = "#C9A84C";
    ctx.lineWidth = 0.75;
    ctx.beginPath();
    ctx.moveTo(w / 2 - 16, divider2Y);
    ctx.lineTo(w / 2 + 16, divider2Y);
    ctx.stroke();

    ctx.fillStyle = "#9A8A6A";
    ctx.font = '17px "Georgia", serif';
    ctx.globalAlpha = 0.6;
    ctx.fillText("wherechristis.com", w / 2, h - 38);
    ctx.globalAlpha = 1;

    ctx.fillStyle = "#9A8A6A";
    ctx.font = 'italic 15px "Georgia", serif';
    ctx.globalAlpha = 0.4;
    ctx.fillText("\u201C" + tagline + "\u201D", w / 2, h - 14);
    ctx.globalAlpha = 1;

    canvas.toBlob(async (blob) => {
      if (navigator.share && navigator.canShare) {
        try {
          const file = new File([blob], "where-christ-is-today.png", {
            type: "image/png",
          });
          if (navigator.canShare({ files: [file] })) {
            await navigator.share({ files: [file], title: "Where Christ Is" });
            setSaving(false);
            return;
          }
        } catch (e) {}
      }
      const link = document.createElement("a");
      link.download = "where-christ-is-today.png";
      link.href = URL.createObjectURL(blob);
      link.click();
      URL.revokeObjectURL(link.href);
      setSaving(false);
    }, "image/png");
  }

  async function handleSend() {
    const text = "I found something quiet and good — wherechristis.com";
    if (navigator.share) {
      try {
        await navigator.share({ text });
        return;
      } catch (e) {}
    }
    const url =
      "https://wa.me/?text=" + encodeURIComponent(text);
    window.open(url, "_blank");
  }

  return (
    <div style={{ marginTop: "20px", textAlign: "center" }}>
      <button
        onClick={handleShare}
        disabled={saving}
        onMouseEnter={() => setHover(true)}
        onMouseLeave={() => setHover(false)}
        style={{
          background: hover ? "var(--gold)" : "transparent",
          border: "1px solid var(--gold)",
          color: hover ? "#FAF8F4" : "var(--gold)",
          fontSize: "14px",
          fontFamily: "inherit",
          cursor: "pointer",
          padding: "12px 28px",
          borderRadius: "999px",
          letterSpacing: "0.5px",
          transition: "all 0.25s ease",
        }}
      >
        {saving ? preparingLabel : shareLabel}
      </button>

      <div style={{ marginTop: "16px" }}>
        <button
          onClick={handleSend}
          style={{
            background: "none",
            border: "none",
            color: "var(--gold)",
            fontSize: "13px",
            fontFamily: "inherit",
            cursor: "pointer",
            letterSpacing: "0.5px",
            textDecoration: "underline",
            textUnderlineOffset: "3px",
            opacity: 0.8,
          }}
        >
          {sendLabel}
        </button>
      </div>
    </div>
  );
}

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