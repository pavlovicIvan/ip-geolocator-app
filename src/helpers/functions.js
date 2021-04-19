export const callApi = (url, setLoading, setResponse) => {
  setLoading(true);
  fetch(url)
    .then((res) => res.json())
    .then(
      (result) => {
        setLoading(false);
        setResponse(result);
      },
      (error) => {
        console.log("error", error);
      }
    );
};

export const formatKey = (string) => {
  const separatedString = string.split("_").join(" ");
  // Set IP to uppercase, rest to first letter uppercase
  const firstUppercased =
    string.length === 2
      ? separatedString.toUpperCase()
      : separatedString.charAt(0).toUpperCase() + separatedString.slice(1);
  return firstUppercased;
};
