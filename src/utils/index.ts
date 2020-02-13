export const isDev = () => process.env.NODE_ENV === 'development';

export const addToLocalStorageArray = (name: string, value: string) => {
  const existing: string | null = localStorage.getItem(name);
  const store: string[] = existing ? existing.split(',') : [];

  store.push(value);
  localStorage.setItem(name, store.toString());
};