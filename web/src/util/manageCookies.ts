export const getCookie = (name: string) => {
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (var i = 0; i < cookies.length; i++) {
      let cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === name + "=") {
        const cookieValue = decodeURIComponent(
          cookie.substring(name.length + 1)
        );
        return cookieValue;
      }
    }
  }
  return null;
};

type createProps = {
  name: string;
  value: string;
  expires: Date;
};

export const createCookie = ({ name, value, expires }: createProps) => {
  const newCookie = `${name}=${value}; expires=${expires}`;
  document.cookie = newCookie;
};
