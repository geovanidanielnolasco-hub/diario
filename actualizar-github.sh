#!/bin/bash

# ========================================
# 🚀 Script para Actualizar GitHub
# ========================================
#
# Este script automatiza la subida de cambios a GitHub
#

# Colores para mensajes
GREEN='\033[0;32m'
BLUE='\033[0;34m'
YELLOW='\033[1;33m'
NC='\033[0m' # Sin color

echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${BLUE}💕 Actualizando Diario de Amor en GitHub${NC}"
echo -e "${BLUE}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""

# Cambiar al directorio del diario
cd "$(dirname "$0")"

# Paso 1: Agregar todos los cambios
echo -e "${YELLOW}📝 Agregando cambios...${NC}"
git add .

# Paso 2: Mostrar qué cambió
echo ""
echo -e "${YELLOW}📊 Cambios detectados:${NC}"
git status --short

# Paso 3: Pedir mensaje de commit
echo ""
echo -e "${YELLOW}✍️  Escribe un mensaje para este commit (o presiona Enter para usar el mensaje automático):${NC}"
read -r MENSAJE

# Si no se proporciona mensaje, usar uno automático con la fecha
if [ -z "$MENSAJE" ]; then
    FECHA=$(date '+%d de %B, %Y')
    MENSAJE="Actualización del diario - $FECHA"
fi

# Paso 4: Crear commit
echo ""
echo -e "${YELLOW}💾 Creando commit...${NC}"
git commit -m "$MENSAJE

Co-Authored-By: Claude Sonnet 4.5 <noreply@anthropic.com>"

# Paso 5: Subir a GitHub
echo ""
echo -e "${YELLOW}🚀 Subiendo a GitHub...${NC}"
git push

# Paso 6: Éxito
echo ""
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo -e "${GREEN}✅ ¡Diario actualizado exitosamente en GitHub!${NC}"
echo -e "${GREEN}━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━${NC}"
echo ""
echo -e "${BLUE}🌐 Ver en: https://github.com/geovanidanielnolasco-hub/diario${NC}"
echo ""
