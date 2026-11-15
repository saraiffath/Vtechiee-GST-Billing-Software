# Vtechiee GST Billing Software

An independent, MIT-licensed edition maintained by **Vtechiee Systems**, based on [Free GST Billing Software by DiceCodes](https://github.com/IamRamgarhia/Free-GST-Billing-Software), upstream version 1.10.83 (snapshot `316797ccb2adf8a527cfaa60f0a0e185019ae9db`).

## Features

- GST invoices, quotations, credit notes, bills of supply and delivery challans.
- GSTR-1 / GSTR-3B exports, GSTR-2B reconciliation, e-invoice and e-way bill data preparation.
- Inventory, purchases, recurring billing, cash book and TDS/TCS reporting.
- Local data storage, backups, optional Google Drive backup, and offline-first React PWA.

## Run from source

Use Node.js 22 LTS and npm. In this directory:

```sh
npm ci
npm run build
npm run server
```

Open http://localhost:47371 (or the loopback port printed by the server). Do not expose this local single-user application to the public Internet. For development, use `npm run dev` (Windows: `npm run dev:win`).

## Validation and releases

```sh
npm run lint
npm run test:unit
npm run build
```

The source import has not been certified for production or current GST filing. Validate invoice calculations, exports, backup/restore, printing and local security with sample data before using real records. No Vtechiee installer release has been published yet; use source setup until a tested release is available. Upstream documentation and screenshots are retained for reference and may show older branding or upstream support links.

## Ownership and attribution

- Vtechiee edition and original modifications: Copyright (c) 2026 Vtechiee Systems.
- Original software: Copyright (c) 2026 DiceCodes (Contact@dicecodes.com).
- Distributed under the [MIT License](LICENSE). Upstream attribution and permissions are preserved.
- Repository: https://github.com/saraiffath/Vtechiee-GST-Billing-Software

For Vtechiee issues, use this repository's Issues page. For security vulnerabilities, see [SECURITY.md](SECURITY.md). Do not share customer or invoice data in public reports.
