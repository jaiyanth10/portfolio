import MainHeader from "./mainHeader";
export default function errorPage() {
  return (
    <>
      <MainHeader />
      <main>
        <h2>Navigated to unexisting page, please open using valid URL.</h2>
      </main>
    </>
  );
}
