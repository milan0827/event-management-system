"use client";

import { User } from "@prisma/client";
import {
  ClientSideRowModelModule,
  ColDef,
  colorSchemeDarkBlue,
  ModuleRegistry,
  PaginationChangedEvent,
  PaginationModule,
  themeQuartz,
  ValidationModule,
} from "ag-grid-community";
import { Button } from "../button/Button";
import { redirect, useSearchParams } from "next/navigation";
import { AgGridReact } from "ag-grid-react";
import { useCallback, useMemo, useState } from "react";

ModuleRegistry.registerModules([
  PaginationModule,
  ClientSideRowModelModule,
  ValidationModule /* Development Only */,
]);

const colorTheme = themeQuartz.withPart(colorSchemeDarkBlue);

const UserListTable = ({ rowData }: { rowData: User[] | null }) => {
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

  const colDefs: ColDef<User>[] = [
    {
      field: "full_name",
      headerName: "Full Name",
    },
    {
      field: "email",
      headerName: "Email",
    },
    {
      field: "role",
      headerName: "Role",
    },
    {
      headerName: "Actions",
      cellRenderer: (params: { data: User }) => {
        return (
          <div className="flex items-center justify-center gap-2">
            <Button
              label="ED"
              variant={"primary"}
              size={"small"}
              onClick={() => redirect(`/update-users/${params.data.id}`)}
            />
            <Button
              label="VD"
              variant={"secondary"}
              size={"small"}
              onClick={() => redirect(`/users/${params.data.id}`)}
            />
            <Button
              label="DL"
              variant={"destructive"}
              size={"small"}
              // onClick={async () => {
              //   const { error } = await deleteEvents(params.data.id);
              //   if (error) {
              //     alert("Failed to delete, Please try again later");
              //   } else {
              //     alert("Successfully deleted");
              //   }
              // }}
            />
          </div>
        );
      },
    },
  ];

  return (
    <div className="h-[76vh] w-full">
      <AgGridReact
        animateRows
        rowData={rowData}
        columnDefs={colDefs}
        rowHeight={50}
        pagination
        paginationPageSize={pageSize}
        paginationPageSizeSelector={pagination.paginationPageSizeSelector}
        onPaginationChanged={onPaginationChanged}
        theme={colorTheme}
        domLayout="normal"
        className="w-full"
        defaultColDef={{
          flex: 1,
        }}
      />
    </div>
  );
};

export default UserListTable;
