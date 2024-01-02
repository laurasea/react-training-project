import { ViewingStatus } from "../enums/ViewingStatusEnum";

export interface MyMovie {
  id: string;
  title: string;
  genre: string;
  viewingStatus: ViewingStatus;
  personalRating: number;
  notes: string;
  director: string;
}
