import useSWR from "swr";

export const useTree = () => {
  const { data: tree, mutate: mutateTree } = useSWR("/api/tree");
  return { tree, mutateTree };
};
