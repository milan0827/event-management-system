import { set } from "zod";
import { create } from "zustand";

interface Pagination {
  pageNo: number;
  totalPage: number;
  totalNoOfData: number;
}

const usePagination = create((set) => {});
