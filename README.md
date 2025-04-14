
# Crisantos Hardware

A modern e-commerce website for Crisantos Hardware store built with React, TypeScript, and Vite.

## Directory Structure

```
crisantos-hardware/
├── public/               # Static assets
│   ├── favicon.ico
│   └── images/           # Store images
├── src/
│   ├── components/       # UI components
│   │   ├── layout/       # Layout components
│   │   ├── ui/           # Reusable UI components
│   │   └── features/     # Feature-specific components
│   ├── data/             # Static data files
│   ├── hooks/            # Custom React hooks
│   ├── lib/              # Utility functions
│   ├── pages/            # Page components
│   └── styles/           # Global styles
└── package.json          # Dependencies and scripts
```

## Getting Started

### Prerequisites

- Node.js (v18 or higher)
- npm or yarn or bun

### Installation

1. Clone the repository:
```bash
git clone https://github.com/yourusername/crisantos-hardware.git
cd crisantos-hardware
```

2. Install dependencies:
```bash
npm install
# or
yarn install
# or
bun install
```

3. Start the development server:
```bash
npm run dev
# or
yarn dev
# or
bun dev
```

4. Open your browser and visit http://localhost:5173

## Running in Termux (Android)

1. Install Termux from the Google Play Store or F-Droid

2. Update Termux packages:
```bash
pkg update && pkg upgrade
```

3. Install required packages:
```bash
pkg install nodejs git openssh
```

4. Clone the repository:
```bash
git clone https://github.com/yourusername/crisantos-hardware.git
cd crisantos-hardware
```

5. Install dependencies and run:
```bash
npm install
npm run dev
```

6. Access the website by opening your mobile browser and navigating to http://localhost:5173

## Pushing to GitHub

1. Create a new repository on GitHub

2. Initialize Git in your project folder (if not already done):
```bash
git init
```

3. Add all files to Git:
```bash
git add .
```

4. Commit changes:
```bash
git commit -m "Initial commit"
```

5. Add your GitHub repository as a remote:
```bash
git remote add origin https://github.com/yourusername/crisantos-hardware.git
```

6. Push to GitHub:
```bash
git push -u origin main
```

7. For subsequent pushes, simply use:
```bash
git add .
git commit -m "Your commit message"
git push
```

## Technologies Used

- React
- TypeScript
- Vite
- Tailwind CSS
- Shadcn UI
- React Router
- Lucide Icons

## Color Scheme

- Gold: #D4AF37
- Blue: #1A365D
- White: #FFFFFF

## License

This project is licensed under the MIT License - see the LICENSE file for details.
