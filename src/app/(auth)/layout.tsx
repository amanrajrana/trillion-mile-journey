import UserState from "@/context/user/userState";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <UserState>{children}</UserState>;
}
