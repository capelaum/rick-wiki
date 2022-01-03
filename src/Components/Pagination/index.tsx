import { Button, ButtonGroup, Flex } from "@chakra-ui/react";

import Pagination from "@choc-ui/paginator";

import { Info } from "../../utils/types";

interface PaginationProps {
  setPage: (page: number) => void;
  page: number;
  info: Info;
}

export function PaginationComponent({ info, setPage, page }: PaginationProps) {
  return (
    <Flex w="full" pb={5} alignItems="center" justifyContent="center">
      <Pagination
        baseStyles={{
          border: "1px solid",
          borderColor: "cyan.600",
          fontWeight: 600,
        }}
        paginationProps={{ display: "flex" }}
        colorScheme="cyan"
        defaultCurrent={1}
        total={info.count}
        pageNeighbours={1}
        defaultPageSize={20}
        size="sm"
        responsive={{ activePage: true }}
        current={page}
        onChange={(page) => setPage(page)}
      />
    </Flex>
  );
}
