"use client";

import { ThemeProvider } from "next-themes";


export default function Themes({ children }: { children: React.ReactNode;})
{
	return(
		<ThemeProvider enableSystem={true} enableColorScheme={true} defaultTheme={"system"}>
			{children}
		</ThemeProvider>
	)
}
