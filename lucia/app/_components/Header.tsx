import Link from "next/link";

export default function Header() {
  return (
    <header className="container w-screen min-w-full h-20 pt-4 shadow-md bg-glass-morphism backdrop-blur">
      <div className="grid grid-flow-row-dense grid-cols-5">
        <div className="col-span-4 mt-2">
          <Link href={"/"} className="m-16 text-xl font-semibold text-gray-800">
            Testing Authentication 🔑
          </Link>
        </div>
        <div>
          <ul className="flex justify-center items-center">
            <li>
              <button className="btn btn-accent mr-4">sign-in</button>
            </li>
            <li>
              <button className="btn ">sign-out</button>
            </li>
          </ul>
        </div>
      </div>
    </header>
  );
}
