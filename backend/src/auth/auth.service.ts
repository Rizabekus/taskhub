type User = {
  id: number;
  email: string;
};

const fakeUser: User = {
  id: 1,
  email: "test@mail.com",
};

export const register = async (email: string, password: string) => {
  return {
    id: 1,
    email,
  };
};

export const login = async (email: string, password: string) => {
  if (email === fakeUser.email) {
    return {
      token: "fake-jwt-token",
    };
  }

  throw new Error("Invalid credentials");
};