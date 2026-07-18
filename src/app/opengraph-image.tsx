import { ImageResponse } from "next/og";
import { readFile } from "node:fs/promises";
import { join } from "node:path";
import { SITE_URL } from "@/config";
import { profile } from "@/data/profile";

export const alt = `${profile.name} — Links`;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

// The bio's first sentence reads well as a standalone tagline.
const tagline = profile.bio.split(". ")[0] + ".";
const domain = SITE_URL.replace(/^https?:\/\//, "");

export default async function OpengraphImage() {
  const avatar = await readFile(join(process.cwd(), "public/avatar.jpg"));
  const avatarSrc = `data:image/jpeg;base64,${avatar.toString("base64")}`;

  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          padding: "80px",
          color: "#e8dfec",
          backgroundColor: "#15101a",
          backgroundImage:
            "radial-gradient(circle at 25% 15%, rgba(124,91,131,0.55), transparent 55%), radial-gradient(circle at 85% 95%, rgba(90,61,101,0.5), transparent 50%)",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", alignItems: "center", gap: "40px" }}>
          {/* eslint-disable-next-line @next/next/no-img-element -- next/og requires a raw <img> */}
          <img
            src={avatarSrc}
            alt=""
            width={180}
            height={180}
            style={{
              borderRadius: "50%",
              border: "4px solid rgba(176,146,184,0.6)",
              objectFit: "cover",
            }}
          />
          <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
            <div style={{ fontSize: 76, fontWeight: 700, lineHeight: 1.05 }}>
              {profile.name}
            </div>
            <div
              style={{
                fontSize: 30,
                fontWeight: 600,
                color: "#b092b8",
                textTransform: "uppercase",
                letterSpacing: "4px",
              }}
            >
              All my links
            </div>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            fontSize: 40,
            lineHeight: 1.35,
            color: "#c9bcd0",
            maxWidth: "960px",
          }}
        >
          {tagline}
        </div>

        <div
          style={{
            display: "flex",
            alignSelf: "flex-start",
            fontSize: 30,
            fontWeight: 600,
            color: "#15101a",
            background: "#b092b8",
            padding: "14px 32px",
            borderRadius: "50px",
          }}
        >
          {domain}
        </div>
      </div>
    ),
    { ...size },
  );
}
