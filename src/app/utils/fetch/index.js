const fetchAction = (path, method, header, payload = undefined, signal) => {
  let headers = {
    Accept: 'application/json',
    'Content-Type': 'application/json',
  };

  if (header) {
    headers = {
      ...headers,
      ...header,
    };
  }

  const options = {headers, method};

  if (payload) {
    options['body'] = JSON.stringify(payload);
  }

  return fetch(path, options, {signal});
};

export default async (path, method, header, payload = undefined, signal) => {
  try {
    return fetchAction(path, method, header, payload, signal);
  } catch (error) {
    return new Error();
  }
};
