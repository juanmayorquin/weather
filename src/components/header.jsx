import Searcher from "./searcher";

export default function Header({currentLocationName}) {
  return (
    <header >
      <h2 className="flex gap-1 text-2xl">
        Right now in
        <Searcher currentLocationName={currentLocationName} />
        it`s <span>clear</span>
      </h2>
    </header>
  );
}
