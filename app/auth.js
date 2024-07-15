import NextAuth from "next-auth";
import credentials from "next-auth/providers/credentials";
import CredentialsProvider from "next-auth/providers/credentials";
import { authConfig } from "./authconfig";
import { connectToDB } from "./lib/utils";
import { User } from "./lib/models";
import bycrpt from "bcrypt";

const login = async (credentials) => {
    try {
        connectToDB();
        const user = await User.findOne({username: credentials.username})

        if (!user) throw new Error("Wrong credentials");

        const isPasswordCorrect = await bycrpt.compare(credentials.password, user.password);
        if (!isPasswordCorrect) throw new Error("Wrong credentials");

        return user;
    } catch (error) {
        console.log(error);
        throw new Error("Failed to login");
    }
}

export const { signIn, signOut, auth } = NextAuth({
  ...authConfig,
  providers: [
    CredentialsProvider({
      async authorize(credentials) {
        try {
          const user = await login(credentials);
          return user;
        } catch (err) {
          return null;
        }
      },
    }),
  ],
});