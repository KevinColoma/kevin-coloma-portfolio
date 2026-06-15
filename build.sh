#!/bin/bash
set -e

echo "📦 Instalando LaTeX..."
apt-get update -qq
apt-get install -y -qq texlive-latex-base texlive-latex-recommended texlive-latex-extra texlive-fonts-recommended texlive-fonts-extra texlive-lang-spanish 2>/dev/null

echo "🔧 Compilando CV..."
pdflatex -interaction=nonstopmode -output-directory=public public/cv.tex
pdflatex -interaction=nonstopmode -output-directory=public public/cv.tex

echo "✅ CV compilado: public/cv.pdf"

echo "🚀 Construyendo sitio web..."
npm run build
