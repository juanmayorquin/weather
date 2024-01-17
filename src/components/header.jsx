import Searcher from "./searcher";

export default function Header() {
  return (
    <header >
      <h2 className="flex gap-1 text-2xl">
        Right now in
        <Searcher />
        it`s <span>clear</span>
      </h2>
    </header>
  );
}
