import React from "react";
import Card from "./card";
import Table from "./table";

function TableCard() {
  return (
    <div className="flex flex-row gap-8 border-t border-gray-200 pt-3  pb-2">
      <Card />
      <Table />
    </div>
  );
}

export default TableCard;
