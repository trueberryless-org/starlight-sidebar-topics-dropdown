FROM node:20-alpine AS runtime
WORKDIR /app
COPY /docs/dist ./dist
EXPOSE 80
ENV HOST=0.0.0.0
ENV PORT=80
CMD ["node", "dist/server/entry.mjs"]
