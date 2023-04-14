import { useQuery } from "@tanstack/react-query";
import { sp } from "@pnp/sp";
import { IVideoProps } from "../types";

const LIST_NAME = "Videos";

const getVideosList = async () => {
  const res = await sp.web.lists.getByTitle(LIST_NAME).items.getAll();
  return res;
};
const getNewsById = async (id) => {
  const res = await sp.web.lists.getByTitle(LIST_NAME).items.getById(id).get();

  return res;
};

//hooks
export const useGetVideosList = (count: number = null) => {
  const { data, isLoading } = useQuery<IVideoProps[]>({
    queryKey: ["videos"],
    queryFn: () => getVideosList(),
    onError(err) {
      console.log(err);
    },
  });
  return { data, isLoading };
};
export const useGetVideo = (id) => {
  const { data, isLoading } = useQuery<IVideoProps>({
    queryKey: ["video", id],
    enabled: !!id,
    queryFn: () => getNewsById(id),
    onError(err) {
      // errorAlert(err);
      console.log(err);
    },
  });

  return { data, isLoading };
};
