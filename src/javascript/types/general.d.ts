import {Session} from "next-auth";

type AxiosThunkError = {
  message: string;
}

type NextAuthSession = { data: Session & {id: number, jwt: string}, status: "authenticated" } | { data: null, status: "loading" };

type NextAuthSessionData = Session & {id: number, jwt: string, role: string}
