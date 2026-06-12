import GithubProvider from "next-auth/providers/github"
import NextAuth from 'next-auth'

const handler = NextAuth({
  providers: [
    // OAuth authentication providers...
    GithubProvider({
      clientId: process.env.GITHUB_ID,
      clientSecret: process.env.GITHUB_SECRET,
    }),
  ]  
})

export {handler as GET, handler as POST}