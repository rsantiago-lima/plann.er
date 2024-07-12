import { ArrowRight, UserRoundPlus } from "lucide-react";
import { Button } from "../../../components/button";

interface InviteGuestsStepProps {
  openGuestsModal: () => void;
  emailsToInvite: string[];
  openConfirmTripModal: () => void;
}

export const InviteGuestsStep = ({
  openGuestsModal,
  emailsToInvite,
  openConfirmTripModal,
}: InviteGuestsStepProps) => {
  const singularOrPlural =
    emailsToInvite.length == 1 ? "Pessoa Convidada" : "Pessoas Convidadas";
  return (
    <div className="h-16 bg-zinc-900 px-4 rounded-xl flex items-center justify-between shadow-shape gap-3">
      {/*  */}
      <button
        type="button"
        onClick={openGuestsModal}
        className="flex items-center gap-2"
      >
        <UserRoundPlus className="size-5 text-zinc-400" />
        {emailsToInvite.length > 0 ? (
          <span className="text-zinc-100 text-lg flex-1">
            {emailsToInvite.length} {singularOrPlural}
          </span>
        ) : (
          <span className="text-zinc-400 text-lg flex-1">
            Quem estará na Viagem?
          </span>
        )}
      </button>
      {/*  */}
      <div className="w-px h-6 bg-zinc-800" />
      {/*  */}
      <Button onClick={openConfirmTripModal} variant="primary">
        Confirmar Viagem
        <ArrowRight className="size-5" />
      </Button>
    </div>
  );
};
