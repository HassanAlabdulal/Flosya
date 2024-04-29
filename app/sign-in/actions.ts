"use server";

import { revalidatePath } from "next/cache";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";
import { UserAuth } from "../../types/auth";
import { createClient } from "@/utils/supabase/server";

export async function login(dataAuth: UserAuth) {
  const cookieStore = cookies();
  const supabase = createClient(cookieStore);

  // type-casting here for convenience
  // in practice, you should validate your inputs

  const { data, error } = await supabase.auth.signInWithPassword(dataAuth);
  // console.log(data);

  if (error) {
    redirect("/404");
  }

  revalidatePath("/", "layout");
  redirect("/");
}
