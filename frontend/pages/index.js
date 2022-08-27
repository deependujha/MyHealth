import Main from "../components/mainPage/Main";

export default function Home() {
  return (
    <div className="">
      <div className={`customText text-center mt-3`}>
        MyHealth - Your health database
      </div>
      <div className={``}>
        <Main />
      </div>
    </div>
  );
}
