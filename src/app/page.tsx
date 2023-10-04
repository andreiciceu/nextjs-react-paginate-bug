"use client";
import Pagination from "@/components/Pagination";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Pagination
        currentPage={2}
        pageCount={10}
        onPageChange={(p) => console.log("changed", p)}
      />
    </main>
  );
}
