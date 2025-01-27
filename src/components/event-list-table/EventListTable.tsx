"use client";

import { deleteEvents } from "@/app/actions/eventAction";
import { Event } from "@prisma/client";
import {
  ClientSideRowModelModule,
  ColDef,
  ValidationModule,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { redirect } from "next/navigation";
import { Button } from "../button/Button";

const EventListTable = ({ rowData }: { rowData: Event[] | null }) => {
  const colDefs: ColDef<Event>[] = [
    {
      field: "event_name",
      headerName: "Event Name",
    },
    {
      field: "description",
      headerName: "Description",
    },
    {
      field: "duration",
      headerName: "Duration",
    },
    {
      field: "venue",
      headerName: "Venue",
    },
    {
      field: "event_date",
      headerName: "Event Date",
    },
    {
      headerName: "Actions",
      cellRenderer: (params: { data: Event }) => {
        console.log("EVENT SCHEMA", params.data?.id);
        return (
          <div className="flex items-center justify-center gap-2">
            <Button
              label="ED"
              variant={"primary"}
              size={"small"}
              onClick={() => redirect(`/update-events/${params.data.id}`)}
            />
            <Button
              label="VD"
              variant={"secondary"}
              size={"small"}
              onClick={() => redirect(`/events/${params.data.id}`)}
            />
            <Button
              label="DL"
              variant={"destructive"}
              size={"small"}
              onClick={async () => {
                const { error } = await deleteEvents(params.data.id);
                if (error) {
                  alert("Failed to delete, Please try again later");
                } else {
                  alert("Successfully deleted");
                }
              }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-[75vh]">
      <AgGridReact
        modules={[ClientSideRowModelModule, ValidationModule]}
        rowData={rowData}
        columnDefs={colDefs}
        rowHeight={60}
      />
    </div>
  );
};

export default EventListTable;
