import { Search, PlusCircle } from "lucide-react";
import { Label } from "./components/ui/label";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogFooter,
  DialogTitle,
  DialogDescription,
  DialogClose,
} from "./components/ui/dialog";
import { Input } from "./components/ui/input";
import { Button } from "./components/ui/button";
import {
  Table,
  TableHead,
  TableHeader,
  TableBody,
  TableRow,
  TableCell,
} from "./components/ui/table";

function App() {
  return (
    <>
      <div className="p-6 max-w-4xl mx-auto space-y-4">
        <h1 className="text-3xl font-bold">Produtos</h1>

        <div className="flex items-center justify-between">
          <form className="flex items-center gap-2">
            <Input name="id" placeholder="ID do pedido"></Input>
            <Input name="name" placeholder="Nome do Produto"></Input>
            <Button type="submit" variant="nito">
              <Search className="w-4 h-4 mr-2" />
              Filtrar resultados
            </Button>
          </form>

          <Dialog>
            <DialogTrigger asChild>
              <Button variant="nito">
                <PlusCircle className="w-4 h-4 mr-2" />
                Novo Produto
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Novo Produto</DialogTitle>
                <DialogDescription>
                  Criar um novo produto no sistema
                </DialogDescription>

                <form className="space-y-6">
                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="name">Produto</Label>
                    <Input className="col-span-3" id="name" />
                  </div>

                  <div className="grid grid-cols-4 items-center text-right gap-3">
                    <Label htmlFor="price">Preço</Label>
                    <Input className="col-span-3" id="price" />
                  </div>

                  <DialogFooter>
                    <DialogClose asChild>
                      <Button type="button" variant="outline">
                        Cancelar
                      </Button>
                    </DialogClose>
                    <Button type="submit" variant="nito">
                      Salvar
                    </Button>
                  </DialogFooter>
                </form>
              </DialogHeader>
            </DialogContent>
          </Dialog>
        </div>
        <div className="border rounded-lg p-2">
          <Table>
            <TableHeader>
              <TableHead>ID</TableHead>
              <TableHead>Produto</TableHead>
              <TableHead>Preço</TableHead>
            </TableHeader>
            <TableBody>
              {Array.from({ length: 10 }).map((_, i) => {
                return (
                  <TableRow key={i}>
                    <TableCell>asd76as79f6a8</TableCell>
                    <TableCell>Produto {i}</TableCell>
                    <TableCell>R$ 192,00</TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>
      </div>
    </>
  );
}

export default App;
