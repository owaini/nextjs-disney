import NextAuth from "next-auth";
import Providers from 'next-auth/providers';
import GoogleProvider from "next-auth/providers/google";
import GithubProvider from "next-auth/providers/github";
import { FirebaseAdapter } from "@next-auth/firebase-adapter";
import {db} from '../../../firebase'


export default NextAuth({
	// Configure one or more authentication providers
	providers: [
		GoogleProvider({
			clientId: process.env.GOOGLE_CLIENT_ID,
			clientSecret: process.env.GOOGLE_CLIENT_SECRET,
			authorization: {
				params: {
					prompt: "consent",
					access_type: "offline",
					response_type: "code",
				},
			},
		}),
		GithubProvider({
			clientId: process.env.GITHUB_CLIENT_ID,
			clientSecret: process.env.GITHUB_CLIENT_SECRET,
		}),
	],

	adapter: FirebaseAdapter(db),
});
