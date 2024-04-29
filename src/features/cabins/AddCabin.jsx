// import React, { useState } from "react";
// import Button from "../../ui/Button";
// import Modal from "../../ui/Modal";
// import CreateCabinForm from "./CreateCabinForm";

import Button from "../../ui/Button";
import Modal from "../../ui/Modal";
import CreateCabinForm from "./CreateCabinForm";

export default function addCabin() {
  return (
    <Modal>
      <Modal.Open opens="cabin-form">
        <Button>add new cabin</Button>
      </Modal.Open>
      <Modal.Window name="cabin-form">
        <CreateCabinForm />
      </Modal.Window>
    </Modal>
  );
}

// export default function AddCabin() {
//   const [showForm, setShowForm] = useState(false);

//   return (
//     <div>
//       <Button onClick={() => setShowForm((showForm) => !showForm)}>
//         add new cabin
//       </Button>

//       {showForm && (
//         <Modal onClose={() => setShowForm(false)}>
//           <CreateCabinForm onCloseModal={() => setShowForm(false)} />
//         </Modal>
//       )}
//     </div>
//   );
// }
