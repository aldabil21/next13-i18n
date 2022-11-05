import i18n from "@i18next";

const getUsers = async () => {
  console.log("Fetching");
  const users = await fetch("https://jsonplaceholder.typicode.com/users");
  return users.json();
};

async function Page() {
  // const users = use(getUsers());
  const users = await getUsers();

  return (
    <div className="p-10 text-center">
      <h1 className="text-3xl pb-8">{i18n.t("common:list")}</h1>
      <menu>
        {users.map((u: any) => (
          <li key={u.id}>{u.name}</li>
        ))}
      </menu>
    </div>
  );
}

export default Page;
