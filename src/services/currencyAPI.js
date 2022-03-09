const getCurrencyApi = async () => {
  const URL_REQUEST = 'https://economia.awesomeapi.com.br/json/all';
  const requestApi = await fetch(URL_REQUEST);
  const result = await requestApi.json();
  return result;
};

export default getCurrencyApi;
