export const setErrorMsg = (exception: any, setError: any) => {
  if (exception.status === 400 && exception.data.result !== null) {
    Object.keys(exception.data.result).map((field: any) => {
      setError(field, { message: exception.data.result[field] });
    });
  }
};

export function setCookie(cname: string, cvalue: string, exdays: number) {
  const d = new Date();
  d.setTime(d.getTime() + exdays * 24 * 60 * 60 * 1000);
  const expires = "expires=" + d.toUTCString();
  document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
}

export function getCookie(cname: string) {
  const name = cname + "=";
  const ca = document.cookie.split(";");
  for (let i = 0; i < ca.length; i++) {
    let c = ca[i];
    while (c.charAt(0) == " ") {
      c = c.substring(1);
    }
    if (c.indexOf(name) == 0) {
      return c.substring(name.length, c.length);
    }
  }
  return "";
}

export function uCFirst(str: string) {
  const str1 = str.replace(str[0], str[0].toUpperCase());

  return str1;
}

export function formattoYMD(date: Date | string) {
  const dateObj = new Date(date);

  const year = dateObj.getFullYear();
  const month = `${dateObj.getMonth() + 1}`.padStart(2, "0");
  const day = `${dateObj.getDate()}`.padStart(2, "0");

  // return `${year}-${month}-${day}`;
  return "yyyy-mm-dd";
}
