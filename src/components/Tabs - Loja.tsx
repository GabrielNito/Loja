import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { CardProduct_Loja } from "./CardProduct - Loja";

export function Tabs_Loja() {
  return (
    <Tabs defaultValue="account" className="bg-nitoBg">
      <TabsList className="grid w-full grid-cols-5">
        <TabsTrigger value="Category 1">Category 1</TabsTrigger>
        <TabsTrigger value="Category 2">Category 2</TabsTrigger>
        <TabsTrigger value="Category 3">Category 3</TabsTrigger>
        <TabsTrigger value="Category 4">Category 4</TabsTrigger>
        <TabsTrigger value="Category 5">Category 5</TabsTrigger>
      </TabsList>

      <TabsContent value="Category 1" className="flex flex-wrap">
        <CardProduct_Loja />
        <CardProduct_Loja />
        <CardProduct_Loja />
      </TabsContent>
      <TabsContent value="Category 2" className="flex flex-wrap">
        <CardProduct_Loja />
        <CardProduct_Loja />
        <CardProduct_Loja />
      </TabsContent>
      <TabsContent value="Category 3" className="flex flex-wrap">
        <CardProduct_Loja />
        <CardProduct_Loja />
        <CardProduct_Loja />
      </TabsContent>
      <TabsContent value="Category 4" className="flex flex-wrap">
        <CardProduct_Loja />
        <CardProduct_Loja />
        <CardProduct_Loja />
      </TabsContent>
      <TabsContent value="Category 5" className="flex flex-wrap">
        <CardProduct_Loja />
        <CardProduct_Loja />
        <CardProduct_Loja />
      </TabsContent>
    </Tabs>
  );
}
