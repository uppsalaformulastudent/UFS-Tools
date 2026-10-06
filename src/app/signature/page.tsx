"use client";

import { useMemo, useRef, useState } from "react";
import Image from "next/image";

function escapeHtml(value: string) {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}

function createSignatureHtml({
  name,
  title,
  email,
  phone,
}: {
  name: string;
  title: string;
  email: string;
  phone: string;
}) {
  const safeName = escapeHtml(name || "Name");
  const safeTitle = escapeHtml(title || "Title");
  const safeEmail = escapeHtml(email || "mail@example.com");
  const safePhone = escapeHtml(phone);

  const phoneHref = phone.replace(/[^\d+]/g, "");

  const phoneRow = phone.trim()
    ? `
      <div
        style="
          font-family: Arial, Helvetica, sans-serif;
          font-size: 13px;
          line-height: 20px;
        "
      >
        <a
          href="tel:${phoneHref}"
          style="
            color: #555555;
            text-decoration: none;
          "
        >
          ${safePhone}
        </a>
      </div>
    `
    : "";

  return `
<table
  cellpadding="0"
  cellspacing="0"
  border="0"
  style="
    border-collapse: collapse;
    font-family: Arial, Helvetica, sans-serif;
    color: #171717;
  "
>
  <tbody>
    <tr>

      <!-- Left side -->
      <td
        valign="middle"
        align="center"
        style="
          width: 210px;
          padding: 10px 24px 10px 0;
        "
      >

        <!-- Logo -->
        <a
          href="https://uppsalaformulastudent.se"
          target="_blank"
          style="
            text-decoration: none;
          "
        >
          <img
            src="https://uppsalaformulastudent.se/mail/logo.png"
            alt="Uppsala Formula Student"
            width="190"
            style="
              display: block;
              width: 190px;
              max-width: 190px;
              height: auto;
              border: 0;
              outline: none;
              text-decoration: none;
            "
          />
        </a>

        <!-- Social icons -->
        <table
          cellpadding="0"
          cellspacing="0"
          border="0"
          align="center"
          style="
            border-collapse: collapse;
            margin-top: 14px;
          "
        >
          <tbody>
            <tr>

              <!-- LinkedIn -->
              <td style="padding: 0 5px;">
                <a
                  href="https://www.linkedin.com/company/uppsala-formula-student/home/"
                  target="_blank"
                  style="text-decoration: none;"
                >
                  <img
                    src="https://uppsalaformulastudent.se/mail/linkedin.png"
                    alt="LinkedIn"
                    width="30"
                    height="30"
                    style="
                      display: block;
                      width: 30px;
                      height: 30px;
                      border: 0;
                      outline: none;
                    "
                  />
                </a>
              </td>

              <!-- Instagram -->
              <td style="padding: 0 5px;">
                <a
                  href="https://www.instagram.com/uppsalafs/"
                  target="_blank"
                  style="text-decoration: none;"
                >
                  <img
                    src="https://uppsalaformulastudent.se/mail/instagram.png"
                    alt="Instagram"
                    width="30"
                    height="30"
                    style="
                      display: block;
                      width: 30px;
                      height: 30px;
                      border: 0;
                      outline: none;
                    "
                  />
                </a>
              </td>

            </tr>
          </tbody>
        </table>

      </td>

      <!-- Red separator -->
      <td
        width="3"
        style="
          width: 3px;
          background-color: #b22538;
          font-size: 1px;
          line-height: 1px;
        "
      >
        &nbsp;
      </td>

      <!-- Right side -->
      <td
        valign="middle"
        style="
          padding: 10px 0 10px 24px;
        "
      >

        <!-- Name -->
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            font-size: 22px;
            line-height: 26px;
            font-weight: bold;
            color: #171717;
            margin: 0;
            padding: 0;
          "
        >
          ${safeName}
        </div>

        <!-- Title -->
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            font-size: 16px;
            line-height: 22px;
            font-weight: bold;
            color: #b22538;
            margin: 2px 0 12px 0;
            padding: 0;
          "
        >
          ${safeTitle}
        </div>

        <!-- Email -->
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            line-height: 20px;
          "
        >
          <a
            href="mailto:${safeEmail}"
            style="
              color: #555555;
              text-decoration: none;
            "
          >
            ${safeEmail}
          </a>
        </div>

        ${phoneRow}

        <!-- Website -->
        <div
          style="
            font-family: Arial, Helvetica, sans-serif;
            font-size: 13px;
            line-height: 20px;
          "
        >
          <a
            href="https://uppsalaformulastudent.se"
            target="_blank"
            style="
              color: #555555;
              text-decoration: none;
            "
          >
            uppsalaformulastudent.se
          </a>
        </div>

      </td>
    </tr>
  </tbody>
</table>
`;
}

export default function SignatureGenerator() {
  const [name, setName] = useState("");
  const [title, setTitle] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const [copied, setCopied] = useState(false);

  const signatureRef = useRef<HTMLDivElement>(null);

  const signatureHtml = useMemo(
    () =>
      createSignatureHtml({
        name,
        title,
        email,
        phone,
      }),
    [name, title, email, phone],
  );

  function copySignature() {
    if (!signatureRef.current) return;

    const selection = window.getSelection();

    if (!selection) return;

    const range = document.createRange();

    range.selectNodeContents(signatureRef.current);

    selection.removeAllRanges();
    selection.addRange(range);

    const successful = document.execCommand("copy");

    selection.removeAllRanges();

    if (successful) {
      setCopied(true);

      window.setTimeout(() => {
        setCopied(false);
      }, 2000);
    }
  }

  return (
    <main className="min-h-screen bg-neutral-100 px-4 py-12">
      <div className="mx-auto max-w-3xl rounded-2xl bg-white p-6 shadow-sm md:p-10">
        <h1 className="text-3xl font-bold text-neutral-900">
          UFS E-postsignatur
        </h1>

        <p className="mt-3 text-neutral-600">
          Fyll i dina uppgifter för att skapa din Uppsala Formula Student
          e-postsignatur.
        </p>

        {/* Form */}
        <div className="mt-8 space-y-5">
          {/* Name */}
          <div>
            <label
              htmlFor="name"
              className="mb-2 block font-semibold text-neutral-800"
            >
              Namn
            </label>

            <input
              id="name"
              type="text"
              value={name}
              onChange={(event) => setName(event.target.value)}
              placeholder="Anna Andersson"
              className="
                w-full rounded-lg border border-neutral-300
                px-4 py-3
                text-neutral-900
                outline-none
                transition
                focus:border-[#b22538]
                focus:ring-2
                focus:ring-[#b22538]/20
              "
            />
          </div>

          {/* Title */}
          <div>
            <label
              htmlFor="title"
              className="mb-2 block font-semibold text-neutral-800"
            >
              Titel / Position
            </label>

            <input
              id="title"
              type="text"
              value={title}
              onChange={(event) => setTitle(event.target.value)}
              placeholder="Head of chassis"
              className="
                w-full rounded-lg border border-neutral-300
                px-4 py-3
                text-neutral-900
                outline-none
                transition
                focus:border-[#b22538]
                focus:ring-2
                focus:ring-[#b22538]/20
              "
            />
          </div>

          {/* Email */}
          <div>
            <label
              htmlFor="email"
              className="mb-2 block font-semibold text-neutral-800"
            >
              E-postadress
            </label>

            <input
              id="email"
              type="email"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              placeholder="name@uppsalaformulastudent.se"
              className="
                w-full rounded-lg border border-neutral-300
                px-4 py-3
                text-neutral-900
                outline-none
                transition
                focus:border-[#b22538]
                focus:ring-2
                focus:ring-[#b22538]/20
              "
            />
          </div>

          {/* Phone */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block font-semibold text-neutral-800"
            >
              Telefonnummer{" "}
              <span className="font-normal text-neutral-500">(valfritt)</span>
            </label>

            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              placeholder="+46 70 123 45 67"
              className="
                w-full rounded-lg border border-neutral-300
                px-4 py-3
                text-neutral-900
                outline-none
                transition
                focus:border-[#b22538]
                focus:ring-2
                focus:ring-[#b22538]/20
              "
            />
          </div>
        </div>

        {/* Preview */}
        <div className="mt-10">
          <h2 className="text-xl font-bold text-neutral-900">
            Förhandsvisning
          </h2>

          <div className="mt-4 overflow-x-auto rounded-xl border border-neutral-200 bg-white p-6">
            <div
              ref={signatureRef}
              dangerouslySetInnerHTML={{
                __html: signatureHtml,
              }}
            />
          </div>
        </div>

        {/* Copy button */}
        <button
          type="button"
          onClick={copySignature}
          className="
            mt-6
            rounded-lg
            bg-[#b22538]
            px-6
            py-3
            font-semibold
            text-white
            transition
            hover:bg-[#941e2e]
            active:scale-[0.98]
          "
        >
          {copied ? "Kopierad!" : "Kopiera signatur"}
        </button>

        {/* Instructions */}
        <div className="mt-10 rounded-xl bg-neutral-50 p-6">
          <h2 className="text-lg font-bold text-neutral-900">
            Lägg till signaturen i SnappyMail
          </h2>

<ol className="mt-4 list-decimal space-y-4 pl-5 text-neutral-700">
  <li>Fyll i dina uppgifter ovan.</li>

  <li>Klicka på &quot;Kopiera signatur&quot;.</li>

  <li>
    Öppna{" "}
    <a
      href="https://mail.uppsalaformulastudent.se"
      target="_blank"
      rel="noreferrer"
      className="text-[#b22538] underline"
    >
      mail.uppsalaformulastudent.se
    </a>
    .
  </li>

  <li>Gå till <strong>Settings → Accounts</strong>.</li>

  <li>
    Under <strong>Identities</strong>, välj den som är markerad <strong>Default</strong> exempelvis &lt;contact@uppsalaformulastudent.se&gt;.
  </li>
    <li>
    Gå till<strong>Signature</strong> sidan.
  </li>

  <li>
    Se till att <strong>HTML</strong> är aktiverat, <strong>inte Plain</strong>.
  </li>

  <li>Klistra in signaturen i rutan.</li>

  <li>Spara identiteten.</li>
</ol>
        </div>
      </div>
    </main>
  );
}
