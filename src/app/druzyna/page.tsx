import team from "@/data/team.json";
import PositionFilter from "@/components/PositionFilter";
import TeamPhoto from "@/components/TeamPhoto";

export const metadata = {
  title: "Drużyna | KPR Fitdieta Żukowo",
  description: "Poznaj zawodników i sztab szkoleniowy KPR Fitdieta Żukowo.",
};

export default function DruzynaPage() {
  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header with team photo */}
      <div className="relative bg-navy text-white overflow-hidden">
        {/* Background image */}
        <div className="absolute inset-0">
          <img
            src="/images/Grupa-1.jpg"
            alt="Drużyna KPR Fitdieta Żukowo"
            className="w-full h-full object-cover object-top opacity-30"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-navy via-navy/80 to-navy/60" />
        </div>

        {/* Content */}
        <div className="relative z-10 max-w-6xl mx-auto px-4 pt-16 pb-8">
          <div className="text-center mb-8">
            <h1 className="text-4xl md:text-5xl font-black mb-2 uppercase tracking-tight animate-fade-in">
              Drużyna
            </h1>
            <p className="text-lg text-gray-300 font-medium">
              Sezon {team.season}
            </p>
          </div>

          {/* Team photo */}
          <div className="max-w-5xl mx-auto">
            <TeamPhoto
              src="/images/Grupa-1.jpg"
              alt="Drużyna KPR Fitdieta Żukowo - zdjęcie grupowe"
            />
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="max-w-6xl mx-auto px-4 py-12">
        <PositionFilter players={team.players} staff={team.staff} />
      </div>
    </div>
  );
}
