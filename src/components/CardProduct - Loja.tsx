import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardTitle,
} from "@/components/ui/card";
import Drawer_Loja from "./Drawer - Loja";
import { CardDrawer_Loja } from "./CardDrawer - Loja";

export function CardProduct_Loja() {
  return (
    <Card className="w-[350px] bg-nitoLBg">
      <CardContent className="flex justify-center flex-col gap-3">
        <img
          src="/mockup.png"
          alt="Product Image"
          className="rounded-t-lg w-auto"
          draggable={false}
        />
        <CardTitle className="mx-3">Product</CardTitle>
        <CardDescription className="mx-3">
          This is the product description
        </CardDescription>
        <h2 className="text-xl font-medium leading-none text-nitoAccent mx-3">
          R$ 99,99
        </h2>
      </CardContent>
      <CardFooter className="flex justify-evenly">
        <Button variant="ghost">Cancel</Button>
        <Drawer_Loja>
          <CardDrawer_Loja />
        </Drawer_Loja>
      </CardFooter>
    </Card>
  );
}
