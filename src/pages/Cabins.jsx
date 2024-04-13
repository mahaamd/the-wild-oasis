import { useState } from "react";
import Heading from "../ui/Heading";
import Row from "../ui/Row";

import CabinTable from "../features/cabins/CabinTable";
import Button from "../ui/Button";

import CreateCabinForm from "../features/cabins/CreateCabinForm";

function Cabins() {
  const [showForm, setShowForm] = useState(false);

  return (
    <>
      <Row type="horizontal">
        <Heading as="h1">All cabins </Heading>
        <p>filter/sort</p>
      </Row>
      <Row>
        {/* <img src="https://srkbaoptowgshssvcezg.supabase.co/storage/v1/object/sign/cabin-images/cabin-001.jpg?token=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1cmwiOiJjYWJpbi1pbWFnZXMvY2FiaW4tMDAxLmpwZyIsImlhdCI6MTcxMjY4ODExNiwiZXhwIjoxNzQ0MjI0MTE2fQ.CrFyQ7bXqyiSvA25FjTAOvRgG82by_CMIDXmjiER3GQ&t=2024-04-09T18%3A41%3A58.771Z" /> */}
        <CabinTable />
        <Button onClick={() => setShowForm((showForm) => !showForm)}>
          add new cabin
        </Button>
      </Row>
      {showForm && <CreateCabinForm />}
    </>
  );
}

export default Cabins;
