export const knowledgeArticles = [
  {
    "id": "approval",
    "title": "Social content approval",
    "summary": "Posts require approved copy, assets, accounts, disclosure, and scheduled window.",
    "content": "The publisher cannot approve their own restricted content when separation of duties is enabled.",
    "tags": [
      "social",
      "approval",
      "separation",
      "duties"
    ]
  },
  {
    "id": "publishing",
    "title": "Provider publishing",
    "summary": "Each network variant is an idempotent job with connection scope, deadline, and provider receipt.",
    "content": "Partial failure remains visible per network and retries never duplicate a confirmed post.",
    "tags": [
      "social",
      "publish",
      "provider",
      "retry"
    ]
  },
  {
    "id": "analytics",
    "title": "Analytics normalisation",
    "summary": "Provider metrics retain their native name, collection time, attribution window, and raw value.",
    "content": "Normalised reporting exposes mapping limitations rather than pretending metrics are identical.",
    "tags": [
      "social",
      "analytics",
      "metric",
      "provider"
    ]
  }
];
