# ⚖️ AI Lawyer – Webbasierte Rechtsassistenz

**AI Lawyer** ist eine webbasierte Anwendung, die juristische Fragen mittels Künstlicher Intelligenz beantwortet. Nutzer können Fragen stellen, Dokumente hochladen und automatisch rechtssichere Schreiben generieren lassen – mit der Option einer späteren anwaltlichen Prüfung.

---

## 🚀 Features

- 💬 **Interaktiver KI-Chat** für juristische Fragen (z. B. Mietrecht, Arbeitsrecht, Verbraucherschutz)
- 📄 **Dokument-Upload** (PDF, DOCX) mit automatisierter Prüfung & Analyse
- ✍️ **Generierung von Schreiben** (z. B. Kündigungen, Mahnungen, Rückforderungen)
- 👩‍⚖️ **Optionale Verifikation durch echte Anwaltskanzleien**
- 🔒 **Registrierungspflichtig** zur Nutzung, mit Authentifizierungssystem
- 🖥️ **Responsive Web-App** mit klarer Landing Page und Nutzerführung

---

## 🛠️ Tech Stack

| Layer             | Technologie                                                                                |
| ----------------- | ------------------------------------------------------------------------------------------ |
| Frontend          | Angular                                                                                    |
| Backend           | Node.js + Express (oder Nest.js empfohlen)                                                 |
| Authentifizierung | z. B. Firebase Auth, Auth0 oder JWT-basierte Lösung                                        |
| KI-Anbindung      | OpenAI API (GPT-4/o4) via REST                                                             |
| Datei-Upload      | Multer (Node.js) oder Firebase Storage                                                     |
| Automatisierung   | [n8n](https://n8n.io) für Backend-Workflows (z. B. Analyse, Weiterleitung, E-Mail-Trigger) |
| Deployment        | Vercel, Netlify oder eigener Server                                                        |

---

## 🧪 Erste Schritte (lokale Entwicklung)

```bash
# 1. Clone Repository (HTTPS or SSH)

# HTTPS
git clone https://github.com/tombrt165/ai-lawyer.git
cd ai-lawyer
```

```bash
# SSH
git clone git@github.com:tombrt265/ai-lawyer.git
cd ai-lawyer
```

```bash
# 2. Install Dependencies
npm install
npm install -g @angular/cli
npm install -g json-server

# 3. Start Development Server
ng serve
```

```bash
# 4. Start Database
json-server db.json
```
