"use client";

import { deleteEvents } from "@/app/actions/eventAction";
import { Event } from "@prisma/client";
import {
  ClientSideRowModelModule,
  ColDef,
  ValidationModule,
  PaginationModule,
  ModuleRegistry,
  PaginationChangedEvent,
  // ServerSideRow,
} from "ag-grid-community";
import { AgGridReact } from "ag-grid-react";
import { redirect, useRouter, useSearchParams } from "next/navigation";
import { Button } from "../button/Button";
import { useCallback, useEffect, useMemo, useState } from "react";

ModuleRegistry.registerModules([
  PaginationModule,
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
]);

const EventListTable = ({ rowData }: { rowData: Event[] | null }) => {
  const searchParams = useSearchParams();
  const [pageSize, setPageSize] = useState(10);

  const onPaginationChanged = useCallback((params: PaginationChangedEvent) => {
    const param = new URLSearchParams(searchParams.toString());
    param.set("pageSize", String(pageSize));
    const newPageSize = params.api.paginationGetPageSize();
    // router.push(`/manage-events?pageSize=${newPageSize}`);
    console.log("INITLA", searchParams.get("pageSize"));
    setPageSize(newPageSize);
  }, []);

  const pagination = useMemo(() => {
    return {
      pagination: true,
      paginationPageSize: 10,
      paginationPageSizeSelector: [10, 20, 30, 40, 50],
    };
  }, []);

  console.log("Pagination", pageSize);

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
    <div className="h-[76vh]">
      <AgGridReact
        animateRows
        rowData={rowData}
        columnDefs={colDefs}
        rowHeight={50}
        pagination
        paginationPageSize={pageSize}
        paginationPageSizeSelector={pagination.paginationPageSizeSelector}
        onPaginationChanged={onPaginationChanged}
      />
    </div>
  );
};

export default EventListTable;
