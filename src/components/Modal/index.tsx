import React from "react";

// hooks
import useScrollLock from "@/hooks/useScrollLock";

// icons
import { IoMdClose } from "react-icons/io";

// mocks
import { ProjectsMock } from "@/mocks/ProjectsMock";

interface IModal {
  isOpen: number;
  close: (isOpen?: boolean) => void;
}

interface IModalContent {
  close: (isOpen?: boolean) => void;
  title: string;
  subtitle: string;
  frontRepository?: string;
  backRepository?: string;
  urlVideo: string;
}

export default function Modal({ isOpen, close }: IModal) {
  useScrollLock(isOpen !== 0);

  return (
    isOpen !== 0 &&
    ProjectsMock.map(
      (project) =>
        project.id === isOpen && (
          <ModalContent
            key={project.id}
            title={project.title}
            subtitle={project.subtitle}
            frontRepository={project.frontRepository}
            backRepository={project.backRepository}
            urlVideo={project.urlVideo}
            close={close}
          />
        )
    )
  );
}

function ModalContent({
  close,
  frontRepository,
  backRepository,
  subtitle,
  title,
  urlVideo,
}: IModalContent) {
  return (
    <div className="w-screen h-screen fixed z-[999] top-0 left-0 ">
      <div
        className="bg-black-main/50 w-full h-full absolute cursor-pointer"
        onClick={() => close()}
      />
      <div className="flex justify-center items-center h-full">
        <div className="relative flex flex-col w-fit sm:h-full md:h-fit rounded-md p-10 bg-gradient-to-tr to-red-dark from-black-main">
          <button className="absolute top-4 right-4" onClick={() => close()}>
            <IoMdClose size={30} />
          </button>
          <div className="flex sm:flex-col-reverse md:flex-row gap-10">
            <iframe
              className="rounded-md sm:hidden md:block"
              width="500"
              height="325"
              src={urlVideo}
              title="YouTube video player"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            />
            <div className="md:hidden sm:block ">
              <iframe
                className="rounded-md w-full h-[250px]"
                width="500"
                height="325"
                src={urlVideo}
                title="YouTube video player"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              />
              <div className="flex flex-row gap-4 items-center justify-center pt-10">
                {frontRepository && (
                  <a
                    href={frontRepository}
                    target="_blank"
                    className="bg-gradient-to-tr to-red-dark from-red-main text-white-main text-base rounded-[2px] px-4 py-2 w-fit hover:from-red-dark hover:to-red-main transition-all duration-300 ease-in-out"
                  >
                    Front end
                  </a>
                )}
                {backRepository && (
                  <a
                    href={backRepository}
                    target="_blank"
                    className="bg-gradient-to-tr to-red-dark from-red-main text-white-main text-base rounded-[2px] px-4 py-2 w-fit hover:from-red-dark hover:to-red-main transition-all duration-300 ease-in-out"
                  >
                    Back end
                  </a>
                )}
              </div>
            </div>
            <div
              style={{ width: "full" }}
              className={`border border-white-main sm:hidden md:block`}
            />
            <section className="gap-4 flex flex-col">
              <h1 className="font-semibold text-4xl">{title}</h1>
              <div className="flex flex-col h-full justify-between gap-6 ">
                <p className="sm:w-full md:w-[400px] text-sm">{subtitle}</p>
                <div className="sm:hidden md:block">
                  <div className="flex flex-row gap-4 ">
                    {frontRepository && (
                      <a
                        href={frontRepository}
                        target="_blank"
                        className="bg-gradient-to-tr to-red-dark from-red-main text-white-main text-base rounded-[2px] px-4 py-2 w-fit hover:from-red-dark hover:to-red-main transition-all duration-300 ease-in-out"
                      >
                        Front end
                      </a>
                    )}
                    {backRepository && (
                      <a
                        href={backRepository}
                        target="_blank"
                        className="bg-gradient-to-tr to-red-dark from-red-main text-white-main text-base rounded-[2px] px-4 py-2 w-fit hover:from-red-dark hover:to-red-main transition-all duration-300 ease-in-out"
                      >
                        Back end
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}
