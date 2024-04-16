import styled from "styled-components";

import { formatCurrency } from "../../utils/helpers";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import toast from "react-hot-toast";

const TableRow = styled.div`
  display: grid;
  grid-template-columns: 0.6fr 1.8fr 2.2fr 1fr 1fr 1fr;
  column-gap: 2.4rem;
  align-items: center;
  padding: 1.4rem 2.4rem;

  &:not(:last-child) {
    border-bottom: 1px solid var(--color-grey-100);
  }
`;

const Img = styled.img`
  display: block;
  width: 6.4rem;
  aspect-ratio: 3 / 2;
  object-fit: cover;
  object-position: center;
  transform: scale(1.5) translateX(-7px);
`;

const Cabin = styled.div`
  font-size: 1.6rem;
  font-weight: 600;
  color: var(--color-grey-600);
  font-family: "Sono";
`;

const Price = styled.div`
  font-family: "Sono";
  font-weight: 600;
`;

const Discount = styled.div`
  font-family: "Sono";
  font-weight: 500;
  color: var(--color-green-700);
`;

import { useState } from "react";

import useDeleteCabin from "./useDeleteCabin";
import CreateCabinForm from "./CreateCabinForm";

export default function CabinRow({ cabin }) {
  const [edit, setEdit] = useState(false);
  const { isDeleting, mutate } = useDeleteCabin();

  const {
    id: cabinId,
    image,
    name,
    regularPrice,
    maxCapacity,
    discount,
  } = cabin;

  //console.log("this is the image", image);

  return (
    <>
      <TableRow>
        <Img src={image} alt="cabin image"></Img>
        <Cabin>{name}</Cabin>
        <div>up to {maxCapacity} guests</div>
        <Price>{formatCurrency(regularPrice)}</Price>
        <Discount>{formatCurrency(discount)}</Discount>
        <div>
          <button
            onClick={(e) => {
              e.preventDefault();
              setEdit((value) => !value);
            }}
          >
            edit
          </button>
          <button disabled={isDeleting} onClick={() => mutate(cabinId)}>
            delete
          </button>
        </div>
      </TableRow>
      {edit && <CreateCabinForm cabinToEdit={cabin} />}
    </>
  );
}
