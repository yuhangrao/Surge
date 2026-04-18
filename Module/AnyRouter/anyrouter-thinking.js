(function () {
  if (!$request || $request.method !== "POST") {
    return $done({});
  }

  let body = $request.body;
  if (!body || typeof body !== "string") {
    return $done({});
  }

  let data;
  try {
    data = JSON.parse(body);
  } catch (e) {
    return $done({});
  }

  if (!data || typeof data !== "object" || Array.isArray(data)) {
    return $done({});
  }

  if (!data.thinking || typeof data.thinking !== "object" || Array.isArray(data.thinking)) {
    data.thinking = {};
  }

  data.thinking.type = "adaptive";

  $done({
    body: JSON.stringify(data)
  });
})();
