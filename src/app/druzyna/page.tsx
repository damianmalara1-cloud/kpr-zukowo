import team from "@/data/team.json";
import PositionFilter from "@/components/PositionFilter";

export const metadata = {
  title: "Drużyna | KPR Fitdieta Żukowo",
  description: "Poznaj zawodników i sztab szkoleniowy KPR Fitdieta Żukowo.",
};

export default function DruzynaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header */}
      <div className="bg-navy text-white py-16">
        <div className="max-w-6xl mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight animate-fade-in">
            Drużyna
          </h1>
          <p className="text-lg text-gray-300 font-medium">
            Sezon {team.season}
          </p>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <PositionFilter players={team.players} staff={team.staff} />

        {/* Info */}
        <div className="mt-16 bg-navy/5 rounded-2xl p-8 text-center">
          <p className="text-gray-600">
            Lista zawodników jest aktualizowana na bieżąco.
            <br />
            Pełny skład drużyny dostępny również w dniu meczu.
          </p>
        </div>
      </div>
    </div>
  );
}
