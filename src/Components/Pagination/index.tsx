import {
  Button,
  ButtonGroup,
  Flex,
  forwardRef,
  useColorModeValue,
} from "@chakra-ui/react";

import Pagination from "@choc-ui/paginator";

import {
  MdKeyboardArrowRight,
  MdKeyboardArrowLeft,
  MdOutlineArrowBack,
  MdOutlineArrowForward,
} from "react-icons/md";

import { Info } from "../../utils/types";

interface PaginationProps {
  setPage: (page: number) => void;
  page: number;
  info: Info;
}

export function PaginationComponent({ info, setPage, page }: PaginationProps) {
  const cyanColor = useColorModeValue("cyan.600", "cyan");
  const grayColor = useColorModeValue("white", "gray.700");

  const Prev = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      <MdKeyboardArrowLeft size={20} />
    </Button>
  ));

  const Next = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      <MdKeyboardArrowRight size={20} />
    </Button>
  ));

  const Page = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      {props.children}
    </Button>
  ));

  const Backward = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      <MdOutlineArrowBack size={16} />
    </Button>
  ));

  const Forward = forwardRef((props, ref) => (
    <Button ref={ref} {...props}>
      <MdOutlineArrowForward size={16} />
    </Button>
  ));

  const itemRender = (_, type) => {
    if (type === "prev") {
      return Prev;
    }
    if (type === "next") {
      return Next;
    }
    if (type === "backward") {
      return Backward;
    }
    if (type === "forward") {
      return Forward;
    }
    if (type === "page") {
      return Page;
    }
  };
  return (
    <Flex w="full" pb={8} alignItems="center" justifyContent="center">
      <Pagination
        baseStyles={{
          border: "1px solid",
          borderColor: cyanColor,
          color: cyanColor,
        }}
        activeStyles={{
          bg: cyanColor,
          color: grayColor,
        }}
        hoverStyles={{
          bg: cyanColor,
          color: grayColor,
        }}
        paginationProps={{ display: "flex" }}
        colorScheme="cyan"
        defaultCurrent={1}
        total={info.count}
        pageNeighbours={1}
        defaultPageSize={20}
        size="sm"
        responsive={{
          activePage: true,
          fastBackward: false,
          fastForward: false,
        }}
        current={page}
        onChange={(page) => setPage(page)}
        itemRender={itemRender}
      />
    </Flex>
  );
}
