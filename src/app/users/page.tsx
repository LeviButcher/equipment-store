import { db, users } from "@/db";
import { revalidatePath } from "next/cache";
import { UserCard } from "./UserCard";

export default async function Users() {
  const u = await db.select().from(users);

  return (
    <div>
      <div>hello world</div>
      <div>Users: {u.length}</div>
      <div>
        {u.map((x) => (
          <UserCard key={x.id} {...x} />
        ))}
      </div>
      <UserForm />
    </div>
  );
}

function UserForm() {
  async function createUser(formData: FormData) {
    "use server";
    console.log([...formData.keys()]);
    const user = {
      fullName: formData.get("fullName") as string,
      phone: formData.get("phone") as string,
    };
    await db.insert(users).values(user);
    revalidatePath("/users");
  }

  return (
    <form action={createUser}>
      <label>
        Fullname
        <input type="text" name="fullName" />
      </label>
      <label>
        Telephone
        <input type="tel" name="phone" />
      </label>
      <button type="submit">Submit</button>
    </form>
  );
}
