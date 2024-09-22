"use client";

import { Fragment, useState } from "react";
import Modal from "@/components/ui/modal";

const ModalTest = () => {
  const [showModal, setShowModal] = useState(false);
  return (
    <Fragment>
      <div className="p-10 text-center">
        <h1 className="text-3xl mb-5">Create Custom Modal</h1>
        <button
          className="bg-blue-700 text-white focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5"
          onClick={() => setShowModal(true)}
        >
          Test Modal
        </button>
        <button className="bg-blue-700 text-white focus:outline-none font-medium text-sm rounded-lg px-5 py-2.5 text-center mr-5">
          Continue
        </button>
        <Modal
          isVisible={showModal}
          onClose={() => setShowModal(false)}
          className=""
        >
          <div className="border-2 border-black text-slate-900 bg-slate-50">
            <p className="text-xl font-bold mt-4">
              Modal Title Text :: Success
            </p>
            <p className="text-0.5xl mt-8">
              Modal Message Body: Your work has been saved
            </p>
          </div>
        </Modal>
      </div>
    </Fragment>
  );
};

export default ModalTest;
