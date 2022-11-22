import { useRouter } from "next/router";
import React from "react";

function Logout() {
  const router = useRouter();

  async function logout() {
    document.cookie = "token" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    document.cookie = "user" + "=; expires=Thu, 01 Jan 1970 00:00:01 GMT;";
    router.push("/login");
  }

  return (
    <button
      className="w-full p-4 bg-black text-white hover:bg-black-900 rounded-2xl"
      onClick={logout}
    >
      Sair
    </button>
  );
}

export { Logout };
