export const getAccessToken = async () => {
  try {
    const searchParams = {
      audience: `https://${process.env.KINDE_SUBDOMAIN}.kinde.com/api`,
      grant_type: "client_credentials",
      client_id: process.env.KINDE_M2M_CLIENT_ID,
      client_secret: process.env.KINDE_M2M_CLIENT_SECRET,
    } as Record<string, string>;

    console.log({ searchParams });

    const res = await fetch(
      `https://${process.env.KINDE_SUBDOMAIN}.kinde.com/oauth2/token`,
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: new URLSearchParams(searchParams),
      }
    );
    const token = await res.json();
    console.error({ token });
    return token.access_token;
  } catch (err) {
    console.error(err);
  }
};

export const getUsers = async () => {
  const accessToken = await getAccessToken();

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const res = await fetch(
      `https://${process.env.KINDE_SUBDOMAIN}.kinde.com/api/v1/users`,
      {
        method: "GET",
        headers: headers,
      }
    );
    const data = await res.json();
    console.log({ data });
    return data;
  } catch (err) {
    console.error(err);
  }
};

export const getOrganizations = async () => {
  const accessToken = await getAccessToken();

  const headers = {
    Accept: "application/json",
    Authorization: `Bearer ${accessToken}`,
  };
  try {
    const res = await fetch(
      `https://${process.env.KINDE_SUBDOMAIN}.kinde.com/api/v1/organizations`,
      {
        method: "GET",
        headers: headers,
      }
    );
    const data = await res.json();
    console.log({ data });
    return data;
  } catch (err) {
    console.error(err);
  }
};
