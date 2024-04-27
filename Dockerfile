FROM node:20-slim as build

ARG BUN_VERSION=1.0.15

WORKDIR /build

# Install Bun in the specified version
RUN apt update && apt install -y bash curl unzip && \
    curl https://bun.sh/install | bash -s -- bun-v${BUN_VERSION}

ENV PATH="${PATH}:/root/.bun/bin"

#
# Copy the lock file and app manifest, then install
# the dependencies, including the dev dependencies
#
COPY bun.lockb package.json ./

# Copy the application sources into the build stage
COPY . .
COPY .env /app/

RUN bun install
RUN bun run build

ENV HOST=0.0.0.0
ENV PORT=8080
EXPOSE 8080
CMD node ./dist/server/entry.mjs
