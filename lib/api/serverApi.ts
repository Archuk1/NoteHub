import { Note } from "@/types/note";
import { User } from "@/types/user";
import { api } from "@/app/api/api";
import { cookies } from "next/headers";

interface FetchNotesParams {
  search: string;
  page: number;
  perPage?: number;
  tag?: string;
}

interface FetchNotesResponse {
  notes: Note[];
  totalPages: number;
}

export const checkServerSession = async () => {
  const cookieStore = await cookies();

  const res = await api.get("/auth/session", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return res;
};

export async function fetchNotes({
  search = "",
  page = 1,
  perPage = 12,
  tag,
}: FetchNotesParams): Promise<FetchNotesResponse> {
  const cookieStore = await cookies();

  const response = await api.get<FetchNotesResponse>("/notes", {
    params: { search, page, perPage, tag },
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data;
}

export async function fetchNoteById(noteId: string): Promise<Note> {
  const cookieStore = await cookies();

  const response = await api.get<Note>(`/notes/${noteId}`, {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return response.data;
}

export async function getCurrentUser(): Promise<User> {
  const cookieStore = await cookies();

  const { data } = await api.get<User>("/users/me", {
    headers: {
      Cookie: cookieStore.toString(),
    },
  });

  return data;
}