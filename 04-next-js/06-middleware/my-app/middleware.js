import { NextResponse } from "next/server";

export function middleware(request){
    return NextResponse.json({message: "A message from About page."})
    return NextResponse.redirect(new URL('/', request.url))
}

export const config ={
    matcher: '/about/:path*',
}