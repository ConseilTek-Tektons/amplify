# Amplify operations knowledge

## Social content approval

Posts require approved copy, assets, accounts, disclosure, and scheduled window.

The publisher cannot approve their own restricted content when separation of duties is enabled.

## Provider publishing

Each network variant is an idempotent job with connection scope, deadline, and provider receipt.

Partial failure remains visible per network and retries never duplicate a confirmed post.

## Analytics normalisation

Provider metrics retain their native name, collection time, attribution window, and raw value.

Normalised reporting exposes mapping limitations rather than pretending metrics are identical.

## Product boundary

Social networks control their APIs, scopes, review processes, rate limits, and feature availability. Amplify cannot restore capabilities a network does not expose.
