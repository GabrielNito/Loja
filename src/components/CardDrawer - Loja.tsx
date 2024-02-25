import { Card, CardContent, CardFooter } from "@/components/ui/card";

export function CardDrawer_Loja() {
  return (
    <Card className="w-[350px]">
      <CardContent>
        <img src="/mockup.png" alt="Product Image" draggable="false" />

        <section className="flex flex-col gap-3 pt-3">
          <h1 className="text-2xl font-medium leading-none">
            This is the Product's Name
          </h1>
          <p>This is the Product's Description</p>
          <h2 className="text-xl font-medium leading-none text-nitoAccent">
            R$ 99,99
          </h2>
        </section>
      </CardContent>
    </Card>
  );
}
