import { useQuery } from 'react-query';
import { z } from 'zod';

const url = '/backgrounds/_index.json';
const schema = z.array(z.string());

export default (): string[] => {
  const { data } = useQuery(
    [url],
    async () =>
      fetch(url)
        .then((response) => response.json())
        .then(schema.parse),
    { suspense: true },
  );

  return data ?? [];
};
