import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { useLine1AsisUpdateJudgementMutation } from "../../../app/services/asisService";
import { TrashIcon } from "../../../common/components/icons";

export default function AsisConfirmUpdateJudgement({
    item,
    judgement,
    children,
}) {
    let [isOpen, setIsOpen] = useState(false);

    function closeModal() {
        setIsOpen(false);
    }

    function openModal() {
        // setIsOpen(true);
    }

    const [
        _updateJudgement,
        { isLoading: updateJudgementIsLoading, error: updateJudgementIsError },
    ] = useLine1AsisUpdateJudgementMutation();

    function updateJudgement(e) {
        e.preventDefault();
        _updateJudgement({
            id: item.id,
            judgement,
        });
    }

    return (
        <>
            <div className="" onClick={openModal}>
                {children}
            </div>

            <Transition appear show={isOpen} as={Fragment}>
                <Dialog as="div" className="relative z-10" onClose={closeModal}>
                    <Transition.Child
                        as={Fragment}
                        enter="ease-out duration-300"
                        enterFrom="opacity-0"
                        enterTo="opacity-10"
                        leave="ease-in duration-200"
                        leaveFrom="opacity-10"
                        leaveTo="opacity-0"
                    >
                        <div className="fixed inset-0 bg-black bg-opacity-25" />
                    </Transition.Child>

                    <div className="fixed inset-0 overflow-y-auto">
                        <div className="flex min-h-full items-center justify-center p-4 text-center">
                            <Transition.Child
                                as={Fragment}
                                enter="ease-out duration-300"
                                enterFrom="opacity-0 scale-95"
                                enterTo="opacity-100 scale-100"
                                leave="ease-in duration-200"
                                leaveFrom="opacity-100 scale-100"
                                leaveTo="opacity-0 scale-95"
                            >
                                <Dialog.Panel className="flex flex-col items-center w-full max-w-md transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all">
                                    <div className="text-[#F5827A]">
                                        <TrashIcon
                                            width={92}
                                            height={116}
                                            className=" mt-20"
                                        />
                                    </div>
                                    <div className="text-xl font-bold text-[#343C44] mt-9">
                                        Delete?
                                    </div>
                                    <div className="text-gray-500 font-semibold mt-2">
                                        You will delete this file!
                                    </div>
                                    <div className="flex flex-1 items-center gap-2 mt-14">
                                        <button
                                            onClick={updateJudgement}
                                            className="min-w-[185px] py-3 px-6 text-white bg-[#F04438] rounded-lg disabled:bg-[#C0C3C5]"
                                            disabled={updateJudgementIsLoading}
                                        >
                                            Yes, Delete it
                                        </button>
                                        <button
                                            onClick={closeModal}
                                            className="min-w-[185px] py-3 px-6 text-white bg-[#C0C3C5] rounded-lg"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </Dialog.Panel>
                            </Transition.Child>
                        </div>
                    </div>
                </Dialog>
            </Transition>
        </>
    );
}
