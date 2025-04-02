"use client";

import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { createContext, useRef, useState, ReactNode } from "react";
import { Button } from "@/components/ui/button";

type ModalType = "confirm" | "alert" | "error";

type ModalOptions = {
  type?: ModalType;
  title?: string;
  description?: string;
  onConfirm?: () => void;
  onCancel?: () => void;
};

type ModalContextType = {
  open: (options: ModalOptions) => void;
  confirmAsync: (options: Omit<ModalOptions, "onConfirm" | "onCancel">) => Promise<boolean>;
  close: () => void;
};

export const ModalContext = createContext<ModalContextType | null>(null);

export const ModalProvider = ({ children }: { children: ReactNode }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [options, setOptions] = useState<ModalOptions>({});
  const resolverRef = useRef<(value: boolean) => void>();

  const open = (opts: ModalOptions) => {
    setOptions({ ...opts });
    setIsOpen(true);
  };

  const close = () => {
    setIsOpen(false);
    options.onCancel?.();
    resolverRef.current?.(false); // async용 Promise reject 역할
    resolverRef.current = undefined;
  };

  const handleConfirm = () => {
    setIsOpen(false);
    options.onConfirm?.();
    resolverRef.current?.(true); // async용 Promise resolve 역할
    resolverRef.current = undefined;
  };

  const confirmAsync = (opts: Omit<ModalOptions, "onConfirm" | "onCancel">): Promise<boolean> => {
    return new Promise((resolve) => {
      resolverRef.current = resolve;
      open({
        ...opts,
        type: "confirm",
        onCancel: () => resolve(false), // 닫힘 처리
      });
    });
  };

  const isConfirm = options.type === "confirm";
  const isDestructive = options.type === "error" || isConfirm;

  return (
    <ModalContext.Provider value={{ open, confirmAsync, close }}>
      {children}

      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogContent>
          <DialogHeader>
            <DialogTitle>{options.title || "알림"}</DialogTitle>
            {options.description && <DialogDescription>{options.description}</DialogDescription>}
          </DialogHeader>
          <DialogFooter>
            <DialogClose asChild>
              <Button variant="secondary" onClick={close}>
                {isConfirm ? "취소" : "닫기"}
              </Button>
            </DialogClose>
            {isConfirm && (
              <Button variant={isDestructive ? "destructive" : "default"} onClick={handleConfirm}>
                확인
              </Button>
            )}
          </DialogFooter>
        </DialogContent>
      </Dialog>
    </ModalContext.Provider>
  );
};
