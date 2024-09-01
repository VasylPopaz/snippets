"use server";

import { db } from "@/db";
import { redirect } from "next/navigation";

export const createSnippet = async (
  formsState: { message: string },
  formData: FormData
) => {
  try {
    const title = formData.get("title");
    const code = formData.get("code");

    if (typeof title !== "string" || title.length < 3) {
      return { message: "Title must be longer" };
    }

    if (typeof code !== "string" || code.length < 15) {
      return { message: "Code must be longer" };
    }

    await db.snippet.create({
      data: {
        title,
        code,
      },
    });
  } catch (error: unknown) {
    if (error instanceof Error) {
      return { message: error.message };
    } else {
      return { message: "Something went wrong..." };
    }
  }
  redirect("/");
};

export const editSnippet = async (id: number, code: string) => {
  await db.snippet.update({
    where: { id },
    data: {
      code,
    },
  });
  redirect(`/snippets/${id}`);
};

export const deleteSnippet = async (id: number) => {
  await db.snippet.delete({ where: { id } });
  redirect("/");
};
