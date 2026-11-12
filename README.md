Garment Manufacturing ERP Modules

Full-stack enterprise garment manufacturing ERP modules built with React.js, TypeScript, Node.js / Express.js, and Oracle / MS SQL Server. Designed for real-time shop-floor piece tracking, purchase order tax automation, hourly line production reporting, and re-cut management.

Key Features

Hourly Production & Line-Wise WIP Dashboards: Tracks garment piece output across Sewing, Checking, and Packing stages by hour slot with dynamic line, style, and date filters.

QR Barcode Piece-Level Tracking (Issue, Receipt, Scan): Full-stack QR scanning workflows with debounced auto-scan and duplicate-scan validation to prevent double entry on manufacturing lines.

Purchase Order GST Split Automation: Multi-select item lookup modal with automatic state-code tax calculation (CGST + SGST for intra-state suppliers; IGST for inter-state suppliers).

Re-Cut Management Module: Dedicated React screen, Express REST API routes, and relational Oracle database tables to log, approve, and audit fabric re-cut requests.

Tech Stack & Architecture
Layer&Technologies Used FrontendReact.js, TypeScript, Vite, Tailwind CSS, AxiosBackend APINode.js, Express.js, RESTful APIs, JSON Schema ValidationDatabaseOracle Database (PL/SQL Stored Procedures, PIVOT, LISTAGG, Bind Variables), MS SQL ServerDeveloper ToolsGit, GitHub, Postman, VS Code
