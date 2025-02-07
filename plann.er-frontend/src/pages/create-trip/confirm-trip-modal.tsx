import { User, X } from "lucide-react";
import { FC, FormEvent } from "react";
import { Button } from "../../components/button";

interface ConfirmTripModalProps {
  closeConfirmTripModal: () => void;
  setOwnerName: (name: string) => void;
  setOwnerEmail: (email: string) => void;
  createTrip: (event: FormEvent<HTMLFormElement>) => void;
}

export const ConfirmTripModal: FC<ConfirmTripModalProps> = ({
  closeConfirmTripModal,
  createTrip,
  setOwnerEmail,
  setOwnerName,
}) => {
  return (
    <div className="fixed inset-0 bg-black/60 flex items-center justify-center">
      <div className="w-[640px] rounded-xl py-5 px-6 shadow-shape bg-zinc-900 space-y-5">
        <div className="space-y-2">
          <div className="flex items-center justify-between">
            <h2>Confirmar criação da viagem</h2>
            <button onClick={closeConfirmTripModal} type="button">
              <X className="size-5 text-zinc-400" />
            </button>
          </div>
          <p className="text-sm tex-zinc-400">
            Para concluir a criação da viagem para{" "}
            <span className="text-zinc-100 font-semibold">
              Florianópolis, Brasil
            </span>{" "}
            nas datas de{" "}
            <span className="text-zinc-100 font-semibold">
              16 a 27 de Agosto de 2024{" "}
            </span>
            preencha seus dados abaixo:
          </p>
        </div>

        <form onSubmit={createTrip} className="space-y-3">
          <div className="h-14 px-4 bg-zinc-950 border-zinc-900 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              onChange={(event) => setOwnerName(event.target.value)}
              name="name"
              placeholder="Seu nome completo"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>
          <div className="h-14 px-4 bg-zinc-950 border-zinc-900 rounded-lg flex items-center gap-2">
            <User className="text-zinc-400 size-5" />
            <input
              onChange={(event) => setOwnerEmail(event.target.value)}
              type="email"
              name="email"
              placeholder="Seu email pessoal"
              className="bg-transparent text-lg placeholder-zinc-400 w-40 outline-none flex-1"
            />
          </div>
          <Button type="submit" variant="primary" size="full">
            Confirmar Criação da Viagem
          </Button>
        </form>
      </div>
    </div>
  );
};
