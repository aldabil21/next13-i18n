import NavLink from "../navigation/NavLink";

export default function Header({ mini = false }) {
  return (
    <header className={`${mini ? "p-2" : "p-10"} bg-slate-900 text-white`}>
      <ul className="container flex justify-center space-x-2">
        <li>
          <NavLink href="/">Home</NavLink>
        </li>
        <li>
          <NavLink href="/users">Users</NavLink>
        </li>
      </ul>
    </header>
  );
}
