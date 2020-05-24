
export default function Header () {
  return <header className="header">
    <h1>{process.env.NEXT_PUBLIC_APP_NAME}</h1>
  </header>;
}
