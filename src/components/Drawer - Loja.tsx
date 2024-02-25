import { ReactNode } from "react";
import { Button } from "@/components/ui/button";
import {
  Drawer,
  DrawerClose,
  DrawerContent,
  DrawerDescription,
  DrawerFooter,
  DrawerHeader,
  DrawerTitle,
  DrawerTrigger,
} from "@/components/ui/drawer";

interface Props {
  children?: ReactNode;
}

export default function Drawer_Loja({ children }: Props) {
  return (
    <Drawer>
      <DrawerTrigger asChild>
        <Button variant="nito">Detalhes</Button>
      </DrawerTrigger>
      <DrawerContent>
        <div className="mx-auto w-full max-w-sm p-5">
          <div className="flex justify-center items-center gap-4">
            {children}
          </div>
          <DrawerFooter>
            <Button variant="nito">Adicionar a Lista de Desejos</Button>
            <DrawerClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DrawerClose>
          </DrawerFooter>
        </div>
      </DrawerContent>
    </Drawer>
  );
}
