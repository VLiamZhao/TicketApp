import React from "react";
import prisma from "@/prisma/db";
import DataTable from "./DataTable";

const Tickets = async () => {
  const tickets = await prisma.tickets.findMany();
  console.log("Hello World");
  return (
    <div>
      <DataTable tickets={tickets} />
    </div>
  );
};

export default Tickets;
